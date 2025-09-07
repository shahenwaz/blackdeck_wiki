"use client";

import React from "react";
import type { AttackType, Faction, Rarity } from "@/src/types/cards";
import { FACTION_COLORS, RARITY_COLORS, pretty } from "@/lib/colors";

type Props = {
  query: string;
  setQuery: (v: string) => void;
  faction: Faction | "ALL";
  setFaction: (f: Faction | "ALL") => void;
  rarities: Set<Rarity>;
  setRarities: (s: Set<Rarity>) => void;
  attackType: AttackType | "ALL";
  setAttackType: (t: AttackType | "ALL") => void;
  heroOnly: boolean;
  setHeroOnly: (b: boolean) => void;
};

export default function FiltersBar({
  query,
  setQuery,
  faction,
  setFaction,
  rarities,
  setRarities,
  attackType,
  setAttackType,
  heroOnly,
  setHeroOnly,
}: Props) {
  const rarityOptions: Rarity[] = [
    "COMMON",
    "UNCOMMON",
    "RARE",
    "EPIC",
    "LEGENDARY",
  ];
  const factions: (Faction | "ALL")[] = [
    "ALL",
    "DESERT",
    "TEMPLE",
    "FOREST",
    "CITY",
    "ISLAND",
    "CRYPT",
    "ABYSS",
    "MOUNTAIN",
    "SWAMP",
    "WASTELAND",
  ];

  return (
    <div className="mb-6 border-b border-white/10 bg-black/40 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        <div className="md:col-span-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/50"
            placeholder="Search cards by name..."
          />
        </div>

        <div className="md:col-span-4 flex flex-wrap gap-2">
          {rarityOptions.map((r) => {
            const active = rarities.has(r);
            return (
              <button
                key={r}
                onClick={() => {
                  const next = new Set(rarities);
                  if (active) next.delete(r);
                  else next.add(r);
                  setRarities(next);
                }}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  active
                    ? "bg-white/90 text-black"
                    : "bg-white/10 text-white/80 hover:bg-white/15"
                }`}
                style={{ border: `1px solid ${RARITY_COLORS[r]}66` }}
                title={pretty(r)}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full mr-2"
                  style={{ background: RARITY_COLORS[r] }}
                />
                {pretty(r)}
              </button>
            );
          })}
        </div>

        <div className="md:col-span-3 flex gap-2 overflow-x-auto">
          {factions.map((f) => (
            <button
              key={f}
              onClick={() => setFaction(f)}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition ${
                faction === f
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/80 hover:bg-white/15"
              }`}
              style={
                f !== "ALL"
                  ? { border: `1px solid ${FACTION_COLORS[f as Faction]}88` }
                  : undefined
              }
            >
              {f === "ALL" ? "All Factions" : pretty(f as string)}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 flex items-center justify-end gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-white/70">Type</span>
            <button
              onClick={() =>
                setAttackType(
                  attackType === "MELEE"
                    ? "RANGED"
                    : attackType === "RANGED"
                    ? "ALL"
                    : "MELEE"
                )
              }
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-xs hover:bg-white/15"
              title="Cycle: MELEE → RANGED → ALL"
            >
              {attackType === "ALL" ? "All" : pretty(attackType)}
            </button>
          </div>
          <label className="flex items-center gap-2 text-xs text-white/80">
            <input
              type="checkbox"
              checked={heroOnly}
              onChange={(e) => setHeroOnly(e.target.checked)}
            />{" "}
            Hero only
          </label>
        </div>
      </div>
    </div>
  );
}
