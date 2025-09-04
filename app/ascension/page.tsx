"use client";
import { ASCENSION_COSTS } from "@/src/types/ascension";
import { Card, CardContent } from "@/components/ui/card";
import { useMemo, useState } from "react";

function totalStones(from: number, to: number) {
  if (to <= from) return 0;
  return ASCENSION_COSTS.filter(
    (s) => s.fromStar >= from && s.toStar <= to
  ).reduce((sum, s) => sum + s.soulstones, 0);
}

export default function AscensionPage() {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(6);
  const stones = useMemo(() => totalStones(from, to), [from, to]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Ascension Costs</h1>
      <Card className="bg-white/5">
        <CardContent className="p-6">
          <div className="grid sm:grid-cols-3 gap-4 items-end">
            <label className="text-sm">
              From Star
              <select
                value={from}
                onChange={(e) => setFrom(+e.target.value)}
                className="mt-1 w-full bg-transparent border rounded px-3 py-2"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              To Star
              <select
                value={to}
                onChange={(e) => setTo(+e.target.value)}
                className="mt-1 w-full bg-transparent border rounded px-3 py-2"
              >
                {[2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <div className="text-sm">
              <div className="opacity-80">Total Soulstones</div>
              <div className="text-2xl font-semibold">{stones}</div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left sticky top-0">
                <tr className="border-b border-white/10">
                  <th className="py-2 pr-4">From</th>
                  <th className="py-2 pr-4">To</th>
                  <th className="py-2">Soulstones</th>
                </tr>
              </thead>
              <tbody>
                {ASCENSION_COSTS.map((row) => (
                  <tr
                    key={`${row.fromStar}-${row.toStar}`}
                    className="border-b border-white/5"
                  >
                    <td className="py-2 pr-4">{row.fromStar}</td>
                    <td className="py-2 pr-4">{row.toStar}</td>
                    <td className="py-2">{row.soulstones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs opacity-70">
            *Placeholder values — we’ll replace with verified in-game data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
