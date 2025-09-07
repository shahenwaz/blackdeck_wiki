import type { Card } from "@/src/types/cards";

/**
 * Placeholder card dataset
 * - Covers all 10 factions
 * - Mix of Rarity (COMMON → LEGENDARY)
 * - Heroes only for RARE+ (per your rule of thumb)
 * - Portraits point to /public/images/cards/*.png (add images later)
 */
export const cards: Card[] = [
  // ===== CITY =====
  {
    id: "ageldur",
    name: "Ageldur, King of Kalam",
    hero: true,
    faction: "CITY",
    rarity: "LEGENDARY",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
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
      {
        name: "Royal Decree",
        description: "Bolsters allies' defense and sustain.",
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
    portraitUrl: "/images/cards/runa_saqra.jpg",
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
      {
        name: "Flame Surge",
        description: "Applies burn; scales with upgrades.",
      },
    ],
  },

  // ===== SWAMP =====
  {
    id: "runa-saqra",
    name: "Runa Saqra",
    hero: true,
    faction: "SWAMP",
    rarity: "EPIC",
    attackType: "RANGED",
    attackEffect: "POISON",
    portraitUrl: "/images/cards/runa_saqra.jpg",
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
        description: "Debuffs random enemies every few turns up to 5×.",
      },
    ],
  },
  {
    id: "swamp-stalker",
    name: "Swamp Stalker",
    hero: false,
    faction: "SWAMP",
    rarity: "UNCOMMON",
    attackType: "MELEE",
    attackEffect: "POISON",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 8, power: 180, levelCap: 1, stars: 3 },
      { level: "MAX LEVEL", strength: 88, power: 980, levelCap: 40, stars: 4 },
      {
        level: "UPGRADED",
        strength: 950,
        power: 32000,
        levelCap: 100,
        stars: 8,
        foil: false,
      },
    ],
    skills: [{ name: "Toxic Slash", description: "Small poison over time." }],
  },

  // ===== DESERT =====
  {
    id: "dune-warlord",
    name: "Dune Warlord",
    hero: true,
    faction: "DESERT",
    rarity: "RARE",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 14, power: 390, levelCap: 1, stars: 4 },
      {
        level: "MAX LEVEL",
        strength: 320,
        power: 8200,
        levelCap: 50,
        stars: 8,
      },
      {
        level: "UPGRADED",
        strength: 5200,
        power: 210000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Sand Rally",
        description: "Gives nearby allies bonus attack for 1 turn.",
      },
    ],
  },

  // ===== TEMPLE =====
  {
    id: "sun-priestess",
    name: "Sun Priestess",
    hero: true,
    faction: "TEMPLE",
    rarity: "EPIC",
    attackType: "RANGED",
    attackEffect: "FIRE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 16, power: 450, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 820,
        power: 25000,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 12000,
        power: 520000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      { name: "Solar Flare", description: "Burns and blinds enemies briefly." },
    ],
  },
  {
    id: "temple-acolyte",
    name: "Temple Acolyte",
    hero: false,
    faction: "TEMPLE",
    rarity: "COMMON",
    attackType: "RANGED",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 6, power: 120, levelCap: 1, stars: 2 },
      { level: "MAX LEVEL", strength: 60, power: 700, levelCap: 30, stars: 3 },
      {
        level: "UPGRADED",
        strength: 520,
        power: 18000,
        levelCap: 80,
        stars: 6,
        foil: false,
      },
    ],
    skills: [
      { name: "Focused Shot", description: "Simple ranged attack bonus." },
    ],
  },

  // ===== FOREST =====
  {
    id: "greenwarden",
    name: "Greenwarden",
    hero: true,
    faction: "FOREST",
    rarity: "LEGENDARY",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 28, power: 680, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 1400,
        power: 38000,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 22000,
        power: 980000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Rootsnare",
        description: "Roots front enemies, reducing damage taken.",
      },
    ],
  },
  {
    id: "forest-sentinel",
    name: "Forest Sentinel",
    hero: false,
    faction: "FOREST",
    rarity: "UNCOMMON",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 9, power: 170, levelCap: 1, stars: 3 },
      { level: "MAX LEVEL", strength: 95, power: 1000, levelCap: 40, stars: 4 },
      {
        level: "UPGRADED",
        strength: 1100,
        power: 34000,
        levelCap: 100,
        stars: 8,
        foil: false,
      },
    ],
    skills: [{ name: "Barkskin", description: "Small defense buff." }],
  },

  // ===== ISLAND =====
  {
    id: "tidecaller",
    name: "Tidecaller",
    hero: true,
    faction: "ISLAND",
    rarity: "RARE",
    attackType: "RANGED",
    attackEffect: "FROST",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 13, power: 360, levelCap: 1, stars: 4 },
      {
        level: "MAX LEVEL",
        strength: 300,
        power: 7800,
        levelCap: 50,
        stars: 8,
      },
      {
        level: "UPGRADED",
        strength: 4800,
        power: 200000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Ice Lance",
        description: "Applies slow; bonus vs burned enemies.",
      },
    ],
  },

  // ===== CRYPT =====
  {
    id: "grave-alchemist",
    name: "Grave Alchemist",
    hero: true,
    faction: "CRYPT",
    rarity: "EPIC",
    attackType: "RANGED",
    attackEffect: "POISON",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 15, power: 430, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 770,
        power: 24000,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 11500,
        power: 500000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Necro Tonic",
        description: "Poisons enemies; heals a random ally slightly.",
      },
    ],
  },

  // ===== ABYSS =====
  {
    id: "abyssal-imp",
    name: "Abyssal Imp",
    hero: false,
    faction: "ABYSS",
    rarity: "COMMON",
    attackType: "RANGED",
    attackEffect: "LIGHTNING",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 5, power: 110, levelCap: 1, stars: 2 },
      { level: "MAX LEVEL", strength: 54, power: 650, levelCap: 30, stars: 3 },
      {
        level: "UPGRADED",
        strength: 480,
        power: 17000,
        levelCap: 80,
        stars: 6,
        foil: false,
      },
    ],
    skills: [{ name: "Spark Bolt", description: "Tiny chain lightning." }],
  },
  {
    id: "void-scholar",
    name: "Void Scholar",
    hero: true,
    faction: "ABYSS",
    rarity: "RARE",
    attackType: "RANGED",
    attackEffect: "LIGHTNING",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "RANDOM",
    stats: [
      { level: "BASE", strength: 12, power: 350, levelCap: 1, stars: 4 },
      {
        level: "MAX LEVEL",
        strength: 280,
        power: 7600,
        levelCap: 50,
        stars: 8,
      },
      {
        level: "UPGRADED",
        strength: 4700,
        power: 198000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      { name: "Arc Discharge", description: "Bursts to 2 adjacent targets." },
    ],
  },

  // ===== MOUNTAIN =====
  {
    id: "stonebreaker",
    name: "Stonebreaker",
    hero: true,
    faction: "MOUNTAIN",
    rarity: "LEGENDARY",
    attackType: "MELEE",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 26, power: 640, levelCap: 1, stars: 5 },
      {
        level: "MAX LEVEL",
        strength: 1350,
        power: 36000,
        levelCap: 60,
        stars: 10,
      },
      {
        level: "UPGRADED",
        strength: 21000,
        power: 920000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [{ name: "Quake", description: "Stuns frontline briefly." }],
  },

  // ===== WASTELAND =====
  {
    id: "scrap-hunter",
    name: "Scrap Hunter",
    hero: false,
    faction: "WASTELAND",
    rarity: "UNCOMMON",
    attackType: "RANGED",
    attackEffect: "NONE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 8, power: 160, levelCap: 1, stars: 3 },
      { level: "MAX LEVEL", strength: 85, power: 960, levelCap: 40, stars: 4 },
      {
        level: "UPGRADED",
        strength: 980,
        power: 30000,
        levelCap: 100,
        stars: 8,
        foil: false,
      },
    ],
    skills: [
      { name: "Salvage Shot", description: "Bonus damage to stunned enemies." },
    ],
  },
  {
    id: "waste-chieftain",
    name: "Waste Chieftain",
    hero: true,
    faction: "WASTELAND",
    rarity: "RARE",
    attackType: "MELEE",
    attackEffect: "FIRE",
    portraitUrl: "/images/cards/runa_saqra.jpg",
    pattern: "DEFAULT",
    stats: [
      { level: "BASE", strength: 13, power: 370, levelCap: 1, stars: 4 },
      {
        level: "MAX LEVEL",
        strength: 295,
        power: 7900,
        levelCap: 50,
        stars: 8,
      },
      {
        level: "UPGRADED",
        strength: 4600,
        power: 195000,
        levelCap: 100,
        stars: 10,
        foil: true,
      },
    ],
    skills: [
      {
        name: "Scorching Rally",
        description: "Rally + burn synergy on adjacent units.",
      },
    ],
  },
];
