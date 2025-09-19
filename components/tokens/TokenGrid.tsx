"use client";

import * as React from "react";
import {
  TOKENS,
  type TokenRecord,
  type TokenCategory,
} from "@/src/data/tokens";
import { Token } from "@/components/tokens/Tokens";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryPill } from "@/components/tokens/CategoryPill";

// ── Types & helpers ────────────────────────────────────────────────────────────
const CATEGORIES = [
  "resource",
  "unit-type",
  "soulstone",
  "token",
  "misc",
] as const;
type BaseCategory = (typeof CATEGORIES)[number];
type CatFilter = "all" | BaseCategory;

const isCatFilter = (v: string): v is CatFilter =>
  v === "all" || (CATEGORIES as readonly string[]).includes(v);

const categoryOptions: Array<{ value: "all" | TokenCategory; label: string }> =
  [
    { value: "all", label: "All" },
    { value: "resource", label: "Resources" },
    { value: "unit-type", label: "Unit Types" },
    { value: "soulstone", label: "Soulstones" },
    { value: "token", label: "Unit Tokens" },
    { value: "misc", label: "Misc" },
  ];

const SORTS = ["name-asc", "name-desc", "category"] as const;
type SortKey = (typeof SORTS)[number];
const isSortKey = (v: string): v is SortKey =>
  (SORTS as readonly string[]).includes(v);

// ── Component (List-only) ─────────────────────────────────────────────────────
export function TokenGrid() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<CatFilter>("all");
  const [sort, setSort] = React.useState<SortKey>("name-asc");

  const items = React.useMemo(() => {
    const list = Object.values(TOKENS);

    const filtered = list.filter((t) => {
      const hitCat = cat === "all" ? true : t.category === cat;
      const hitQ =
        q.trim().length === 0
          ? true
          : (t.name + " " + t.desc + " " + t.id)
              .toLowerCase()
              .includes(q.toLowerCase());
      return hitCat && hitQ;
    });

    const sorted = filtered.sort((a, b) => {
      if (sort === "category") {
        if (a.category === b.category) return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
      }
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return a.name.localeCompare(b.name);
    });

    return sorted;
  }, [q, cat, sort]);

  return (
    <div className="space-y-3">
      {/* Controls: Search on row-1; filters on row-2 on small.
          On ≥sm, everything fits inline. */}
      <div
        className="rounded-2xl border-x-4 border-[color:var(--input)] bg-[var(--card)]
                   px-3 py-4 sm:px-4"
      >
        <div className="flex flex-col gap-2 sm:flex-row lg:items-center lg:gap-2">
          {/* Row 1 (always full width) */}
          <div className="col-span-full w-full">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search icons by name, description, or id…"
              aria-label="Search icons"
              className="w-full"
            />
          </div>

          {/* Row 2 (filters). On small they form the second row. On ≥sm they sit inline. */}
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:grid-cols-[auto_auto]">
            <Select
              value={cat}
              onValueChange={(v) => setCat(isCatFilter(v) ? v : "all")}
            >
              <SelectTrigger
                aria-label="Filter by category"
                className="w-full sm:w-[140px]"
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent align="start">
                {categoryOptions.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sort}
              onValueChange={(v) => setSort(isSortKey(v) ? v : "name-asc")}
            >
              <SelectTrigger aria-label="Sort" className="w-full sm:w-[150px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectItem value="name-asc">Name (A→Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z→A)</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* List */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3" role="list">
        {items.map((t) => (
          <li key={t.id}>
            <ListRow token={t} />
          </li>
        ))}
      </ul>

      {/* Empty state */}
      {items.length === 0 && (
        <div className="rounded-2xl border border-border p-8 text-center text-sm text-muted-foreground">
          No icons match your search.
        </div>
      )}
    </div>
  );
}

// ── Row design ─────────────────────────────────────────
function ListRow({ token }: { token: TokenRecord }) {
  return (
    <Card
      className="
        h-full group rounded-2xl border transition-colors
        hover:bg-card
        border-x-4 border-[color:var(--input)]
        bg-[color-mix(in_oklab,var(--card)_60%,transparent)]
        hover:border-[color:var(--ring)]
      "
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-3 sm:gap-4 py-2 px-3 sm:px-4">
          <div
            className="
              shrink-0 w-14 h-14 grid place-items-center rounded-xl
              bg-[color-mix(in_oklab,var(--background)_88%,var(--foreground)_12%)]
              ring-2 ring-[color:var(--border)]
            "
          >
            <Token id={token.id} size={40} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <div className="font-semibold truncate">{token.name}</div>
              <CategoryPill category={token.category} />
            </div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {token.desc}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
