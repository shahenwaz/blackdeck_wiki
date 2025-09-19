import { Metadata } from "next";
import { TokenGrid } from "@/components/tokens/TokenGrid";
import { TOKENS } from "@/src/data/tokens";
import { Separator } from "@/components/ui/separator";

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
      <header className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Glossary of Icons
        </h1>
        <p className="mt-2 text-muted-foreground">
          A single source of truth for all item icons used across the site.
          Hover on desktop, tap on mobile to learn more.
        </p>
        <div className="mt-3 text-xs sm:text-sm text-muted-foreground">
          Total icons:{" "}
          <span className="font-medium text-foreground">{total}</span>
        </div>
      </header>

      <Separator className="my-6" />

      <TokenGrid />
    </main>
  );
}
