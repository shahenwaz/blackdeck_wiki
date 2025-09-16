import Image from "next/image";
import Tabs from "@/components/common/Tabs";
import AscensionTable from "@/components/progression/AscensionTable";
import DungeonGuide from "@/components/progression/DungeonGuide";

const TabIcon = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <Image
    src={src}
    alt={alt}
    width={18}
    height={18}
    aria-hidden={alt === ""}
    className="h-[18px] w-[18px] object-contain"
  />
);

export const metadata = {
  title: "Ascension — BlackDeck WiKi",
  description:
    "Rank-by-rank ascension costs with clear & trait stones, split by Hero, Melee, and Ranged.",
  openGraph: { title: "Ascension — BlackDeck WiKi", type: "article" },
};

export default function Page() {
  return (
    <main className="container py-8 space-y-6 animate-fadeIn">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">Ascension</h1>
        <p className="text-sm opacity-80 max-w-2xl">
          Each rank uses the same per-star costs across cards. Clear stones are
          always required, plus a second set based on the trait (Hero / Melee /
          Ranged). Tables below show per-step costs from 1★ → 6★.
        </p>
      </header>

      <Tabs
        items={[
          {
            id: "hero",
            label: "HEROES",
            icon: <TabIcon src="/images/icons/hero.png" />,
            content: (
              <div className="grid xl:grid-cols-2 gap-4">
                <AscensionTable
                  rank="Legendary"
                  trait="Hero"
                  title="Hero — Legendary"
                />
                <AscensionTable rank="Epic" trait="Hero" title="Hero — Epic" />
                <AscensionTable rank="Rare" trait="Hero" title="Hero — Rare" />
              </div>
            ),
          },
          {
            id: "melee",
            label: "MELEE UNITS",
            icon: <TabIcon src="/images/icons/unit.png" />,
            content: (
              <div className="grid xl:grid-cols-2 gap-4">
                <AscensionTable
                  rank="Uncommon"
                  trait="Melee"
                  title="Melee — Uncommon"
                />
                <AscensionTable
                  rank="Rare"
                  trait="Melee"
                  title="Melee — Rare"
                />
                <AscensionTable
                  rank="Epic"
                  trait="Melee"
                  title="Melee — Epic"
                />
                <AscensionTable
                  rank="Legendary"
                  trait="Melee"
                  title="Melee — Legendary"
                />
              </div>
            ),
          },
          {
            id: "ranged",
            label: "RANGED UNITS",
            icon: <TabIcon src="/images/icons/unit.png" />,
            content: (
              <div className="grid xl:grid-cols-2 gap-4">
                <AscensionTable
                  rank="Uncommon"
                  trait="Ranged"
                  title="Ranged — Uncommon"
                />
                <AscensionTable
                  rank="Rare"
                  trait="Ranged"
                  title="Ranged — Rare"
                />
                <AscensionTable
                  rank="Epic"
                  trait="Ranged"
                  title="Ranged — Epic"
                />
                <AscensionTable
                  rank="Legendary"
                  trait="Ranged"
                  title="Ranged — Legendary"
                />
              </div>
            ),
          },
        ]}
      />

      <DungeonGuide />
    </main>
  );
}
