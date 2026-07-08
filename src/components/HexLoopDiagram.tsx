"use client";

import { useEffect, useRef, useState } from "react";

export function HexLoopDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`draw-svg ${drawn ? "draw-in" : ""}`}
      style={{ "--len": 1200 } as React.CSSProperties}
      role="img"
      aria-label="Hexagonal loop diagram: Observe, Understand, Reason, Predict, Act, Learn — cycling continuously around a sovereign core"
    >
      <svg
        viewBox="0 0 520 480"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="mx-auto block w-full max-w-[520px]"
      >
        <g fontFamily="IBM Plex Mono, SF Mono, Menlo, monospace" letterSpacing="1.5">
          {/* Outer hexagon */}
          <polygon
            points="260,60 424,155 424,325 260,420 96,325 96,155"
            stroke="#c0672b"
            strokeWidth="1.5"
          />
          {/* Inner hexagon */}
          <polygon
            points="260,140 356,195 356,285 260,340 164,285 164,195"
            stroke="#33546f"
            strokeWidth="1"
            opacity=".7"
          />
          {/* Stage nodes */}
          <g fill="#0b1622" stroke="#c0672b" strokeWidth="1.5">
            <circle cx="260" cy="60" r="7" />
            <circle cx="424" cy="155" r="7" />
            <circle cx="424" cy="325" r="7" />
            <circle cx="260" cy="420" r="7" />
            <circle cx="96" cy="325" r="7" />
            <circle cx="96" cy="155" r="7" />
          </g>
          {/* Flow arrows */}
          <g stroke="#c0672b" strokeWidth="1.2" opacity=".9">
            <path d="M281 70 L 402 141" />
            <path d="M424 178 L 424 302" />
            <path d="M403 339 L 282 409" />
            <path d="M238 409 L 117 339" />
            <path d="M96 302 L 96 178" />
            <path d="M118 141 L 239 70" />
          </g>
          {/* Stage labels */}
          <g fill="#c0672b" fontSize="12" fontWeight="600">
            <text x="260" y="38" textAnchor="middle">
              01 OBSERVE
            </text>
            <text x="438" y="150">
              02 UNDERSTAND
            </text>
            <text x="438" y="336">
              03 REASON
            </text>
            <text x="260" y="450" textAnchor="middle">
              04 PREDICT
            </text>
            <text x="82" y="336" textAnchor="end">
              05 ACT
            </text>
            <text x="82" y="150" textAnchor="end">
              06 LEARN
            </text>
          </g>
          {/* Center label */}
          <g textAnchor="middle">
            <text x="260" y="228" fill="#dce8daff" fontSize="13" fontWeight="600">
              SOVEREIGN CORE
            </text>
            <text x="260" y="248" fill="#33546f" fontSize="11">
              YOUR SERVERS
            </text>
            <text x="260" y="266" fill="#33546f" fontSize="11">
              YOUR DATA · YOUR RULES
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
