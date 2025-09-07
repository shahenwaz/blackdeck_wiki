import type { Card } from "@/src/types/cards";

export const cards: Card[] = [
  {
    id: "runa-saqra",
    name: "Runa Saqra",
    hero: true,
    faction: "SWAMP",
    rarity: "EPIC",
    attackType: "RANGED",
    attackEffect: "POISON",
    portraitUrl: "/runa_saqra/runa_saqra.jpg", // replace when you have assets
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 12, power: 420, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 1474,
        power: 32775,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 9000,
        power: 450000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Cursed Fog",
        description: "Debuffs random enemies every 2–3 turns up to 5×.",
      },
    ],
  },
  {
    id: "pyromancer",
    name: "Pyromancer",
    hero: false,
    faction: "CITY",
    rarity: "LEGENDARY",
    attackType: "RANGED",
    attackEffect: "FIRE",
    portraitUrl: "/images/cards/pyromancer.png",
    pattern: "RANDOM",
    stats: [
      { level: "BASE", strength: 18, power: 498, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 197,
        power: 5450,
        levelCap: 50,
        stars: 6,
      },
      {
        level: "UPGRADED",
        strength: 10665,
        power: 686000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      { name: "Flame Surge", description: "Burn effect scales with upgrades." },
    ],
  },
  {
    id: "ageldur",
    name: "Ageldur, King of Kalam",
    hero: true,
    faction: "CITY",
    rarity: "LEGENDARY",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/ageldur.png",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 30, power: 720, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 1500,
        power: 40000,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 23726,
        power: 1168000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      { name: "Royal Decree", description: "Boost frontline and sustain." },
    ],
  },
];
