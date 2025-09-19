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
  | "melee_frost"
  | "melee_lightning"
  | "melee_poison"
  | "melee_fire"
  | "melee_multi"
  | "ranged"
  | "ranged_frost"
  | "ranged_lightning"
  | "ranged_poison"
  | "ranged_fire"
  | "ranged_multi"
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
    desc: "Used to upgrade your cards and equipment or buy them in the market.",
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
  melee_frost: {
    id: "melee_frost",
    name: "Melee / Frost",
    desc: "Melee units take damage equal to the target's strength when they attack. Frost cards freeze any enemy they're used on or deal return damage to. Frozen cards can't attack and don't deal damage when defending. Frost cards are immune to other frost effects.",
    src: "/images/tokens/melee_frost.png",
    category: "unit-type",
  },
  melee_lightning: {
    id: "melee_lightning",
    name: "Melee / Lightning",
    desc: "Melee units take damage equal to the target's strength when they attack. Lightning cards shock any enemy they're used on or deal return damage to. Shocked cards lose their non-elemental abilities. Lightning cards are immune to other shock effects.",
    src: "/images/tokens/melee_lightning.png",
    category: "unit-type",
  },
  melee_poison: {
    id: "melee_poison",
    name: "Melee / Poison",
    desc: "Melee units take damage equal to the target's strength when they attack. Poisonous cards poison any enemy they're used on or deal return damage to. Poisoned cards take damage every turn. Poisonous cards are immune to other poison effects.",
    src: "/images/tokens/melee_poison.png",
    category: "unit-type",
  },
  melee_fire: {
    id: "melee_fire",
    name: "Melee / Fire",
    desc: "Melee units take damage equal to the target's strength when they attack. Fire cards ignite any enemy they're used on or deal return damage to. Burning cards have reduced strength. Fire cards are immune to other fire effects.",
    src: "/images/tokens/melee_fire.png",
    category: "unit-type",
  },
  melee_multi: {
    id: "melee_multi",
    name: "Melee / Multi",
    desc: "Melee units take damage equal to the target's strength when they attack. Random element cards apply either Fire, Frost, Lightning, or Poison to any enemy they're used on or deal return damage to.",
    src: "/images/tokens/melee_multi.png",
    category: "unit-type",
  },
  ranged: {
    id: "ranged",
    name: "Ranged",
    desc: "Ranged units don't take damage when they attack.",
    src: "/images/tokens/ranged.png",
    category: "unit-type",
  },
  ranged_frost: {
    id: "ranged_frost",
    name: "Ranged / Frost",
    desc: "Ranged units don't take damage when they attack. Frost cards freeze any enemy they're used on or deal return damage to. Frozen cards can't attack and don't deal damage when defending. Frost cards are immune to other frost effects.",
    src: "/images/tokens/ranged_frost.png",
    category: "unit-type",
  },
  ranged_lightning: {
    id: "ranged_lightning",
    name: "Ranged / Lightning",
    desc: "Ranged units don't take damage when they attack. Lightning cards shock any enemy they're used on or deal return damage to. Shocked cards lose their non-elemental abilities. Lightning cards are immune to other shock effects.",
    src: "/images/tokens/ranged_lightning.png",
    category: "unit-type",
  },
  ranged_poison: {
    id: "ranged_poison",
    name: "Ranged / Poison",
    desc: "Ranged units don't take damage when they attack. Poisonous cards poison any enemy they're used on or deal return damage to. Poisoned cards take damage every turn. Poisonous cards are immune to other poison effects.",
    src: "/images/tokens/ranged_poison.png",
    category: "unit-type",
  },
  ranged_fire: {
    id: "ranged_fire",
    name: "Ranged / Fire",
    desc: "Ranged units don't take damage when they attack. Fire cards ignite any enemy they're used on or deal return damage to. Burning cards have reduced strength. Fire cards are immune to other fire effects.",
    src: "/images/tokens/ranged_fire.png",
    category: "unit-type",
  },
  ranged_multi: {
    id: "ranged_multi",
    name: "Ranged / Multi",
    desc: "Ranged units don't take damage when they attack. Random element cards apply either Fire, Frost, Lightning, or Poison to any enemy they're used on or deal return damage to.",
    src: "/images/tokens/ranged_multi.png",
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
