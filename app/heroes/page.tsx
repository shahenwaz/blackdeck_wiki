import type { Metadata } from "next";
import HeroesClient from "./_client";

export const metadata: Metadata = {
  title: "Heroes | BlackDeck WiKi",
};

export default function HeroesPage() {
  return <HeroesClient />;
}
