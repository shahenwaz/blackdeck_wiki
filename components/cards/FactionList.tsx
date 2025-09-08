"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FACTIONS } from "@/lib/factions";
import type { Card } from "@/src/types/cards";
import Image from "next/image";
import { useState } from "react";

/** Modern count pill */
function CountPill({ n, color }: { n: number; color?: string }) {
  const ring = color ? `${color}88` : "rgba(255,255,255,.18)";
  const glow = color ? `${color}33` : "rgba(0,0,0,0)";
  return (
    <span
      className="min-w-8 inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-white/90 tabular-nums no-underline transition"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
        border: `1px solid ${ring}`,
        boxShadow: `0 2px 6px ${glow}, inset 0 1px 0 rgba(255,255,255,.20)`,
        backdropFilter: "blur(6px)",
        textDecoration: "none",
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
      className="relative grid h-12 w-12 place-items-center rounded-2xl shadow-sm overflow-hidden"
      style={{
        background: color,
        filter: "saturate(.85) brightness(.9)",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(100% 120% at 50% 50%, rgba(0,0,0,.40) 0%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.65) 100%)",
        }}
      />
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

/** Premium static sheen overlay */
function PremiumSheen() {
  return (
    <span className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-white/[0.03] to-transparent"
        style={{
          mixBlendMode: "screen",
        }}
      />
    </span>
  );
}

export default function FactionList({ allCards }: { allCards: Card[] }) {
  const pathname = usePathname();

  const counts = allCards.reduce<Record<string, number>>((acc, c) => {
    acc[c.faction] = (acc[c.faction] ?? 0) + 1;
    return acc;
  }, {});
  const total = Object.values(counts).reduce((a, b) => a + (b ?? 0), 0);

  const activeKey =
    pathname === "/cards"
      ? "ALL"
      : pathname.startsWith("/cards/") && pathname.split("/")[2]
      ? pathname.split("/")[2].toUpperCase()
      : "ALL";

  const baseTile =
    "group relative flex items-center justify-between rounded-2xl border px-4 py-3 transition duration-300 ease-out no-underline hover:no-underline focus:no-underline overflow-hidden will-change-transform";
  const idleGlass =
    "bg-white/5 text-white/90 border-white/10 hover:bg-white/10";
  const activeTile =
    "bg-white/[.07] text-white border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]";

  // Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <nav className="hidden lg:block lg:w-72 lg:shrink-0">
      <div className="space-y-3">
        {/* All Cards */}
        <Link
          href="/cards"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            resetTilt();
          }}
          className={[
            baseTile,
            activeKey === "ALL" ? activeTile : idleGlass,
          ].join(" ")}
          style={{
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            boxShadow:
              activeKey === "ALL"
                ? "inset 0 0 0 2px rgba(255,255,255,.25), inset 0 1px 0 rgba(255,255,255,.12)"
                : undefined,
            textDecoration: "none",
          }}
        >
          <PremiumSheen />
          <span className="flex items-center gap-3 relative z-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/85 text-black shadow-sm">
              <span className="text-[12px] font-extrabold">ALL</span>
            </span>
            <span className="font-semibold">All Cards</span>
          </span>
          <CountPill n={total} />
        </Link>

        {/* Factions */}
        {FACTIONS.map((f) => {
          const active = activeKey === f.id;
          const href = `/cards/${f.id.toLowerCase()}`;
          return (
            <Link
              key={f.id}
              href={href}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                resetTilt();
              }}
              className={[baseTile, active ? activeTile : idleGlass].join(" ")}
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                boxShadow: active
                  ? `inset 0 0 0 2px ${f.color}, 0 0 4px ${f.color}44`
                  : undefined,
                textDecoration: "none",
              }}
            >
              <PremiumSheen />
              <span className="flex items-center gap-3 relative z-10">
                <FactionIcon label={f.label} color={f.color} icon={f.icon} />
                <span className="font-semibold">{f.label}</span>
              </span>
              <CountPill n={counts[f.id] ?? 0} color={f.color} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
