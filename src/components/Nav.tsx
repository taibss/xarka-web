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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/xarka-icon-logo.png" alt="Xarka" className="h-7 w-7 rounded-sm" />
          <span className="font-semibold tracking-tight text-paper">Xarka</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-paper/60 md:flex">
          {navLinks.map(([label, href]) => (
            <Link key={label} to={href} className="hover:text-paper transition-colors">
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
            <svg className="h-5 w-5 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-paper/60">
            {navLinks.map(([label, href]) => (
              <Link key={label} to={href} onClick={() => setMobileOpen(false)} className="hover:text-paper transition-colors">
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
