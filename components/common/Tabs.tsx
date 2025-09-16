"use client";
import React from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
  /** Optional icon before the label (e.g., <Image />, lucide, etc.) */
  icon?: React.ReactNode;
};

export default function Tabs({
  items,
  initial = 0,
}: {
  items: TabItem[];
  initial?: number;
}) {
  const [active, setActive] = React.useState(items[initial]?.id ?? items[0].id);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Keyboard nav: ← → Home End
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const i = items.findIndex((t) => t.id === active);
    if (i < 0) return;

    const move = (next: number) => {
      const target = items[(next + items.length) % items.length];
      if (!target) return;
      setActive(target.id);
      listRef.current
        ?.querySelector<HTMLButtonElement>(`[data-tab="${target.id}"]`)
        ?.focus();
    };

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        move(i - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        move(i + 1);
        break;
      case "Home":
        e.preventDefault();
        move(0);
        break;
      case "End":
        e.preventDefault();
        move(items.length - 1);
        break;
    }
  };

  return (
    <div className="w-full">
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        // centered cluster, comfy gutters, never wraps
        className="mb-4 rounded-2xl border-x-4 border-[color:var(--input)] bg-[var(--card)]
                   px-3 py-2 flex flex-nowrap items-center justify-center gap-2 sm:gap-5"
      >
        {items.map((t) => {
          const isActive = t.id === active;

          const base =
            "relative inline-flex items-center gap-2 rounded-xl " +
            "px-2 sm:px-3 py-1.5 sm:py-2 " + // smaller on mobile
            "text-[11px] sm:text-xs md:text-sm whitespace-nowrap " + // no wrap
            "border select-none transition-colors " +
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]";

          const cls = isActive
            ? `${base} bg-[var(--muted)] border-[color:var(--ring)] font-medium`
            : `${base} border-[color:var(--border)] hover:bg-[color:var(--muted)]/60`;

          return (
            <button
              key={t.id}
              data-tab={t.id}
              id={`${t.id}-tab`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${t.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(t.id)}
              className={cls}
            >
              {t.icon ? (
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center shrink-0 size-3 sm:size-4"
                >
                  {t.icon}
                </span>
              ) : null}
              <span className="tracking-wide leading-none">{t.label}</span>
            </button>
          );
        })}
      </div>

      {items.map((t) => (
        <section
          key={t.id}
          id={`${t.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${t.id}-tab`}
          hidden={active !== t.id}
          className="space-y-4"
        >
          {t.content}
        </section>
      ))}
    </div>
  );
}
