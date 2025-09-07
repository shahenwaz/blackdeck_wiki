"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { HEROES } from "@/src/types/heroes";
import type { Hero, Rarity } from "@/src/types/wiki";

/** Filter options should reflect your Rarity union */
const rarities: ("All" | Rarity)[] = [
  "All",
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
];

export default function HeroesClient() {
  const [rarity, setRarity] = useState<"All" | Rarity>("All");

  const list = useMemo<Hero[]>(() => {
    return HEROES.filter((h) =>
      rarity === "All" ? true : h.rarity === rarity
    );
  }, [rarity]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Heroes</h1>

      {/* Filter pill row */}
      <div className="mb-6 flex flex-wrap gap-2">
        {rarities.map((r) => (
          <button
            key={r}
            onClick={() => setRarity(r)}
            className="px-3 py-1 rounded border"
            aria-pressed={rarity === r}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((h) => (
          <Card key={h.id} className="bg-white/5 hover:bg-white/10 transition">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-medium">{h.name}</div>
                  <div className="mt-1 text-xs opacity-70">
                    {h.faction} • {h.class}
                  </div>
                </div>
                <Badge>{h.rarity}</Badge>
              </div>

              {h.tags?.length ? (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {h.tags.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
