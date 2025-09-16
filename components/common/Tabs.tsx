"use client";
import React from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
  /** Optional icon before the label (png <img />, lucide, react-icons, etc.) */
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
        className="mb-4 flex flex-wrap gap-2 rounded-xl border p-1"
      >
        {items.map((t) => {
          const isActive = t.id === active;
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
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]
                ${
                  isActive
                    ? "bg-[hsl(var(--muted))] font-medium shadow-sm"
                    : "hover:bg-[hsl(var(--muted))]/70"
                }`}
            >
              {t.icon ? (
                <span
                  aria-hidden="true"
                  className="grid place-items-center size-4"
                >
                  {t.icon}
                </span>
              ) : null}
              {t.label}
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
