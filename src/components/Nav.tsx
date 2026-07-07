import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "./Container";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    ["Platform", "/platform"],
    ["Solutions", "/solutions"],
    ["LawgicHub", "/lawgichub"],
    ["Resources", "/resources"],
    ["Company", "/company"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-ink text-paper font-serif text-sm">X</span>
          <span className="font-semibold tracking-tight text-ink">Xarka</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-steel md:flex">
          {navLinks.map(([label, href]) => (
            <Link key={label} to={href} className="hover:text-ink transition-colors">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-copper px-4 py-2 text-sm font-medium text-paper hover:bg-copper-deep transition-colors"
          >
            Book a briefing <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>
      {mobileOpen && (
        <div className="border-t border-hairline bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-steel">
            {navLinks.map(([label, href]) => (
              <Link key={label} to={href} onClick={() => setMobileOpen(false)} className="hover:text-ink transition-colors">
                {label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-sm bg-copper px-4 py-2 text-sm font-medium text-paper hover:bg-copper-deep transition-colors">
              Book a briefing <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
