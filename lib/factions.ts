import type { Faction } from "@/src/types/cards";
import { FACTION_COLORS } from "./colors";

export type FactionMeta = {
  id: Faction;
  label: string;
  color: string;
  icon: string; // PNG under /public/icons/factions
};

export const FACTIONS: FactionMeta[] = [
  {
    id: "DESERT",
    label: "DESERT",
    color: FACTION_COLORS.DESERT,
    icon: "/icons/factions/desert.png",
  },
  {
    id: "TEMPLE",
    label: "TEMPLE",
    color: FACTION_COLORS.TEMPLE,
    icon: "/icons/factions/temple.png",
  },
  {
    id: "FOREST",
    label: "FOREST",
    color: FACTION_COLORS.FOREST,
    icon: "/icons/factions/forest.png",
  },
  {
    id: "CITY",
    label: "CITY",
    color: FACTION_COLORS.CITY,
    icon: "/icons/factions/city.png",
  },
  {
    id: "ISLAND",
    label: "ISLAND",
    color: FACTION_COLORS.ISLAND,
    icon: "/icons/factions/island.png",
  },
  {
    id: "CRYPT",
    label: "CRYPT",
    color: FACTION_COLORS.CRYPT,
    icon: "/icons/factions/crypt.png",
  },
  {
    id: "ABYSS",
    label: "ABYSS",
    color: FACTION_COLORS.ABYSS,
    icon: "/icons/factions/abyss.png",
  },
  {
    id: "MOUNTAIN",
    label: "MOUNTAIN",
    color: FACTION_COLORS.MOUNTAIN,
    icon: "/icons/factions/mountain.png",
  },
  {
    id: "SWAMP",
    label: "SWAMP",
    color: FACTION_COLORS.SWAMP,
    icon: "/icons/factions/swamp.png",
  },
  {
    id: "WASTELAND",
    label: "WASTELAND",
    color: FACTION_COLORS.WASTELAND,
    icon: "/icons/factions/wasteland.png",
  },
];
