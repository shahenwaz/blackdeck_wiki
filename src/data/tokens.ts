// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

export type TokenCategory =
  | "resource"
  | "faction"
  | "unit-type"
  | "attack-pattern"
  | "class"
  | "soulstone"
  | "token"
  | "guild"
  | "game-mode"
  | "misc";

export type TokenId =
  // ========= resource =========
  | "class_points"
  | "coins"
  | "epic_skill_tome"
  | "essence"
  | "food"
  | "food_5star"
  | "gems"
  | "legendary_skill_tome"
  | "rare_skill_tome"
  | "skip_ticket"
  | "stamina"
  | "stardust"
  | "xp_potion"

  // ========= faction =========
  | "abyss"
  | "city"
  | "crypt"
  | "desert"
  | "forest"
  | "island"
  | "mountain"
  | "swamp"
  | "temple"
  | "wasteland"

  // ========= unit-type =========
  | "melee"
  | "melee_fire"
  | "melee_frost"
  | "melee_lightning"
  | "melee_multi"
  | "melee_poison"
  | "ranged"
  | "ranged_fire"
  | "ranged_frost"
  | "ranged_lightning"
  | "ranged_multi"
  | "ranged_poison"

  // ========= attack-pattern =========
  | "column"
  | "cross"
  | "default"
  | "random_2"
  | "random_3"
  | "random_4"
  | "row"

  // ========= class =========
  | "mage"
  | "rogue"
  | "support"
  | "tank"
  | "warrior"

  // ========= soulstone =========
  | "soulstone_grand_clear"
  | "soulstone_grand_hero"
  | "soulstone_grand_melee"
  | "soulstone_grand_ranged"
  | "soulstone_greater_clear"
  | "soulstone_greater_hero"
  | "soulstone_greater_melee"
  | "soulstone_greater_ranged"
  | "soulstone_lesser_clear"
  | "soulstone_lesser_hero"
  | "soulstone_lesser_melee"
  | "soulstone_lesser_ranged"

  // ========= token =========
  | "token_divine"
  | "token_elite"
  | "token_hero"
  | "token_premium"
  | "token_regular"

  // ========= guild =========
  | "altar_of_abjuration"
  | "altar_of_aggression"
  | "altar_xp"
  | "bhaal_the_timeless"
  | "god_xp"
  | "guild_boss_key"
  | "guild_coin"
  | "vlada_queenofblood"

  // ========= game-mode =========
  | "arena"
  | "dungeon"

  // ========= misc =========
  | "arena_rating"
  | "ascension_star"
  | "bronze_medal"
  | "evolution_star"
  | "experience"
  | "foil"
  | "gold_medal"
  | "hero"
  | "power"
  | "silver_medal"
  | "strength"
  | "unit";

export type TokenRecord = {
  id: TokenId;
  name: string;
  desc: string;
  src: string; // public/ path (served by Next)
  category: TokenCategory;
  alt?: string;
};

// -----------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------

export const TOKENS: Record<TokenId, TokenRecord> = {
  // ---------- resource ----------
  class_points: {
    id: "class_points",
    name: "Class Points",
    desc: "Used to level up the strength bonus for each class at the Town Hall.",
    src: "/images/tokens/resource/class_point.webp",
    category: "resource",
  },
  coins: {
    id: "coins",
    name: "Coins",
    desc: "Used to upgrade your cards and equipment or buy them in the market.",
    src: "/images/tokens/resource/coin_icon.webp",
    category: "resource",
  },
  epic_skill_tome: {
    id: "epic_skill_tome",
    name: "Epic Skill Tome",
    desc: "Used to improve the skills of your cards. This tome can be used to improve cards with rarity up to Epic.",
    src: "/images/tokens/resource/epic_skill_tome.webp",
    category: "resource",
  },
  essence: {
    id: "essence",
    name: "Essence",
    desc: "Essence used for FOIL cards.",
    src: "/images/tokens/resource/essence.webp",
    category: "resource",
  },
  food: {
    id: "food",
    name: "Food",
    desc: "Used to evolve your cards.",
    src: "/images/tokens/resource/food.webp",
    category: "resource",
  },
  food_5star: {
    id: "food_5star",
    name: "Food ( 5⭐ )",
    desc: "Used to evolve your cards. You can sacrifice this instead of a 5-star card.",
    src: "/images/tokens/resource/food_5star.webp",
    category: "resource",
  },
  gems: {
    id: "gems",
    name: "Gems",
    desc: "Premium currency, The most valuable resource.",
    src: "/images/tokens/resource/gem_icon.webp",
    category: "resource",
  },
  legendary_skill_tome: {
    id: "legendary_skill_tome",
    name: "Legendary Skill Tome",
    desc: "Used to improve the skills of your cards. This tome can be used to improve any card.",
    src: "/images/tokens/resource/legendary_skill_tome.webp",
    category: "resource",
  },
  rare_skill_tome: {
    id: "rare_skill_tome",
    name: "Rare Skill Tome",
    desc: "Used to improve the skills of your cards. This tome can be used to improve cards with rarity up to Rare.",
    src: "/images/tokens/resource/rare_skill_tome.webp",
    category: "resource",
  },
  skip_ticket: {
    id: "skip_ticket",
    name: "Skip Ticket",
    desc: "Used to replay already completed battles. Refills up to 30 every day.",
    src: "/images/tokens/resource/skip_ticket.webp",
    category: "resource",
  },
  stamina: {
    id: "stamina",
    name: "Stamina",
    desc: "Required for Campaign and Dungeon battles.",
    src: "/images/tokens/resource/stamina.webp",
    category: "resource",
  },
  stardust: {
    id: "stardust",
    name: "Stardust",
    desc: "Used to advance the Traits of your cards.",
    src: "/images/tokens/resource/stardust.webp",
    category: "resource",
  },
  xp_potion: {
    id: "xp_potion",
    name: "XP Potion",
    desc: "Used to level up your cards.",
    src: "/images/tokens/resource/xp_potion.webp",
    category: "resource",
  },

  // ---------- faction ----------
  abyss: {
    id: "abyss",
    name: "Abyss",
    desc: "They didn't come from any of the worlds brought together by the collision. They slipped in from Outside.",
    src: "/images/tokens/faction/abyss.webp",
    category: "faction",
  },
  city: {
    id: "city",
    name: "City",
    desc: "The collision forced humans to hide away in Kalam and other walled cities.",
    src: "/images/tokens/faction/city.webp",
    category: "faction",
  },
  crypt: {
    id: "crypt",
    name: "Crypt",
    desc: "A city of the dead, who no longer rest in peace.",
    src: "/images/tokens/faction/crypt.webp",
    category: "faction",
  },
  desert: {
    id: "desert",
    name: "Desert",
    desc: "Once the center of an ancient empire, all that is left now are sand-covered ruins.",
    src: "/images/tokens/faction/desert.webp",
    category: "faction",
  },
  forest: {
    id: "forest",
    name: "Forest",
    desc: "The lush wilds where nature still reigns over civilization.",
    src: "/images/tokens/faction/forest.webp",
    category: "faction",
  },
  island: {
    id: "island",
    name: "Island",
    desc: "A mysterious island to the east. On the old maps, it's labeled 'Here Be Dragons'.",
    src: "/images/tokens/faction/island.webp",
    category: "faction",
  },
  mountain: {
    id: "mountain",
    name: "Mountain",
    desc: "Protected by the mountains and cold, these old kingdoms were barely touched by the Collision.",
    src: "/images/tokens/faction/mountain.webp",
    category: "faction",
  },
  swamp: {
    id: "swamp",
    name: "Swamp",
    desc: "These woods were touched strongly by the Collision, which brought with it decay and corruption.",
    src: "/images/tokens/faction/swamp.webp",
    category: "faction",
  },
  temple: {
    id: "temple",
    name: "Temple",
    desc: "The Temple of Kaa is the nexus of all magical energies in the world.",
    src: "/images/tokens/faction/temple.webp",
    category: "faction",
  },
  wasteland: {
    id: "wasteland",
    name: "Wasteland",
    desc: "In the scorched plains where the monsters roam, only the strongest survive.",
    src: "/images/tokens/faction/wasteland.webp",
    category: "faction",
  },

  // ---------- unit-type ----------
  melee: {
    id: "melee",
    name: "Melee",
    desc: "Melee units take damage equal to the target's strength when they attack.",
    src: "/images/tokens/unit-type/melee.webp",
    category: "unit-type",
  },
  melee_fire: {
    id: "melee_fire",
    name: "Melee / Fire",
    desc: "Melee units take damage equal to the target's strength when they attack. Fire cards ignite any enemy they're used on or deal return damage to. Burning cards have reduced strength. Fire cards are immune to other fire effects.",
    src: "/images/tokens/unit-type/melee_fire.webp",
    category: "unit-type",
  },
  melee_frost: {
    id: "melee_frost",
    name: "Melee / Frost",
    desc: "Melee units take damage equal to the target's strength when they attack. Frost cards freeze any enemy they're used on or deal return damage to. Frozen cards can't attack and don't deal damage when defending. Frost cards are immune to other frost effects.",
    src: "/images/tokens/unit-type/melee_frost.webp",
    category: "unit-type",
  },
  melee_lightning: {
    id: "melee_lightning",
    name: "Melee / Lightning",
    desc: "Melee units take damage equal to the target's strength when they attack. Lightning cards shock any enemy they're used on or deal return damage to. Shocked cards lose their non-elemental abilities. Lightning cards are immune to other shock effects.",
    src: "/images/tokens/unit-type/melee_lightning.webp",
    category: "unit-type",
  },
  melee_multi: {
    id: "melee_multi",
    name: "Melee / Multi",
    desc: "Melee units take damage equal to the target's strength when they attack. Random element cards apply either Fire, Frost, Lightning, or Poison to any enemy they're used on or deal return damage to.",
    src: "/images/tokens/unit-type/melee_multi.webp",
    category: "unit-type",
  },
  melee_poison: {
    id: "melee_poison",
    name: "Melee / Poison",
    desc: "Melee units take damage equal to the target's strength when they attack. Poisonous cards poison any enemy they're used on or deal return damage to. Poisoned cards take damage every turn. Poisonous cards are immune to other poison effects.",
    src: "/images/tokens/unit-type/melee_poison.webp",
    category: "unit-type",
  },
  ranged: {
    id: "ranged",
    name: "Ranged",
    desc: "Ranged units don't take damage when they attack.",
    src: "/images/tokens/unit-type/ranged.webp",
    category: "unit-type",
  },
  ranged_fire: {
    id: "ranged_fire",
    name: "Ranged / Fire",
    desc: "Ranged units don't take damage when they attack. Fire cards ignite any enemy they're used on or deal return damage to. Burning cards have reduced strength. Fire cards are immune to other fire effects.",
    src: "/images/tokens/unit-type/ranged_fire.webp",
    category: "unit-type",
  },
  ranged_frost: {
    id: "ranged_frost",
    name: "Ranged / Frost",
    desc: "Ranged units don't take damage when they attack. Frost cards freeze any enemy they're used on or deal return damage to. Frozen cards can't attack and don't deal damage when defending. Frost cards are immune to other frost effects.",
    src: "/images/tokens/unit-type/ranged_frost.webp",
    category: "unit-type",
  },
  ranged_lightning: {
    id: "ranged_lightning",
    name: "Ranged / Lightning",
    desc: "Ranged units don't take damage when they attack. Lightning cards shock any enemy they're used on or deal return damage to. Shocked cards lose their non-elemental abilities. Lightning cards are immune to other shock effects.",
    src: "/images/tokens/unit-type/ranged_lightning.webp",
    category: "unit-type",
  },
  ranged_multi: {
    id: "ranged_multi",
    name: "Ranged / Multi",
    desc: "Ranged units don't take damage when they attack. Random element cards apply either Fire, Frost, Lightning, or Poison to any enemy they're used on or deal return damage to.",
    src: "/images/tokens/unit-type/ranged_multi.webp",
    category: "unit-type",
  },
  ranged_poison: {
    id: "ranged_poison",
    name: "Ranged / Poison",
    desc: "Ranged units don't take damage when they attack. Poisonous cards poison any enemy they're used on or deal return damage to. Poisoned cards take damage every turn. Poisonous cards are immune to other poison effects.",
    src: "/images/tokens/unit-type/ranged_poison.webp",
    category: "unit-type",
  },

  // ---------- attack-pattern ----------
  column: {
    id: "column",
    name: "Column Attack",
    desc: "Attacks the selected target and all enemies in the same column.",
    src: "/images/tokens/attack-pattern/column.webp",
    category: "attack-pattern",
  },
  cross: {
    id: "cross",
    name: "Cross Attack",
    desc: "Attacks the selected target and all enemies in the same row & column.",
    src: "/images/tokens/attack-pattern/cross.webp",
    category: "attack-pattern",
  },
  default: {
    id: "default",
    name: "Default Attack",
    desc: "Attacks the selected target.",
    src: "/images/tokens/attack-pattern/default.webp",
    category: "attack-pattern",
  },
  random_2: {
    id: "random_2",
    name: "Random (2)",
    desc: "Attacks the selected target and 1 other random enemy.",
    src: "/images/tokens/attack-pattern/random_2.webp",
    category: "attack-pattern",
  },
  random_3: {
    id: "random_3",
    name: "Random (3)",
    desc: "Attacks the selected target and 2 other random enemies.",
    src: "/images/tokens/attack-pattern/random_3.webp",
    category: "attack-pattern",
  },
  random_4: {
    id: "random_4",
    name: "Random (4)",
    desc: "Attacks the selected target and 3 other random enemies.",
    src: "/images/tokens/attack-pattern/random_4.webp",
    category: "attack-pattern",
  },
  row: {
    id: "row",
    name: "Row Attack",
    desc: "Attacks the selected target and all enemies in the same row.",
    src: "/images/tokens/attack-pattern/row.webp",
    category: "attack-pattern",
  },

  // ---------- class ----------
  mage: {
    id: "mage",
    name: "Mage",
    desc: "Mages deal massive damage and apply debuffs and status effects.",
    src: "/images/tokens/class/mage.webp",
    category: "class",
  },
  rogue: {
    id: "rogue",
    name: "Rogue",
    desc: "Rogues benefit from striking at the right time and at the right target.",
    src: "/images/tokens/class/rogue.webp",
    category: "class",
  },
  support: {
    id: "support",
    name: "Support",
    desc: "Supports provide buffs and healing to other cards.",
    src: "/images/tokens/class/support.webp",
    category: "class",
  },
  tank: {
    id: "tank",
    name: "Tank",
    desc: "Tanks have significant Strength and defensive abilities.",
    src: "/images/tokens/class/tank.webp",
    category: "class",
  },
  warrior: {
    id: "warrior",
    name: "Warrior",
    desc: "Warriors excel at trading blows with enemy units.",
    src: "/images/tokens/class/warrior.webp",
    category: "class",
  },

  // ---------- soulstone ----------
  soulstone_grand_clear: {
    id: "soulstone_grand_clear",
    name: "Grand Clear Soulstone",
    desc: "Used to ascend your cards. Obtained in FORT OF SOULS.",
    src: "/images/tokens/soulstone/soulstone_grand_clear.webp",
    category: "soulstone",
  },
  soulstone_grand_hero: {
    id: "soulstone_grand_hero",
    name: "Grand Hero Soulstone",
    desc: "Used to ascend your Heroes. Obtained in HERO'S CASTLE.",
    src: "/images/tokens/soulstone/soulstone_grand_hero.webp",
    category: "soulstone",
  },
  soulstone_grand_melee: {
    id: "soulstone_grand_melee",
    name: "Grand Melee Soulstone",
    desc: "Used to ascend your Melee units. Obtained in MELEE CITADEL.",
    src: "/images/tokens/soulstone/soulstone_grand_melee.webp",
    category: "soulstone",
  },
  soulstone_grand_ranged: {
    id: "soulstone_grand_ranged",
    name: "Grand Ranged Soulstone",
    desc: "Used to ascend your Ranged units. Obtained in RANGED OUTPOST.",
    src: "/images/tokens/soulstone/soulstone_grand_ranged.webp",
    category: "soulstone",
  },
  soulstone_greater_clear: {
    id: "soulstone_greater_clear",
    name: "Greater Clear Soulstone",
    desc: "Used to ascend your cards. Obtained in FORT OF SOULS.",
    src: "/images/tokens/soulstone/soulstone_greater_clear.webp",
    category: "soulstone",
  },
  soulstone_greater_hero: {
    id: "soulstone_greater_hero",
    name: "Greater Hero Soulstone",
    desc: "Used to ascend your Heroes. Obtained in HERO'S CASTLE.",
    src: "/images/tokens/soulstone/soulstone_greater_hero.webp",
    category: "soulstone",
  },
  soulstone_greater_melee: {
    id: "soulstone_greater_melee",
    name: "Greater Melee Soulstone",
    desc: "Used to ascend your Melee units. Obtained in MELEE CITADEL.",
    src: "/images/tokens/soulstone/soulstone_greater_melee.webp",
    category: "soulstone",
  },
  soulstone_greater_ranged: {
    id: "soulstone_greater_ranged",
    name: "Greater Ranged Soulstone",
    desc: "Used to ascend your Ranged units. Obtained in RANGED OUTPOST.",
    src: "/images/tokens/soulstone/soulstone_greater_ranged.webp",
    category: "soulstone",
  },
  soulstone_lesser_clear: {
    id: "soulstone_lesser_clear",
    name: "Lesser Clear Soulstone",
    desc: "Used to ascend your cards. Obtained in FORT OF SOULS.",
    src: "/images/tokens/soulstone/soulstone_lesser_clear.webp",
    category: "soulstone",
  },
  soulstone_lesser_hero: {
    id: "soulstone_lesser_hero",
    name: "Lesser Hero Soulstone",
    desc: "Used to ascend your Heroes. Obtained in HERO'S CASTLE.",
    src: "/images/tokens/soulstone/soulstone_lesser_hero.webp",
    category: "soulstone",
  },
  soulstone_lesser_melee: {
    id: "soulstone_lesser_melee",
    name: "Lesser Melee Soulstone",
    desc: "Used to ascend your Melee units. Obtained in MELEE CITADEL.",
    src: "/images/tokens/soulstone/soulstone_lesser_melee.webp",
    category: "soulstone",
  },
  soulstone_lesser_ranged: {
    id: "soulstone_lesser_ranged",
    name: "Lesser Ranged Soulstone",
    desc: "Used to ascend your Ranged units. Obtained in RANGED OUTPOST.",
    src: "/images/tokens/soulstone/soulstone_lesser_ranged.webp",
    category: "soulstone",
  },

  // ---------- token ----------
  token_divine: {
    id: "token_divine",
    name: "Divine Unit Token",
    desc: "Used to summon God and Altar card fragments in Divine Summon.",
    src: "/images/tokens/token/divine_token.webp",
    category: "token",
  },
  token_elite: {
    id: "token_elite",
    name: "Elite Unit Token",
    desc: "Used to summon cards in an Elite Summon.",
    src: "/images/tokens/token/elite_token.webp",
    category: "token",
  },
  token_hero: {
    id: "token_hero",
    name: "Hero Token",
    desc: "Used to summon cards in a Hero Summon.",
    src: "/images/tokens/token/hero_token.webp",
    category: "token",
  },
  token_premium: {
    id: "token_premium",
    name: "Premium Unit Token",
    desc: "Used to summon cards in a Premium Summon.",
    src: "/images/tokens/token/premium_token.webp",
    category: "token",
  },
  token_regular: {
    id: "token_regular",
    name: "Regular Unit Token",
    desc: "Used to summon cards in a Regular Summon.",
    src: "/images/tokens/token/regular_token.webp",
    category: "token",
  },

  // ---------- guild ----------
  altar_of_abjuration: {
    id: "altar_of_abjuration",
    name: "Altar of Abjuration",
    desc: "A secret relic kept for many generations by the witches of Blightmoor, this Altar is invoked to curse and weaken interlopers who approach their sacred places.",
    src: "/images/tokens/guild/altar_of_abjuration.webp",
    category: "guild",
  },
  altar_of_aggression: {
    id: "altar_of_aggression",
    name: "Altar of Aggression",
    desc: "Built from an ancient powerstone unearthed in the ruins of the Lost Empire, this Altar is invoked before a decisive battle to empower warriors to strike true when it matters most.",
    src: "/images/tokens/guild/altar_of_aggression.webp",
    category: "guild",
  },
  altar_xp: {
    id: "altar_xp",
    name: "Altar of XP",
    desc: "Used to upgrade the level of Altar cards.",
    src: "/images/tokens/guild/altar_xp.webp",
    category: "guild",
  },
  bhaal_the_timeless: {
    id: "bhaal_the_timeless",
    name: "BHAAL THE TIMELESS",
    desc: "OVERPOWER BHAAL'S GRASP OF TIME ITSELF OR SUFFER HIS CRUEL PUNISHMENTS.",
    src: "/images/tokens/guild/bhaal_the_timeless.webp",
    category: "guild",
  },
  god_xp: {
    id: "god_xp",
    name: "God of XP",
    desc: "Used to upgrade the level of God cards.",
    src: "/images/tokens/guild/god_xp.webp",
    category: "guild",
  },
  guild_boss_key: {
    id: "guild_boss_key",
    name: "Guild Boss Key",
    desc: "Used to attack the Guild Boss.",
    src: "/images/tokens/guild/guild_boss_key.webp",
    category: "guild",
  },
  guild_coin: {
    id: "guild_coin",
    name: "Guild Coin",
    desc: "Used to buy items in the Guild Shop.",
    src: "/images/tokens/guild/guild_coin.webp",
    category: "guild",
  },
  vlada_queenofblood: {
    id: "vlada_queenofblood",
    name: "VLADA, QUEEN OF BLOOD",
    desc: "DEFEAT THE ETERNAL QUEEN OF BLOOD BEFORE SHE EMPOWERS HER ARMIES WITH YOUR LIFEFORCE.",
    src: "/images/tokens/guild/vlada_queenofblood.webp",
    category: "guild",
  },

  // ---------- game-mode ----------
  arena: {
    id: "arena",
    name: "Arena",
    desc: "Step into the Arena - prove your skill, crush rivals, and rise through the leagues to claim glory and rewards!",
    src: "/images/tokens/game-mode/arena.webp",
    category: "game-mode",
  },
  dungeon: {
    id: "dungeon",
    name: "Dungeon",
    desc: "Dive into dangerous dungeons, battle fearsome bosses, and conquer challanges for epic loot and glory!",
    src: "/images/tokens/game-mode/dungeon.webp",
    category: "game-mode",
  },

  // ---------- misc ----------
  arena_rating: {
    id: "arena_rating",
    name: "Arena Rating",
    desc: "Arena Rating determines your position on the leaderboard and which opponents you are matched with.",
    src: "/images/tokens/misc/arena_rating.webp",
    category: "misc",
  },
  ascension_star: {
    id: "ascension_star",
    name: "Ascension Star",
    desc: "The ascension of a card further increases its strength after evolution. It cannot go above the card's evolution level.",
    src: "/images/tokens/misc/ascend_star.webp",
    category: "misc",
  },
  bronze_medal: {
    id: "bronze_medal",
    name: "Bronze Medal",
    desc: "Required for Town Hall upgrades.",
    src: "/images/tokens/misc/bronze_medal.webp",
    category: "misc",
  },
  evolution_star: {
    id: "evolution_star",
    name: "Evolution Star",
    desc: "The evolution of the card determines its potential. It can be increased up to 6⭐ when the card is at max level.",
    src: "/images/tokens/misc/evolution_star.webp",
    category: "misc",
  },
  experience: {
    id: "experience",
    name: "Experience",
    desc: "Used to increase your player Level / Rank.",
    src: "/images/tokens/misc/exp_icon.webp",
    category: "misc",
  },
  foil: {
    id: "foil",
    name: "Foil",
    desc: "This card is FOIL and has bonus Strength and a bonus ability.",
    src: "/images/tokens/misc/foil.webp",
    category: "misc",
  },
  gold_medal: {
    id: "gold_medal",
    name: "Gold Medal",
    desc: "Required for Town Hall upgrades.",
    src: "/images/tokens/misc/gold_medal.webp",
    category: "misc",
  },
  hero: {
    id: "hero",
    name: "Hero",
    desc: "The Hero is the leader of your deck. Heroes cannot be attacked or damaged while there are units on their side of the field,except when they attack. 'If your Hero dies, you lose the game!'",
    src: "/images/tokens/misc/hero.webp",
    category: "misc",
  },
  power: {
    id: "power",
    name: "Power",
    desc: "Represents a card's effective combat rating, showing how powerful it is compared to other cards.",
    src: "/images/tokens/misc/power.webp",
    category: "misc",
  },
  silver_medal: {
    id: "silver_medal",
    name: "Silver Medal",
    desc: "Required for Town Hall upgrades.",
    src: "/images/tokens/misc/silver_medal.webp",
    category: "misc",
  },
  strength: {
    id: "strength",
    name: "Strength",
    desc: "Represents a card's attack power and health.",
    src: "/images/tokens/misc/strength.webp",
    category: "misc",
  },
  unit: {
    id: "unit",
    name: "Unit",
    desc: "Units form the majority of every deck. Use them to attack enemy cards!",
    src: "/images/tokens/misc/unit.webp",
    category: "misc",
  },
};

export type { TokenId as ItemId }; // nice alias if you prefer ItemId
