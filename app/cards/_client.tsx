"use client";

import React from "react";
import type { Card } from "@/src/types/cards";
import CardsGrid from "@/components/cards/CardsGrid";

export default function CardsClient({ data }: { data: Card[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <CardsGrid data={data} />
    </div>
  );
}
