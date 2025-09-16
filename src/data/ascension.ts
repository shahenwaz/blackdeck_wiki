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

// Dungeon registry (you kept uppercase names; preserving)
export const DUNGEONS: Record<"Clear" | Trait, { name: string; slug: string }> =
  {
    Clear: { name: "FORT OF SOULS", slug: "fort-of-souls" },
    Melee: { name: "MELEE CITADEL", slug: "melee-citadel" },
    Ranged: { name: "RANGED OUTPOST", slug: "ranged-outpost" },
    Hero: { name: "HERO'S CASTLE", slug: "heroes-castle" },
  };

/** Icon registry
 *  Drop your PNGs into /public/images/souls/ or adjust paths below.
 */
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
  // Ascended star image used for the “step” column visuals
  star: "/images/icons/ascended_star.png",
};
