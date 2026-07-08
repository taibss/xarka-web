"use client";

import { useEffect, useRef, useState } from "react";

export function useParallax(offset = 20) {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    function onScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const el = ref.current;
          if (!el) { ticking.current = false; return; }
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          if (rect.bottom < 0 || rect.top > vh) {
            ticking.current = false;
            return;
          }
          const progress = (vh - rect.top) / (vh + rect.height);
          setTranslate((progress - 0.5) * offset);
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return { ref, style: { transform: `translateY(${translate}px)` } };
}
