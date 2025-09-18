import type { ReactNode } from "react";
import { cards } from "@/src/data/cards";
import FactionList from "@/components/cards/FactionList";

export default function CardsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[18rem_1fr]">
        {/* Desktop sidebar with factions */}
        <FactionList allCards={cards} />
        {/* The actual cards content (from page.tsx or [faction]/page.tsx) */}
        <div>{children}</div>
      </div>
    </section>
  );
}
