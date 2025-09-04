import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
// (optional) We'll use this below if you want a client-safe year
import Year from "@/components/others/year";

export const metadata: Metadata = {
  title: "BlackDeck WiKi",
  description: "Fast, clean, and accurate wiki for Black Deck players",
  metadataBase: new URL("https://blackdeck-wiki.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
            <Link className="font-semibold tracking-wide" href="/">
              BlackDeck WiKi
            </Link>
            <nav className="text-sm flex gap-4">
              <Link href="/heroes">Heroes</Link>
              <Link href="/units">Units</Link>
              <Link href="/artifacts">Artifacts</Link>
              <Link href="/ascension">Ascension</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/guides">Guides</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs opacity-70">
            © <Year /> BlackDeck WiKi — Community project.
          </div>
        </footer>
      </body>
    </html>
  );
}
