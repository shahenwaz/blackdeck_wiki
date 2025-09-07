"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FACTIONS } from "@/lib/factions";
import type { Card } from "@/src/types/cards";
import Image from "next/image";

function CountPill({ n }: { n: number }) {
  return (
    <span
      className="min-w-8 inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[11px] font-semibold"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.06))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.35)",
        border: "1px solid rgba(255,255,255,.14)",
      }}
    >
      {n}
    </span>
  );
}

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
      className="relative grid h-12 w-12 place-items-center rounded-2xl shadow-sm"
      style={{ background: `${color}` }}
    >
      {/* glossy highlight */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(100% 60% at 30% 0%, rgba(255,255,255,.45) 0%, rgba(255,255,255,.15) 35%, rgba(255,255,255,0) 70%)",
        }}
      />
      {icon ? (
        <Image
          src={icon}
          alt={label}
          width={28} // ✅ explicit dimensions to avoid runtime error
          height={28}
          className="relative h-7 w-7 object-contain"
          priority={false}
          sizes="48px" // icon box ~48px (= h-12 w-12), image is 28px
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

  // active key (null for /cards)
  const activeKey =
    pathname === "/cards"
      ? "ALL"
      : pathname.startsWith("/cards/") && pathname.split("/")[2]
      ? pathname.split("/")[2].toUpperCase()
      : "ALL";

  // base tile style (glossy card)
  const baseTile =
    "group relative flex items-center justify-between rounded-2xl border px-4 py-3 transition";
  const idleGlass =
    "bg-white/5 text-white/85 border-white/10 hover:bg-white/10";
  const activeTile = "bg-white text-black border-white/20";

  return (
    <nav className="hidden lg:block lg:w-72 lg:shrink-0">
      <div className="space-y-2">
        {/* === All Cards === */}
        <Link
          href="/cards"
          className={[
            baseTile,
            activeKey === "ALL" ? activeTile : idleGlass,
          ].join(" ")}
        >
          {/* left accent (hover) */}
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1.5 rounded-l-2xl opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,.7), rgba(255,255,255,0))",
            }}
          />
          <span className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/85 text-black shadow-sm">
              <span className="text-[12px] font-extrabold">ALL</span>
            </span>
            <span className="font-semibold">All Cards</span>
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
                  ? { boxShadow: `inset 0 0 0 2px ${f.color}33` }
                  : undefined
              }
            >
              {/* left accent in faction color */}
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-1.5 rounded-l-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `linear-gradient(180deg, ${f.color}, rgba(0,0,0,0))`,
                }}
              />
              <span className="flex items-center gap-3">
                <FactionIcon label={f.label} color={f.color} icon={f.icon} />
                <span className="font-semibold">{f.label}</span>
              </span>
              <CountPill n={counts[f.id] ?? 0} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
