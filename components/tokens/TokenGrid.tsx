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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ---- Types & helpers -------------------------------------------------
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

// ---- Component -------------------------------------------------------
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
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search icons by name, description, or id…"
          aria-label="Search icons"
        />

        <Select
          value={cat}
          onValueChange={(v) => setCat(isCatFilter(v) ? v : "all")}
        >
          <SelectTrigger aria-label="Filter by category">
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
          <SelectTrigger aria-label="Sort">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="name-asc">Name (A→Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z→A)</SelectItem>
            <SelectItem value="category">Category</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      <ul
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        role="list"
      >
        {items.map((t) => (
          <li key={t.id}>
            <TokenCard token={t} />
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

function TokenCard({ token }: { token: TokenRecord }) {
  return (
    <Card className="group h-full overflow-hidden transition-[transform,box-shadow] hover:shadow-md hover:-translate-y-0.5">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-medium truncate">
            {token.name}
          </CardTitle>
          <Badge variant="outline" className="text-[11px] capitalize">
            {token.category.replace("-", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3">
          {/* auto: tooltip on desktop, popover on touch */}
          <Token id={token.id} size={40} />
          <p className="text-xs text-muted-foreground line-clamp-3">
            {token.desc}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
