"use client";
import { DUNGEONS } from "@/src/data/ascension";

export default function DungeonGuide() {
  return (
    <div className="rounded-2xl border p-4">
      <h3 className="text-lg font-semibold mb-2">Where to Farm Soulstones</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {Object.entries(DUNGEONS).map(([k, d]) => (
          <div
            key={k}
            className="flex items-center gap-3 p-3 rounded-xl border"
          >
            <div className="size-10 rounded-md bg-[hsl(var(--muted))]" />
            <div>
              <div className="font-medium">{d.name}</div>
              <div className="text-xs opacity-70">
                Drops: {k === "Clear" ? "Clear" : `${k} trait`} soulstones
                (Lesser, Greater, Grand)
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs opacity-70 mt-2">
        Higher stages drop larger bundles (e.g., x6–10 lesser, x3–7 greater,
        x1–3 grand).
      </p>
    </div>
  );
}
