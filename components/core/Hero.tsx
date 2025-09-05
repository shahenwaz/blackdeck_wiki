import { Button } from "@/components/ui/button";

export default function CoreHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          Build the definitive{" "}
          <span className="text-[hsl(var(--accent))]">Black Deck</span> wiki —
          fast, accurate, and beautiful.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--foreground)]/80 animate-in fade-in-50 slide-in-from-bottom-2 duration-700 delay-150">
          Heroes, units, artifacts, sets, and ascension — with clean data you
          can trust, plus practical tips for new and veteran players.
        </p>

        <div className="mt-8 flex items-center gap-2 animate-in fade-in-50 slide-in-from-bottom-2 duration-700 delay-300">
          <div className="rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 bg-foreground/10">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-xl px-5 text-base bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[color-mix(in oklab,var(--muted) 90%,white 10%)]"
            >
              <a href="/heroes">Browse Heroes</a>
            </Button>
          </div>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="h-10.5 rounded-xl px-5 text-base border border-accent"
          >
            <a href="/ascension">Ascension Costs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
