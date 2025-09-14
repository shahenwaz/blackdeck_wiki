export type Rank = "Uncommon" | "Rare" | "Epic" | "Legendary";
export type Trait = "Melee" | "Ranged" | "Hero";
export type Tier = "lesser" | "greater" | "grand";
export type StarStep = 1 | 2 | 3 | 4 | 5 | 6; // 1★→2★ .. 4★→5★

export interface SoulCost {
  lesser: number;
  greater: number;
  grand: number;
}
export interface AscendCost {
  clear: SoulCost;
  trait: SoulCost;
}
export type AscensionTable = Record<Rank, Record<StarStep, AscendCost>>;

const Z = { lesser: 0, greater: 0, grand: 0 } as const;
const step = (): AscendCost => ({ clear: { ...Z }, trait: { ...Z } });

export const ASCENSION_COSTS: AscensionTable = {
  Uncommon: {
    1: step(),
    2: step(),
    3: step(),
    4: step(),
    5: step(),
    6: step(),
  },
  Rare: { 1: step(), 2: step(), 3: step(), 4: step(), 5: step(), 6: step() },
  Epic: { 1: step(), 2: step(), 3: step(), 4: step(), 5: step(), 6: step() },
  Legendary: {
    1: step(),
    2: step(),
    3: step(),
    4: step(),
    5: step(),
    6: step(),
  },
};

export const MIX_RATIOS = { lesserToGreater: 10, greaterToGrand: 10 };

export const DUNGEONS: Record<"Clear" | Trait, { name: string; slug: string }> =
  {
    Clear: { name: "FORT OF SOULS", slug: "fort-of-souls" },
    Melee: { name: "MELEE CITADEL", slug: "melee-citadel" },
    Ranged: { name: "RANGED OUTPOST", slug: "ranged-outpost" },
    Hero: { name: "HERO'S CASTLE", slug: "heroes-castle" },
  };
