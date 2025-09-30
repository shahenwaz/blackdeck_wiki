import { Metadata } from "next";
import { TokenGrid } from "@/components/tokens/TokenGrid";
import { TOKENS } from "@/src/data/tokens";

export const metadata: Metadata = {
  title: "Glossary of Icons",
  description:
    "Browse every resource, soulstone, unit token, and unit-type icon used in BlackDeck Wiki with quick descriptions.",
  openGraph: {
    title: "Glossary of Icons — BlackDeck Wiki",
    description:
      "Searchable, mobile-friendly glossary of all icons used across the wiki.",
    type: "article",
  },
};

export default function GlossaryPage() {
  const total = Object.keys(TOKENS).length;

  return (
    <main className="container max-w-6xl py-8 sm:py-10">
      <header>
        {/* Title + total chip (same row on mobile) */}
        <div className="flex items-center justify-between gap-2">
          {/* title stretches, chip never shrinks */}
          <h1 className="min-w-0 flex-1 text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-white to-[color:var(--foreground)]/85 bg-clip-text text-transparent">
              Glossary of Icons
            </span>
          </h1>

          {/* total chip */}
          <span
            className="shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-1.5
               text-[12px] sm:text-[13px] font-medium
               border-2 border-[color:var(--border)]/85
               bg-[color-mix(in_oklab,var(--popover)_94%,transparent)]"
            aria-label={`Total icons: ${total}`}
          >
            <span className="opacity-70">Total :</span>
            <span className="text-foreground">{total}</span>
          </span>
        </div>

        {/* Accent underline under the whole row */}
        <span className="block mt-3 h-[3px] w-35 rounded-full bg-gradient-to-r from-[color:var(--ring)]/80 to-transparent" />

        {/* Subheadline */}
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          A single source of truth for all item icons used across the site.
          Hover on desktop, tap on mobile to learn more.
        </p>
      </header>

      {/* subtle hairline */}
      <div className="my-4 sm:my-6 h-px bg-gradient-to-r from-transparent via-[color:var(--border)]/60 to-transparent" />

      <TokenGrid />
    </main>
  );
}
