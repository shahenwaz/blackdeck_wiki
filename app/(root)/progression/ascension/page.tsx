import Tabs from "@/components/common/Tabs";
import AscensionTable from "@/components/progression/AscensionTable";
import DungeonGuide from "@/components/progression/DungeonGuide";
import Image from "next/image";

const TabIcon = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <Image
    src={src}
    alt={alt}
    width={16}
    height={16}
    aria-hidden={alt === ""}
    className="h-4 w-4 object-contain"
  />
);

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

      <Tabs
        items={[
          {
            id: "hero",
            label: "HERO ASCENSION",
            icon: <TabIcon src="/images/icons/hero.png" />,
            content: (
              <div className="rounded-2xl border p-4">
                <p className="opacity-80 text-sm">
                  Place Hero rank tables here: Rare → Epic → Legendary.
                </p>
              </div>
            ),
          },
          {
            id: "melee",
            label: "MELEE UNITS ASCENSION",
            icon: <TabIcon src="/images/icons/unit.png" />,
            content: (
              <div className="rounded-2xl border p-4">
                <p className="opacity-80 text-sm">
                  Place Melee rank tables here: Uncommon → Rare → Epic →
                  Legendary.
                </p>
              </div>
            ),
          },
          {
            id: "ranged",
            label: "RANGED UNITS ASCENSION",
            icon: <TabIcon src="/images/icons/unit.png" />,
            content: (
              <div className="rounded-2xl border p-4">
                <p className="opacity-80 text-sm">
                  Place Ranged rank tables here: Uncommon → Rare → Epic →
                  Legendary.
                </p>
              </div>
            ),
          },
        ]}
      />

      <section className="grid xl:grid-cols-2 gap-4">
        <AscensionTable rank="Uncommon" trait="Melee" />
        <AscensionTable rank="Rare" trait="Ranged" />
      </section>
      <section className="grid xl:grid-cols-2 gap-4">
        <AscensionTable rank="Epic" trait="Hero" />
        <AscensionTable rank="Legendary" trait="Ranged" />
      </section>
      {/* Tabs + tables come next */}
      <div id="ascension-tabs" />
      <DungeonGuide />
    </main>
  );
}
