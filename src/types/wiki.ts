export type Faction =
  | "DESERT"
  | "TEMPLE"
  | "FOREST"
  | "CITY"
  | "ISLAND"
  | "CRYPT"
  | "ABYSS"
  | "MOUNTAIN"
  | "SWAMP"
  | "WASTELAND";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface AscensionCost {
  fromStar: number;
  toStar: number;
  soulstones: number;
  gold?: number;
  extraMats?: { id: string; qty: number }[];
}

export interface Ability {
  name: string;
  type: "Active" | "Passive";
  cooldown?: number;
  text: string;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spd?: number;
  crit?: number;
}

export interface BaseCard {
  id: string;
  slug: string;
  name: string;
  rarity: Rarity;
  faction: Faction;
  class: "TANK" | "WARRIOR" | "SUPPORT" | "MAGE" | "ROGUE";
  image?: string;
  tags?: string[];
  release?: string;
  sources?: string[]; // provenance URLs
}

export interface Hero extends BaseCard {
  kind: "Hero";
  baseStats: Stats;
  abilities: Ability[];
  ascensionPath?: AscensionCost[];
  synergies?: string[]; // hero/unit slugs
  counters?: string[];
}

export interface Unit extends BaseCard {
  kind: "Unit";
  baseStats: Stats;
  abilities: Ability[];
  usedWith?: string[];
}

export interface Artifact {
  id: string;
  slug: string;
  name: string;
  rarity: Exclude<Rarity, "Common"> | "Mythic";
  effect: string;
  bestOn?: string[];
  sources?: string[];
}
