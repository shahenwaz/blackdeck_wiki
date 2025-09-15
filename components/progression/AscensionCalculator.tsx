"use client";
import React, { useMemo, useState } from "react";
import type { Rank, Trait, Tier, StarStep } from "@/src/data/ascension";
import { ASCENSION_COSTS, MIX_RATIOS } from "@/src/data/ascension";

const ranks: Rank[] = ["Uncommon", "Rare", "Epic", "Legendary"];
const traits: Trait[] = ["Melee", "Ranged", "Hero"];
const tiers: Tier[] = ["lesser", "greater", "grand"];

// ✅ Strong types for the soulstone counts
type TierCounts = Record<Tier, number>;
type Piles = {
  clear: TierCounts;
  trait: TierCounts;
};

function sumSteps(
  rank: Rank,
  trait: Trait,
  from: StarStep,
  to: StarStep
): Piles {
  const table = ASCENSION_COSTS[rank];
  const need: Piles = {
    clear: { lesser: 0, greater: 0, grand: 0 },
    trait: { lesser: 0, greater: 0, grand: 0 },
  };
  for (let s = from; s < to; s++)
    tiers.forEach((t) => {
      need.clear[t] += table[s].clear[t];
      need.trait[t] += table[s].trait[t];
    });
  return need;
}

function optimize(required: Piles, have: Piles) {
  // ✅ Typed copies instead of JSON clone
  const need: Piles = {
    clear: { ...required.clear },
    trait: { ...required.trait },
  };
  const stock: Piles = {
    clear: { ...have.clear },
    trait: { ...have.trait },
  };

  const spend = (k: "clear" | "trait", t: Tier) => {
    const u = Math.min(need[k][t], stock[k][t]);
    need[k][t] -= u;
    stock[k][t] -= u;
  };
  const craft = (k: "clear" | "trait", from: Tier, to: Tier, r: number) => {
    const shortage = need[k][to];
    const craftable = Math.floor(stock[k][from] / r);
    const make = Math.min(shortage, craftable);
    stock[k][from] -= make * r;
    need[k][to] -= make;
  };

  (["clear", "trait"] as const).forEach((k) => {
    spend(k, "grand");
    spend(k, "greater");
    spend(k, "lesser");
    craft(k, "lesser", "greater", MIX_RATIOS.lesserToGreater);
    spend(k, "greater");
    craft(k, "greater", "grand", MIX_RATIOS.greaterToGrand);
    spend(k, "grand");
  });
  return { need, stock };
}

export default function AscensionCalculator() {
  const [rank, setRank] = useState<Rank>("Rare");
  const [trait, setTrait] = useState<Trait>("Ranged");
  const [from, setFrom] = useState<StarStep>(1);
  const [to, setTo] = useState<StarStep>(5);

  // ✅ Type your inventory state
  const [inv, setInv] = useState<Piles>({
    clear: { lesser: 0, greater: 0, grand: 0 },
    trait: { lesser: 0, greater: 0, grand: 0 },
  });

  const required = useMemo(
    () => sumSteps(rank, trait, from, to as StarStep),
    [rank, trait, from, to]
  );
  const { need } = useMemo(() => optimize(required, inv), [required, inv]);

  const Field = (p: {
    label: string;
    value: number;
    onChange: (n: number) => void;
  }) => (
    <label className="flex items-center gap-2 text-sm">
      <span className="opacity-80 w-20">{p.label}</span>
      <input
        type="number"
        min={0}
        value={p.value}
        onChange={(e) => p.onChange(Number(e.target.value))}
        className="w-24 rounded-md border px-2 py-1 bg-[hsl(var(--background))]"
      />
    </label>
  );

  return (
    <div className="rounded-2xl border p-4">
      <h3 className="text-lg font-semibold mb-2">Ascension Calculator</h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm opacity-80">Rank</label>
          <select
            className="w-full rounded-md border px-2 py-1 bg-[hsl(var(--background))]"
            value={rank}
            onChange={(e) => setRank(e.target.value as Rank)}
          >
            {ranks.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm opacity-80">Trait</label>
          <select
            className="w-full rounded-md border px-2 py-1 bg-[hsl(var(--background))]"
            value={trait}
            onChange={(e) => setTrait(e.target.value as Trait)}
          >
            {traits.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="text-sm opacity-80">From</label>
            <select
              className="w-full rounded-md border px-2 py-1 bg-[hsl(var(--background))]"
              value={from}
              onChange={(e) => setFrom(Number(e.target.value) as StarStep)}
            >
              {[1, 2, 3, 4].map((s) => (
                <option key={s} value={s}>
                  {s}★
                </option>
              ))}
            </select>
          </div>
          <div className="pb-3">→</div>
          <div className="flex-1">
            <label className="text-sm opacity-80">To</label>
            <select
              className="w-full rounded-md border px-2 py-1 bg-[hsl(var(--background))]"
              value={to}
              onChange={(e) => setTo(Number(e.target.value) as StarStep)}
            >
              {[2, 3, 4, 5].map((s) => (
                <option key={s} value={s}>
                  {s}★
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-5">
        <div>
          <h4 className="font-medium mb-2">Your Inventory</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg border">
              <div className="text-sm mb-1">Clear</div>
              <div className="flex flex-col gap-2">
                <Field
                  label="Lesser"
                  value={inv.clear.lesser}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, clear: { ...v.clear, lesser: n } }))
                  }
                />
                <Field
                  label="Greater"
                  value={inv.clear.greater}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, clear: { ...v.clear, greater: n } }))
                  }
                />
                <Field
                  label="Grand"
                  value={inv.clear.grand}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, clear: { ...v.clear, grand: n } }))
                  }
                />
              </div>
            </div>
            <div className="p-2 rounded-lg border">
              <div className="text-sm mb-1">{trait}</div>
              <div className="flex flex-col gap-2">
                <Field
                  label="Lesser"
                  value={inv.trait.lesser}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, trait: { ...v.trait, lesser: n } }))
                  }
                />
                <Field
                  label="Greater"
                  value={inv.trait.greater}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, trait: { ...v.trait, greater: n } }))
                  }
                />
                <Field
                  label="Grand"
                  value={inv.trait.grand}
                  onChange={(n) =>
                    setInv((v) => ({ ...v, trait: { ...v.trait, grand: n } }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Required after using + crafting</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 rounded-lg border">
              <div className="opacity-80 mb-1">Clear</div>
              <ul className="space-y-1">
                {tiers.map((t) => (
                  <li key={t}>
                    • {t}: <b>{need.clear[t]}</b>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 rounded-lg border">
              <div className="opacity-80 mb-1">{trait}</div>
              <ul className="space-y-1">
                {tiers.map((t) => (
                  <li key={t}>
                    • {t}: <b>{need.trait[t]}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs opacity-70 mt-2">
            Crafting uses 10→1 ratios (lesser→greater, greater→grand).
          </p>
        </div>
      </div>
    </div>
  );
}
