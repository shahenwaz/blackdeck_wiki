"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FACTIONS } from "@/lib/factions";
import type { Card } from "@/src/types/cards";
import Image from "next/image";

/** Modern count pill with colored ring + tight glow, no underline */
function CountPill({ n, color }: { n: number; color?: string }) {
  const ring = color ? `${color}88` : "rgba(255,255,255,.18)";
  const glow = color ? `${color}33` : "rgba(0,0,0,0)";
  return (
    <span
      className="min-w-8 inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-white/90 tabular-nums no-underline"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
        border: `1px solid ${ring}`,
        boxShadow: `0 2px 6px ${glow}, inset 0 1px 0 rgba(255,255,255,.20)`,
        backdropFilter: "blur(6px)",
        textDecoration: "none", // safety against global CSS
      }}
    >
      {n}
    </span>
  );
}

/** Icon chip: dimmed tint + heavy vignette, PNG on top */
function FactionIcon({
  label,
  color,
  icon,
}: {
  label: string;
  color: string;
  icon?: string;
}) {
  return (
    <span
      className="relative grid h-12 w-12 place-items-center rounded-2xl shadow-sm overflow-hidden"
      style={{
        background: color,
        filter: "saturate(.85) brightness(.9)",
      }}
    >
      {/* dark vignette */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(100% 120% at 50% 50%, rgba(0,0,0,.40) 0%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.65) 100%)",
        }}
      />
      {/* top gloss */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,0) 55%)",
          mixBlendMode: "screen",
        }}
      />
      {icon ? (
        <Image
          src={icon}
          alt={label}
          width={28}
          height={28}
          className="relative h-7 w-7 object-contain opacity-95"
          sizes="48px"
        />
      ) : (
        <span className="relative text-[12px] font-extrabold tracking-wide text-black/90">
          {label[0]}
        </span>
      )}
    </span>
  );
}

export default function FactionList({ allCards }: { allCards: Card[] }) {
  const pathname = usePathname();

  // counts per faction
  const counts = allCards.reduce<Record<string, number>>((acc, c) => {
    acc[c.faction] = (acc[c.faction] ?? 0) + 1;
    return acc;
  }, {});
  const total = Object.values(counts).reduce((a, b) => a + (b ?? 0), 0);

  // active key (ALL for /cards)
  const activeKey =
    pathname === "/cards"
      ? "ALL"
      : pathname.startsWith("/cards/") && pathname.split("/")[2]
      ? pathname.split("/")[2].toUpperCase()
      : "ALL";

  // Tile styles
  const baseTile =
    "group relative flex items-center justify-between rounded-2xl border px-4 py-3 transition no-underline hover:no-underline focus:no-underline";
  const idleGlass =
    "bg-white/5 text-white/90 border-white/10 hover:bg-white/10";
  const activeTile =
    "bg-white/[.07] text-white border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]";

  return (
    <nav className="hidden lg:block lg:w-72 lg:shrink-0">
      <div className="space-y-3">
        {/* === All Cards === */}
        <Link
          href="/cards"
          className={[
            baseTile,
            activeKey === "ALL" ? activeTile : idleGlass,
          ].join(" ")}
          style={
            activeKey === "ALL"
              ? {
                  boxShadow:
                    "inset 0 0 0 2px rgba(255,255,255,.25), inset 0 1px 0 rgba(255,255,255,.12)",
                  textDecoration: "none",
                }
              : { textDecoration: "none" }
          }
        >
          <span className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/85 text-black shadow-sm">
              <span className="text-[12px] font-extrabold">ALL</span>
            </span>
            <span className="font-semibold no-underline">All Cards</span>
          </span>
          <CountPill n={total} />
        </Link>

        {/* === Each faction === */}
        {FACTIONS.map((f) => {
          const active = activeKey === f.id;
          const href = `/cards/${f.id.toLowerCase()}`;
          return (
            <Link
              key={f.id}
              href={href}
              className={[baseTile, active ? activeTile : idleGlass].join(" ")}
              style={
                active
                  ? {
                      boxShadow: `inset 0 0 0 2px ${f.color}, 0 0 4px ${f.color}44`,
                      textDecoration: "none",
                    }
                  : { textDecoration: "none" }
              }
            >
              <span className="flex items-center gap-3">
                <FactionIcon label={f.label} color={f.color} icon={f.icon} />
                <span className="font-semibold no-underline">{f.label}</span>
              </span>
              <CountPill n={counts[f.id] ?? 0} color={f.color} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
