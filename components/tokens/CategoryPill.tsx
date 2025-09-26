"use client";
import * as React from "react";
import type { TokenCategory } from "@/src/data/tokens";
import { cn } from "@/lib/utils";

/**
 * Strongly separated hues (OKLCH):
 * - resource: amber/gold
 * - unit-type: vivid violet
 * - attack-pattern: true red
 * - soulstone: emerald
 * - token: azure blue
 * - misc: slate-neutral
 * - guild: hot magenta
 * - class: deep indigo (distinct from violet)
 * - faction: teal/cyan
 * - game-mode: lime (distinct from emerald)
 */
const COLORS: Record<TokenCategory, string> = {
  resource: "oklch(78% 0.17 80)", // amber/gold
  faction: "oklch(72% 0.16 50)", // earth/copper (warm orange-brown)
  "unit-type": "oklch(70% 0.28 300)", // vivid violet
  "attack-pattern": "oklch(68% 0.30 25)", // true red
  class: "oklch(70% 0.24 272)", // deep indigo (bluer than violet)
  soulstone: "oklch(74% 0.19 155)", // emerald
  token: "oklch(70% 0.24 255)", // cobalt / blue (more chroma)
  guild: "oklch(72% 0.27 335)", // hot magenta
  "game-mode": "oklch(78% 0.20 128)", // lime
  misc: "oklch(58% 0 0)", // neutral gray (no hue/chroma)
};

export function CategoryPill({
  category,
  className,
}: {
  category: TokenCategory;
  className?: string;
}) {
  const c = COLORS[category] ?? "oklch(62% 0.02 260)";
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
        // Slightly stronger mixes so borders/backgrounds read clearer on dark UIs
        background: `color-mix(in oklab, ${c} 18%, transparent)`,
        borderColor: `color-mix(in oklab, ${c} 50%, transparent)`,
        color: `color-mix(in oklab, ${c} 70%, white)`,
      }}
    >
      {label}
    </span>
  );
}
