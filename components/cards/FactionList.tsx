"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FACTIONS } from "@/lib/factions";
import type { Card } from "@/src/types/cards";

export default function FactionList({ allCards }: { allCards: Card[] }) {
  const pathname = usePathname();

  // derive counts per faction (cheap)
  const counts = allCards.reduce<Record<string, number>>((acc, c) => {
    acc[c.faction] = (acc[c.faction] ?? 0) + 1;
    return acc;
  }, {});

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="hidden lg:block lg:w-72 lg:shrink-0">
      <div className="sticky top-[var(--nav-h,72px)] space-y-2">
        <Link
          href="/cards"
          className={`flex items-center justify-between rounded-xl px-4 py-3 transition
            ${
              isActive("/cards")
                ? "bg-white text-black"
                : "bg-white/5 hover:bg-white/10"
            }
          `}
        >
          <span className="font-semibold">All Factions</span>
        </Link>

        {FACTIONS.map((f) => {
          const href = `/cards/${f.id.toLowerCase()}`;
          const active = isActive(href);
          return (
            <Link
              key={f.id}
              href={href}
              className={`flex items-center justify-between rounded-xl px-4 py-3 transition
                ${
                  active
                    ? "bg-white text-black"
                    : "bg-white/5 hover:bg-white/10"
                }
              `}
              style={
                active ? { boxShadow: `inset 0 0 0 2px ${f.color}` } : undefined
              }
            >
              <span className="flex items-center gap-3">
                {/* icon circle */}
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: f.color }}
                >
                  {/* replace with <img src=... alt /> later if you want */}
                  <span className="text-[10px] font-bold text-black">
                    {f.label[0]}
                  </span>
                </span>
                <span className="font-semibold">{f.label}</span>
              </span>
              <span className="rounded-md bg-black/10 px-2 py-0.5 text-xs">
                {counts[f.id] ?? 0}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
