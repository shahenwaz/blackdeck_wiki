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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold">
              A fast, beautiful fan WiKi for{" "}
              <span className="text-[hsl(var(--accent))]">Black Deck</span>
            </h1>
            <p className="text-sm md:text-base text-white/80">
              Clean, up-to-date info on heroes, units, artifacts, sets, and
              ascension costs — with beginner guides and meta insights.
            </p>
            <div className="flex gap-3 pt-2">
              <Button asChild>
                <a href="/heroes">Browse Heroes</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/ascension">Ascension Costs</a>
              </Button>
            </div>
          </div>

          {/* right card / image placeholder (Tailark-like split) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm opacity-80">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="underline" href="/updates">
                  Patch notes
                </a>
              </li>
              <li>
                <a className="underline" href="/guides">
                  Beginner’s guide
                </a>
              </li>
              <li>
                <a className="underline" href="/artifacts">
                  Artifacts overview
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
