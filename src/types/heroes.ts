import type { Hero } from "@/src/types/wiki";

export const HEROES: Hero[] = [
  {
    id: "hero-dessert1",
    slug: "holzan-wildhorde",
    name: "HOLZAN WILDHORDE",
    rarity: "Legendary",
    faction: "DESERT",
    class: "WARRIOR",
    baseStats: { hp: 100, atk: 10, def: 8 },
    abilities: [
      {
        name: "Inspiring Aura",
        type: "Passive",
        text: "Grants allies bonus Strength (placeholder).",
      },
    ],
    tags: ["Beginner"],
    sources: ["(add sources here)"],
    kind: "Hero",
  },
];
