"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/heroes", label: "Heroes" },
  { href: "/units", label: "Units" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/ascension", label: "Ascension" },
  { href: "/updates", label: "Updates" },
  { href: "/guides", label: "Guides" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(href + "/");
  return (
    <Link
      className={`text-sm transition-colors ${
        active ? "text-white" : "text-white/80 hover:text-white"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        data-state={open ? "active" : undefined}
        className={`border-b transition-colors duration-150 ${
          scrolled ? "bg-background/50 backdrop-blur-3xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative flex h-14 items-center justify-between gap-6">
            {/* Brand (left) */}
            <Link
              href="/"
              aria-label="home"
              className="font-semibold tracking-wide"
            >
              BlackDeck WiKi
            </Link>

            {/* Desktop nav (right) */}
            <ul className="hidden gap-6 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink {...l} />
                </li>
              ))}
            </ul>

            {/* Mobile toggle (right) */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile drawer */}
          {open && (
            <div className="lg:hidden border-t border-white/10 bg-background/95">
              <ul className="flex flex-col gap-4 px-4 py-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block text-sm text-white/90"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
