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

export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";
export type AttackType = "MELEE" | "RANGED";
export type AttackEffect = "FROST" | "LIGHTNING" | "POISON" | "FIRE" | "NONE";

export type StatTriplet = {
  level: "BASE" | "MAX LEVEL" | "UPGRADED";
  strength: number;
  power: number;
  levelCap?: number;
  stars?: number;
  foil?: boolean;
};

export type Skill = {
  name: string;
  description: string;
};

export type Card = {
  id: string;
  name: string;
  hero: boolean; // true => Hero, false => Unit
  faction: Faction;
  rarity: Rarity;
  attackType: AttackType;
  attackEffect?: AttackEffect;
  portraitUrl: string;
  pattern?: "DEFAULT" | "RANDOM";
  stats: StatTriplet[]; // BASE / MAX LEVEL / UPGRADED
  skills: Skill[];
};
