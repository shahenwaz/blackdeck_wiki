"use client";

import React from "react";
import type { Card } from "@/src/types/cards";
import { FACTION_COLORS, RARITY_COLORS, pretty } from "@/lib/colors";
import Image from "next/image";

function outlineStyle(card: Card): React.CSSProperties {
  return {
    boxShadow: `0 0 0 1px rgba(255,255,255,.06),
                0 0 0 2px ${RARITY_COLORS[card.rarity]}22,
                inset 0 0 0 2px ${FACTION_COLORS[card.faction]}22`,
    background:
      "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
  };
}

export default function CardTile({
  card,
  onOpen,
}: {
  card: Card;
  onOpen: (c: Card) => void;
}) {
  const upgraded = card.stats.find((s) => s.level === "UPGRADED");

  return (
    <button
      onClick={() => onOpen(card)}
      className="group relative overflow-hidden rounded-2xl text-left shadow-[0_10px_30px_rgba(0,0,0,.45)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,.55)]"
      style={outlineStyle(card)}
    >
      <div
        className="absolute inset-x-0 top-0 z-10 h-1"
        style={{ background: RARITY_COLORS[card.rarity] }}
      />
      <div className="relative grid grid-cols-[96px_1fr] gap-3 p-3">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-black/50">
          <Image
            src={card.portraitUrl}
            alt={card.name}
            className="h-full w-full object-cover opacity-90"
          >
            {" "}
          </Image>
          {card.hero && (
            <span className="absolute left-1 top-1 rounded-md bg-yellow-400/90 px-1.5 py-0.5 text-[10px] font-bold text-black">
              HERO
            </span>
          )}
          <span
            className="absolute bottom-1 right-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold"
            style={{ background: FACTION_COLORS[card.faction], color: "#000" }}
          >
            {pretty(card.faction)}
          </span>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-white">
              {card.name}
            </h3>
            <span
              className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{
                background: `${RARITY_COLORS[card.rarity]}22`,
                color: RARITY_COLORS[card.rarity],
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: RARITY_COLORS[card.rarity] }}
              />
              {pretty(card.rarity)}
            </span>
          </div>

          <div className="mb-2 flex items-center gap-2 text-xs text-white/80">
            <span className="rounded-md bg-white/5 px-1.5 py-0.5">
              {pretty(card.attackType)}
            </span>
            {card.attackEffect && card.attackEffect !== "NONE" && (
              <span className="rounded-md bg-white/5 px-1.5 py-0.5">
                {pretty(card.attackEffect)}
              </span>
            )}
            {card.pattern && (
              <span className="rounded-md bg-white/5 px-1.5 py-0.5">
                {pretty(card.pattern)}
              </span>
            )}
          </div>

          {upgraded && (
            <div className="mt-auto grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-white/5 p-2">
                <div className="text-white/60">Strength</div>
                <div className="font-semibold text-white">
                  {upgraded.strength.toLocaleString()}
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-2">
                <div className="text-white/60">Power</div>
                <div className="font-semibold text-white">
                  {upgraded.power.toLocaleString()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
