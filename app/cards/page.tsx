import CardsClient from "./_client";
import { cards } from "@/src/data/cards";

export const metadata = {
  title: "Cards | BlackDeck Wiki",
  description:
    "Browse Black Deck heroes and units across factions and rarities.",
};

export default function CardsPage() {
  return <CardsClient data={cards} />;
}
