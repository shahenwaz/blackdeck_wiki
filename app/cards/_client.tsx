"use client";

import React from "react";
import type { Card } from "@/src/types/cards";
import CardsGrid from "@/components/cards/CardsGrid";
import { usePathname } from "next/navigation";

export default function CardsClient({ data }: { data: Card[] }) {
  const pathname = usePathname();
  const trail = pathname.split("/").filter(Boolean); // e.g. ["cards"] or ["cards","swamp"]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Small breadcrumb above grid */}
      <div className="mb-4 text-sm text-white/60">
        Cards{" "}
        {trail[1] ? (
          <span className="ml-1 font-medium text-white/80">
            • {trail[1].toUpperCase()}
          </span>
        ) : (
          <span className="ml-1 font-medium text-white/80">• All</span>
        )}
      </div>

      <CardsGrid data={data} />
    </div>
  );
}
