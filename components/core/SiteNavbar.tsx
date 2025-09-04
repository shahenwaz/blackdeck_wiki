"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:hsl(var(--background))]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-6">
        <Link className="font-semibold tracking-wide" href="/">
          BlackDeck WiKi
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[color:hsl(var(--background))]/95">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/90"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
