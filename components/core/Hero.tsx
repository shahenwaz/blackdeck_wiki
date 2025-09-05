import { Button } from "@/components/ui/button";

export default function CoreHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,hsl(var(--accent)/0.20),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 relative">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            A fast, beautiful fan WiKi for{" "}
            <span className="text-[hsl(var(--accent))]">Black Deck</span>
          </h1>

          <p className="text-sm md:text-base text-white/80">
            Up-to-date info on heroes, units, artifacts, sets, and ascension —
            plus beginner tips and meta insights.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button size="lg" asChild>
              <a href="/heroes">Browse Heroes</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/ascension">Ascension Costs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
