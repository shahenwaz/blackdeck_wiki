"use client";

import React from "react";
import type { Card } from "@/src/types/cards";
import { RARITY_COLORS, pretty } from "@/lib/colors";
import Image from "next/image";

export default function CardModal({
  card,
  onClose,
}: {
  card: Card | null;
  onClose: () => void;
}) {
  if (!card) return null;
  const rarityColor = RARITY_COLORS[card.rarity];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 md:items-center">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--background))] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <h3 className="text-base font-semibold text-white">{card.name}</h3>
          <button
            onClick={onClose}
            className="rounded-md bg-white/10 px-2 py-1 text-xs hover:bg-white/15"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-[220px_1fr]">
          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={card.portraitUrl}
                alt={card.name}
                className="h-full w-full object-cover"
              ></Image>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <span className="rounded-md bg-white/5 px-2 py-1">
                {pretty(card.faction)}
              </span>
              <span
                className="rounded-md bg-white/5 px-2 py-1"
                style={{ color: rarityColor }}
              >
                {pretty(card.rarity)}
              </span>
              <span className="rounded-md bg-white/5 px-2 py-1">
                {pretty(card.attackType)}
              </span>
              {card.attackEffect && card.attackEffect !== "NONE" && (
                <span className="rounded-md bg-white/5 px-2 py-1">
                  {pretty(card.attackEffect)}
                </span>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-2 text-sm font-semibold text-white">Stats</h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {card.stats.map((s) => (
                <div
                  key={s.level}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="mb-2 text-xs font-semibold">
                    {pretty(s.level)}
                  </div>
                  <div className="text-xs text-white/70">Level Cap</div>
                  <div className="mb-2 text-sm font-semibold">
                    {s.levelCap ?? "—"}
                  </div>
                  <div className="text-xs text-white/70">Strength</div>
                  <div className="mb-2 text-sm font-semibold">
                    {s.strength.toLocaleString()}
                  </div>
                  <div className="text-xs text-white/70">Power</div>
                  <div className="text-sm font-semibold">
                    {s.power.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="mt-5 mb-2 text-sm font-semibold text-white">
              Skills
            </h4>
            <div className="space-y-2">
              {card.skills.map((sk) => (
                <div
                  key={sk.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="text-sm font-semibold">{sk.name}</div>
                  <div className="text-xs text-white/80">{sk.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
