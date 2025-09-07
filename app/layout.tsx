import type { Metadata } from "next";
import "./globals.css";
import Year from "@/components/others/year";
import SiteNavbar from "@/components/core/SiteNavbar";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        <SiteNavbar />
        <main className="pt-12 md:pt-16">{children}</main>
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs opacity-70">
            © <Year /> BlackDeck WiKi — Community project.
          </div>
        </footer>
      </body>
    </html>
  );
}
