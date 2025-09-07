"use client";

import React from "react";
import type { Card } from "@/src/types/cards";
import CardsGrid from "@/components/cards/CardsGrid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FACTIONS } from "@/lib/factions";

export default function CardsClient({ data }: { data: Card[] }) {
  const pathname = usePathname();
  const trail = pathname.split("/").filter(Boolean); // ["cards"] or ["cards","swamp"]

  // Lookup friendly label if faction is in URL
  const factionLabel =
    trail[1] &&
    FACTIONS.find((f) => f.id.toLowerCase() === trail[1].toLowerCase())?.label;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-white/60 flex items-center gap-1">
        <Link href="/cards" className="hover:text-white transition-colors">
          Cards
        </Link>
        {factionLabel && (
          <>
            <span>/</span>
            <span className="text-white/80">{factionLabel}</span>
          </>
        )}
      </div>

      <CardsGrid data={data} />
    </div>
  );
}
