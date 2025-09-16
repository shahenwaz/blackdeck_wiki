export type Rank = "Uncommon" | "Rare" | "Epic" | "Legendary";
export type Trait = "Melee" | "Ranged" | "Hero";
export type Tier = "lesser" | "greater" | "grand";
export type StarStep = 1 | 2 | 3 | 4 | 5 | 6; // 1★→2★ .. 5★→6★

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

// ---------- helpers ----------
const Z = { lesser: 0, greater: 0, grand: 0 } as const; // keep this
const step = (): AscendCost => ({ clear: { ...Z }, trait: { ...Z } }); // keep this

// compact setter: S(CLEAR_lesser, CLEAR_greater, CLEAR_grand)
const S = (l: number, g: number, G: number): SoulCost => ({
  lesser: l,
  greater: g,
  grand: G,
});

// ---------- data (replace step() with values you know) ----------
export const ASCENSION_COSTS: AscensionTable = {
  Uncommon: {
    1: step(),
    2: step(),
    3: step(),
    4: step(),
    5: step(),
    6: step(),
    /**
     * Example (when you know the numbers from the sheet):
     * 2: { clear: S(0, 0, 0), trait: S(0, 0, 0) },
     */
  },
  Rare: {
    1: { clear: S(2, 0, 0), trait: S(4, 0, 0) },
    2: { clear: S(0, 2, 0), trait: S(0, 5, 0) },
    3: { clear: S(0, 0, 1), trait: S(0, 0, 1) },
    4: { clear: S(0, 0, 1), trait: S(0, 0, 2) },
    5: step(),
    6: step(),
  },
  Epic: {
    1: { clear: S(0, 3, 0), trait: S(0, 4, 0) },
    2: { clear: S(0, 5, 0), trait: S(0, 0, 1) },
    3: { clear: S(0, 0, 1), trait: S(0, 0, 2) },
    4: { clear: S(0, 0, 1), trait: S(0, 0, 3) },
    5: { clear: S(0, 0, 2), trait: S(0, 0, 4) },
    6: step(),
  },
  Legendary: {
    1: { clear: S(0, 5, 0), trait: S(0, 7, 0) },
    2: { clear: S(0, 0, 2), trait: S(0, 0, 2) },
    3: { clear: S(0, 0, 3), trait: S(0, 0, 3) },
    4: { clear: S(0, 0, 3), trait: S(0, 0, 4) },
    5: { clear: S(0, 0, 4), trait: S(0, 0, 5) },
    6: { clear: S(0, 0, 4), trait: S(0, 0, 6) },
  },
};

// ---------- dungeons ----------
export const DUNGEONS: Record<"Clear" | Trait, { name: string; slug: string }> =
  {
    Clear: { name: "FORT OF SOULS", slug: "fort-of-souls" },
    Melee: { name: "MELEE CITADEL", slug: "melee-citadel" },
    Ranged: { name: "RANGED OUTPOST", slug: "ranged-outpost" },
    Hero: { name: "HERO'S CASTLE", slug: "heroes-castle" },
  };

// ---------- icon registry ----------
export type IconSet = Record<Tier, string>;
export const ICONS: {
  clear: IconSet;
  melee: IconSet;
  ranged: IconSet;
  hero: IconSet;
  star: string;
} = {
  clear: {
    lesser: "/images/souls/soulstone_lesser_clear.png",
    greater: "/images/souls/soulstone_lesser_clear.png",
    grand: "/images/souls/soulstone_lesser_clear.png",
  },
  melee: {
    lesser: "/images/souls/soulstone_lesser_melee.png",
    greater: "/images/souls/soulstone_lesser_melee.png",
    grand: "/images/souls/soulstone_lesser_melee.png",
  },
  ranged: {
    lesser: "/images/souls/soulstone_lesser_ranged.png",
    greater: "/images/souls/soulstone_lesser_ranged.png",
    grand: "/images/souls/soulstone_lesser_ranged.png",
  },
  hero: {
    lesser: "/images/souls/soulstone_lesser_hero.png",
    greater: "/images/souls/soulstone_lesser_hero.png",
    grand: "/images/souls/soulstone_lesser_hero.png",
  },
  // Ascended star used for the “step” visuals in the table
  star: "/images/icons/ascended_star.png",
};
