import type { Faction } from "@/src/types/cards";
import { FACTION_COLORS } from "./colors";

export type FactionMeta = {
  id: Faction;
  label: string;
  color: string;
  icon: string; // path under /public/icons/factions/*
};

export const FACTIONS: FactionMeta[] = [
  {
    id: "DESERT",
    label: "Desert",
    color: FACTION_COLORS.DESERT,
    icon: "/icons/factions/desert.png",
  },
  {
    id: "TEMPLE",
    label: "Temple",
    color: FACTION_COLORS.TEMPLE,
    icon: "/icons/factions/temple.png",
  },
  {
    id: "FOREST",
    label: "Forest",
    color: FACTION_COLORS.FOREST,
    icon: "/icons/factions/forest.png",
  },
  {
    id: "CITY",
    label: "City",
    color: FACTION_COLORS.CITY,
    icon: "/icons/factions/city.png",
  },
  {
    id: "ISLAND",
    label: "Island",
    color: FACTION_COLORS.ISLAND,
    icon: "/icons/factions/island.png",
  },
  {
    id: "CRYPT",
    label: "Crypt",
    color: FACTION_COLORS.CRYPT,
    icon: "/icons/factions/crypt.png",
  },
  {
    id: "ABYSS",
    label: "Abyss",
    color: FACTION_COLORS.ABYSS,
    icon: "/icons/factions/abyss.png",
  },
  {
    id: "MOUNTAIN",
    label: "Mountain",
    color: FACTION_COLORS.MOUNTAIN,
    icon: "/icons/factions/mountain.png",
  },
  {
    id: "SWAMP",
    label: "Swamp",
    color: FACTION_COLORS.SWAMP,
    icon: "/icons/factions/swamp.png",
  },
  {
    id: "WASTELAND",
    label: "Wasteland",
    color: FACTION_COLORS.WASTELAND,
    icon: "/icons/factions/wasteland.png",
  },
];
