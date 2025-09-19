"use client";
import * as React from "react";
import type { TokenCategory } from "@/src/data/tokens";
import { cn } from "@/lib/utils";

const COLORS: Record<TokenCategory, string> = {
  resource: "oklch(78% 0.17 88)", // amber/gold
  "unit-type": "oklch(70% 0.22 300)", // violet
  soulstone: "oklch(75% 0.16 150)", // green
  token: "oklch(78% 0.13 210)", // cyan/blue
  misc: "oklch(62% 0.03 275)", // neutral
};

export function CategoryPill({
  category,
  className,
}: {
  category: TokenCategory;
  className?: string;
}) {
  const c = COLORS[category];
  const label = category.replace("-", " ");

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-1.5 py-0.5",
        "text-[10px] font-medium tracking-wide uppercase",
        "transition-colors",
        className
      )}
      style={{
        background: `color-mix(in oklab, ${c} 14%, transparent)`,
        borderColor: `color-mix(in oklab, ${c} 42%, transparent)`,
        color: `color-mix(in oklab, ${c} 65%, white)`,
      }}
    >
      {label}
    </span>
  );
}
