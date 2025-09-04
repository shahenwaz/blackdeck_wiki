import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Tailark-like hero block (free pattern: split card) */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/5">
          <CardContent className="p-6">
            <h1 className="text-3xl font-semibold">BlackDeck WiKi</h1>
            <p className="text-sm mt-2 opacity-80">
              Clean facts, fast browsing, and practical builds for heroes,
              units, sets & more.
            </p>
            <div className="mt-5 flex gap-3">
              <Button asChild>
                <a href="/heroes">Browse Heroes</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/ascension">Ascension Costs</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium">Latest</h2>
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
