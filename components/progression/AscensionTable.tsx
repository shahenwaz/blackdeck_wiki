"use client";
import Image from "next/image";
import type { Rank, Trait, StarStep, IconSet } from "@/src/data/ascension";
import { ASCENSION_COSTS, ICONS } from "@/src/data/ascension";

// Typed icon lookup per trait
const ICON_BY_TRAIT: Record<Trait, IconSet> = {
  Melee: ICONS.melee,
  Ranged: ICONS.ranged,
  Hero: ICONS.hero,
} as const;

// CSS class per rank for border color (defined in globals.css)
const RANK_CLASS: Record<Rank, string> = {
  Uncommon: "rank-uncommon",
  Rare: "rank-rare",
  Epic: "rank-epic",
  Legendary: "rank-legendary",
} as const;

function HeaderIcon({ src, title }: { src: string; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src}
        alt={title}
        title={title}
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
      <span className="sr-only">{title}</span>
    </div>
  );
}

// Renders star icons for "to" value (1-6)
function StepStars({ to }: { to: 1 | 2 | 3 | 4 | 5 | 6 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: to }).map((_, i) => (
        <Image
          key={i}
          src={ICONS.star}
          alt={`${to} star`}
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      ))}
    </div>
  );
}

export default function AscensionTable({
  rank,
  trait,
  title,
}: {
  rank: Rank;
  trait: Trait;
  title: string;
}) {
  const data = ASCENSION_COSTS[rank];

  return (
    <div
      className={[
        "rounded-2xl",
        "border", // normal frame
        "border-[color:var(--input)]", // frame color
        "border-t-4", // thicker top
        "[border-top-color:var(--rank-accent)]", // accent only on top edge
        "shadow-[inset_0_-1px_0_0_var(--rank-accent-faint)]", // subtle inner top glow
        "p-4 bg-[var(--card)]",
        RANK_CLASS[rank], // sets --rank-accent from globals
      ].join(" ")}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs opacity-70">
          {rank} • {trait}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 [border-bottom-color:var(--rank-accent-weak)]">
              <th className="py-2 text-left">Step</th>

              {/* Clear stones */}
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICONS.clear.lesser}
                  title="Clear Lesser Soulstone"
                />
              </th>
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICONS.clear.greater}
                  title="Clear Greater Soulstone"
                />
              </th>
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICONS.clear.grand}
                  title="Clear Grand Soulstone"
                />
              </th>

              {/* Trait stones */}
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICON_BY_TRAIT[trait].lesser}
                  title={`${trait} Lesser Soulstone`}
                />
              </th>
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICON_BY_TRAIT[trait].greater}
                  title={`${trait} Greater Soulstone`}
                />
              </th>
              <th className="py-2 text-left">
                <HeaderIcon
                  src={ICON_BY_TRAIT[trait].grand}
                  title={`${trait} Grand Soulstone`}
                />
              </th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6].map((s) => {
              const step = s as StarStep;
              return (
                <tr key={s} className="border-b border-[color:var(--border)]">
                  <td className="py-2">
                    <StepStars to={s as 1 | 2 | 3 | 4 | 5 | 6} />
                  </td>
                  {/* Clear */}
                  <td className="py-2">{data[step].clear.lesser}</td>
                  <td className="py-2">{data[step].clear.greater}</td>
                  <td className="py-2">{data[step].clear.grand}</td>
                  {/* Trait */}
                  <td className="py-2">{data[step].trait.lesser}</td>
                  <td className="py-2">{data[step].trait.greater}</td>
                  <td className="py-2">{data[step].trait.grand}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-xs opacity-70">
        Costs are identical across cards of the same rank.
      </p>
    </div>
  );
}
