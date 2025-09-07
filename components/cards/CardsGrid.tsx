"use client";

import React, { useMemo, useState } from "react";
import type { AttackType, Card, Faction, Rarity } from "@/src/types/cards";
import FiltersBar from "./FiltersBar";
import CardTile from "./CardTile";
import CardModal from "./CardModal";
import { pretty } from "@/lib/colors";

// Strongly-typed sort keys
const SORT_KEYS = ["POWER", "STRENGTH", "NAME"] as const;
type SortKey = (typeof SORT_KEYS)[number];

export default function CardsGrid({ data }: { data: Card[] }) {
  const [query, setQuery] = useState("");
  const [faction, setFaction] = useState<Faction | "ALL">("ALL");
  const [rarities, setRarities] = useState<Set<Rarity>>(
    new Set(["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"])
  );
  const [attackType, setAttackType] = useState<AttackType | "ALL">("ALL");
  const [heroOnly, setHeroOnly] = useState(false);
  const [open, setOpen] = useState<Card | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>("POWER");

  const filtered = useMemo(() => {
    return data
      .filter((c) => (faction === "ALL" ? true : c.faction === faction))
      .filter((c) => rarities.has(c.rarity))
      .filter((c) =>
        attackType === "ALL" ? true : c.attackType === attackType
      )
      .filter((c) => (heroOnly ? c.hero : true))
      .filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()));
  }, [data, faction, rarities, attackType, heroOnly, query]);

  const sorted = useMemo(() => {
    const list = [...filtered];

    if (sortBy === "NAME") {
      list.sort((a, b) => a.name.localeCompare(b.name));
      return list;
    }

    // Narrow to the exact stat key safely (no casts)
    const statKey: "power" | "strength" =
      sortBy === "POWER" ? "power" : "strength";

    list.sort((a, b) => {
      const A = a.stats.find((s) => s.level === "UPGRADED")?.[statKey] ?? 0;
      const B = b.stats.find((s) => s.level === "UPGRADED")?.[statKey] ?? 0;
      return B - A;
    });

    return list;
  }, [filtered, sortBy]);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Cards</h1>
            <p className="text-sm text-white/70">
              Browse all Heroes & Units by faction, rarity, and combat style.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/60">Sort by</span>
            {SORT_KEYS.map((k) => (
              <button
                key={k}
                onClick={() => setSortBy(k)}
                className={`rounded-md border border-white/10 px-2 py-1 ${
                  sortBy === k
                    ? "bg-white text-black"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                {pretty(k)}
              </button>
            ))}
          </div>
        </header>

        <FiltersBar
          query={query}
          setQuery={setQuery}
          faction={faction}
          setFaction={setFaction}
          rarities={rarities}
          setRarities={setRarities}
          attackType={attackType}
          setAttackType={setAttackType}
          heroOnly={heroOnly}
          setHeroOnly={setHeroOnly}
        />

        {sorted.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-white/70">
            No cards match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((card) => (
              <CardTile key={card.id} card={card} onOpen={setOpen} />
            ))}
          </div>
        )}

        <CardModal card={open} onClose={() => setOpen(null)} />
      </div>
    </>
  );
}
