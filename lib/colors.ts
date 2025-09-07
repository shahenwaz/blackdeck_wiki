import type { Faction, Rarity } from "@/src/types/cards";

export const FACTION_COLORS: Record<Faction, string> = {
  DESERT: "#c7a34c",
  TEMPLE: "#f08a36",
  FOREST: "#3fb36f",
  CITY: "#e44a4a",
  ISLAND: "#3aa3e0",
  CRYPT: "#8a8a8a",
  ABYSS: "#9a63e3",
  MOUNTAIN: "#60cad3",
  SWAMP: "#7cb342",
  WASTELAND: "#a4a4a4",
};

export const RARITY_COLORS: Record<Rarity, string> = {
  COMMON: "#9aa0a6",
  UNCOMMON: "#7cb342",
  RARE: "#2b6cb0",
  EPIC: "#b83280",
  LEGENDARY: "#f6ad55",
};

export const pretty = (s: string) =>
  s
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
