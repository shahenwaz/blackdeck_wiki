export type TokenCategory =
  | "resource"
  | "unit-type"
  | "soulstone"
  | "token"
  | "misc";

export type TokenId =
  | "coins"
  | "gems"
  | "stamina"
  | "melee"
  | "ranged"
  | "soulstone_lesser_clear"
  | "soulstone_lesser_hero"
  | "soulstone_lesser_melee"
  | "soulstone_lesser_ranged"
  | "unit_token_regular"
  | "unit_token_elite"
  | "unit_token_premium"
  | "unit_token_hero";

export type TokenRecord = {
  id: TokenId;
  name: string;
  desc: string;
  src: string; // public/ path (served by Next)
  category: TokenCategory;
  alt?: string;
};

export const TOKENS: Record<TokenId, TokenRecord> = {
  coins: {
    id: "coins",
    name: "Coins",
    desc: "Used to upgrade your cards and equipment or buy then in the market.",
    src: "/images/tokens/coin_icon.png",
    category: "resource",
  },
  gems: {
    id: "gems",
    name: "Gems",
    desc: "Premium currency, The most valuable resource.",
    src: "/images/tokens/gem_icon.png",
    category: "resource",
  },
  stamina: {
    id: "stamina",
    name: "Stamina",
    desc: "Required for Campaign and Dungeon battles.",
    src: "/images/tokens/stamina_icon.png",
    category: "resource",
  },

  //   ---------- Unit types ----------
  melee: {
    id: "melee",
    name: "Melee",
    desc: "Melee units take damage equal to the target's strength when they attack.",
    src: "/images/tokens/melee.png",
    category: "unit-type",
  },
  ranged: {
    id: "ranged",
    name: "Ranged",
    desc: "Ranged units don't take damage when they attack.",
    src: "/images/tokens/ranged.png",
    category: "unit-type",
  },

  //   ---------- Soulstones for ascending units ----------
  soulstone_lesser_clear: {
    id: "soulstone_lesser_clear",
    name: "Lesser Clear Soulstone",
    desc: "Used to ascend your cards. Obtained in FORT OF SOULS.",
    src: "/images/tokens/soulstone_lesser_clear.png",
    category: "soulstone",
  },
  soulstone_lesser_hero: {
    id: "soulstone_lesser_hero",
    name: "Lesser Hero Soulstone",
    desc: "Used to ascend your Heroes. Obtained in HERO'S CASTLE.",
    src: "/images/tokens/soulstone_lesser_hero.png",
    category: "soulstone",
  },
  soulstone_lesser_melee: {
    id: "soulstone_lesser_melee",
    name: "Lesser Melee Soulstone",
    desc: "Used to ascend your Melee units. Obtained in MELEE CITADEL.",
    src: "/images/tokens/soulstone_lesser_melee.png",
    category: "soulstone",
  },
  soulstone_lesser_ranged: {
    id: "soulstone_lesser_ranged",
    name: "Lesser Ranged Soulstone",
    desc: "Used to ascend your Ranged units. Obtained in RANGED OUTPOST.",
    src: "/images/tokens/soulstone_lesser_ranged.png",
    category: "soulstone",
  },

  // ---------- Tokens for summoning units ----------
  unit_token_regular: {
    id: "unit_token_regular",
    name: "Regular Unit Token",
    desc: "Used to summon cards in a Regular Summon.",
    src: "/images/tokens/unit_token_regular.png",
    category: "token",
  },
  unit_token_elite: {
    id: "unit_token_elite",
    name: "Elite Unit Token",
    desc: "Used to summon cards in an Elite Summon.",
    src: "/images/tokens/unit_token_elite.png",
    category: "token",
  },
  unit_token_premium: {
    id: "unit_token_premium",
    name: "Premium Unit Token",
    desc: "Used to summon cards in a Premium Summon.",
    src: "/images/tokens/unit_token_premium.png",
    category: "token",
  },
  unit_token_hero: {
    id: "unit_token_hero",
    name: "Hero Token",
    desc: "Used to summon cards in a Hero Summon.",
    src: "/images/tokens/unit_token_hero.png",
    category: "token",
  },
};

export type { TokenId as ItemId }; // nice alias if you prefer ItemId
