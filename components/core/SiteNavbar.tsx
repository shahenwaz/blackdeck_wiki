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
      href={href}
      className={[
        "text-sm transition-colors",
        active
          ? "text-white"
          : "text-white/80 hover:text-[hsl(var(--accent-foreground))]",
      ].join(" ")}
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

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        data-state={open ? "active" : undefined}
        className={[
          "transition-colors duration-150",
          "border-b border-white/20", // darker separator
          scrolled ? "bg-background/55 backdrop-blur-3xl" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative flex h-14 items-center justify-between gap-6">
            {/* Brand */}
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

            {/* Mobile toggle */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden z-50 text-white cursor-pointer hover:text-[hsl(var(--accent-foreground))]"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Drawer + Backdrop (Tailark-style) ===== */}
      {open && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <div className="fixed top-14 left-0 right-0 z-50 px-2 lg:hidden">
            <div className="mx-auto max-w-6xl">
              <div className="rounded-3xl border border-white/12 bg-[hsl(var(--background))]/95 p-6 shadow-2xl">
                <ul className="space-y-6 text-base">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block text-white/90 duration-150 hover:text-[hsl(var(--accent-foreground))]"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
