import CardsClient from "../_client";
import { cards } from "@/src/data/cards";
import { FACTIONS } from "@/lib/factions";

type Params = { faction: string };

export function generateStaticParams() {
  return FACTIONS.map((f) => ({ faction: f.id.toLowerCase() }));
}

export const dynamicParams = false;

export const metadata = {
  title: "Faction | Cards | BlackDeck Wiki",
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { faction } = await params; // ✅ await params
  const id = faction.toUpperCase();

  const filtered = cards.filter((c) => c.faction === id);
  return <CardsClient data={filtered} />;
}
