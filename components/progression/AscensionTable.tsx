"use client";
import type {
  AscensionTable,
  Rank,
  StarStep,
  Trait,
  Tier,
} from "@/src/data/ascension";
import { ASCENSION_COSTS, DUNGEONS } from "@/src/data/ascension";

const tiers: Tier[] = ["lesser", "greater", "grand"];

export default function AscensionTable({
  rank,
  trait,
}: {
  rank: Rank;
  trait: Trait;
}) {
  const data = ASCENSION_COSTS[rank];
  const total = {
    clear: { lesser: 0, greater: 0, grand: 0 },
    trait: { lesser: 0, greater: 0, grand: 0 },
  };

  (Object.keys(data) as unknown as StarStep[]).forEach((s) => {
    tiers.forEach((t) => {
      total.clear[t] += data[s].clear[t];
      total.trait[t] += data[s].trait[t];
    });
  });

  return (
    <div className="rounded-2xl border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{rank} — Ascension Costs</h3>
        <div className="text-xs opacity-80">
          Farm: {DUNGEONS.Clear.name} + {DUNGEONS[trait].name}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Step</th>
              <th className="py-2 text-left">Clear (L/G/Gr)</th>
              <th className="py-2 text-left">{trait} (L/G/Gr)</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((s) => {
              const step = s as StarStep;
              return (
                <tr key={s} className="border-b">
                  <td className="py-2">
                    {s}★ → {s + 1}★
                  </td>
                  <td className="py-2">
                    {tiers.map((t) => data[step].clear[t]).join(" / ")}
                  </td>
                  <td className="py-2">
                    {tiers.map((t) => data[step].trait[t]).join(" / ")}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="py-2 font-medium">Total (1★ → 6★)</td>
              <td className="py-2">
                {tiers.map((t) => total.clear[t]).join(" / ")}
              </td>
              <td className="py-2">
                {tiers.map((t) => total.trait[t]).join(" / ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs opacity-70">
        Fill numbers in <code>src/data/ascension.ts</code>.
      </p>
    </div>
  );
}
