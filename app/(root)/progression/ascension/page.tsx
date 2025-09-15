import AscensionTable from "@/components/progression/AscensionTable";
import AscensionCalculator from "@/components/progression/AscensionCalculator";
import DungeonGuide from "@/components/progression/DungeonGuide";

export const metadata = {
  title: "Ascension — BlackDeck WiKi",
  description:
    "Learn exact soulstone costs by rank + calculator and where to farm.",
  openGraph: { title: "Ascension — BlackDeck WiKi", type: "article" },
};

export default function Page() {
  return (
    <main className="container py-8 space-y-6 animate-fadeIn">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">Ascension</h1>
        <p className="text-sm opacity-80 max-w-2xl">
          Ascend cards to unlock stats/skills. Each rank uses the SAME costs per
          star for all cards of that rank. You always need Clear stones + a
          second set based on the card’s trait (Melee/Ranged/Hero).
        </p>
      </header>

      <section className="grid xl:grid-cols-2 gap-4">
        <AscensionTable rank="Uncommon" trait="Melee" />
        <AscensionTable rank="Rare" trait="Ranged" />
      </section>
      <section className="grid xl:grid-cols-2 gap-4">
        <AscensionTable rank="Epic" trait="Hero" />
        <AscensionTable rank="Legendary" trait="Ranged" />
      </section>
      <div className="rounded-2xl border p-4">
        <AscensionCalculator />
      </div>
      <DungeonGuide />
    </main>
  );
}
