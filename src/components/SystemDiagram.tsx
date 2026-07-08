"use client";

import { useEffect, useRef, useState } from "react";

export function SystemDiagram() {
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
      style={{ "--len": 900 } as React.CSSProperties}
      role="img"
      aria-label="Diagram: scattered data sources — cameras, sensors, documents, ERP systems and workflows — converge into one Xarka intelligence, which produces foresight, vision testing and human-approved action"
    >
      <svg viewBox="0 0 1120 360" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-full">
        <g fontFamily="IBM Plex Mono, SF Mono, Menlo, monospace" fontSize="13" letterSpacing="1">
          {/* Source boxes */}
          <g stroke="#33546f" strokeWidth="1">
            <rect x="20" y="28" width="190" height="44" />
            <rect x="20" y="92" width="190" height="44" />
            <rect x="20" y="156" width="190" height="44" />
            <rect x="20" y="220" width="190" height="44" />
            <rect x="20" y="284" width="190" height="44" />
          </g>
          {/* Source labels */}
          <g fill="#b9c9d6">
            <text x="40" y="55">
              CAMERAS
            </text>
            <text x="40" y="119">
              SENSORS · IOT
            </text>
            <text x="40" y="183">
              DOCUMENTS
            </text>
            <text x="40" y="247">
              ERP · CRM · APPS
            </text>
            <text x="40" y="311">
              WORKFLOWS
            </text>
          </g>
          {/* Curved paths from sources to hex */}
          <g stroke="#33546f" strokeWidth="1" opacity=".8">
            <path d="M210 50  C 330 50, 380 150, 470 168" />
            <path d="M210 114 C 320 114, 380 160, 470 174" />
            <path d="M210 178 C 320 178, 380 180, 470 180" />
            <path d="M210 242 C 320 242, 380 200, 470 186" />
            <path d="M210 306 C 330 306, 380 210, 470 192" />
          </g>
          {/* Central hexagonal node */}
          <g>
            <polygon
              points="560,84 646,132 646,228 560,276 474,228 474,132"
              stroke="#c0672b"
              strokeWidth="1.5"
            />
            <polygon
              points="560,116 618,148 618,212 560,244 502,212 502,148"
              stroke="#33546f"
              strokeWidth="1"
            />
            <text x="560" y="172" fill="#ffffff" textAnchor="middle" fontSize="14" fontWeight="600">
              ONE
            </text>
            <text x="560" y="192" fill="#ffffff" textAnchor="middle" fontSize="14" fontWeight="600">
              INTELLIGENCE
            </text>
            <text x="560" y="300" fill="#c0672b" textAnchor="middle" fontSize="11">
              LIVING DIGITAL TWIN · SOVEREIGN · ON-PREM
            </text>
          </g>
          {/* Curved paths from hex to outputs */}
          <g stroke="#33546f" strokeWidth="1" opacity=".8">
            <path d="M650 168 C 740 150, 790 76,  910 76" />
            <path d="M650 180 C 740 180, 790 180, 910 180" />
            <path d="M650 192 C 740 210, 790 284, 910 284" />
          </g>
          {/* Output boxes */}
          <g stroke="#c0672b" strokeWidth="1">
            <rect x="910" y="54" width="190" height="44" />
            <rect x="910" y="158" width="190" height="44" />
            <rect x="910" y="262" width="190" height="44" />
          </g>
          {/* Output labels */}
          <g fill="#ffffff">
            <text x="930" y="81">
              FORESIGHT
            </text>
            <text x="930" y="185">
              VISION, TESTED
            </text>
            <text x="930" y="289">
              HUMAN-LED ACTION
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
