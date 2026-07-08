"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const LAYERS = [
  {
    name: "Data Sources",
    items: "Documents · CCTV · ERP · Sensors · Drawings · APIs",
  },
  {
    name: "Understanding",
    items: "OCR · Vision · Retrieval · Knowledge Graphs · Semantic Search",
  },
  {
    name: "Reasoning",
    items: "LLMs · Agents · Rules · Decision Support · Human Review",
  },
  {
    name: "Prediction",
    items: "Forecasting · Optimization · Digital Twins · Risk Models",
  },
  {
    name: "Action",
    items: "Dashboards · Alerts · Reports · Workflows · APIs · Automation",
  },
];

export function PlatformTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [activeLayer, setActiveLayer] = useState(-1);
  const [pulseActive, setPulseActive] = useState(false);

  // Sequential activation
  useEffect(() => {
    if (!isInView) {
      setActiveLayer(-1);
      setPulseActive(false);
      return;
    }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setActiveLayer(LAYERS.length - 1);
      return;
    }

    let idx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const activate = () => {
      if (idx >= LAYERS.length) {
        setTimeout(() => setPulseActive(true), 600);
        return;
      }
      setActiveLayer(idx);
      idx++;
      timeout = setTimeout(activate, 400);
    };

    timeout = setTimeout(activate, 300);
    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="rounded-sm border border-white/10 bg-white/[0.03] p-6 md:p-10"
    >
      <div className="space-y-3">
        {LAYERS.map((l, i) => {
          const isActive = i <= activeLayer;
          return (
            <div key={l.name} className="group">
              <motion.div
                className="grid grid-cols-[1fr_2fr] items-center gap-4 rounded-sm border border-white/10 bg-white/[0.05] px-4 py-4 transition-colors hover:border-copper card-hover md:gap-8 md:px-6"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="label-mono w-6 text-copper">0{i + 1}</span>
                  <span className="font-serif text-lg text-white md:text-xl">{l.name}</span>
                </div>
                <div className="text-xs text-white/50 md:text-sm font-mono">{l.items}</div>
              </motion.div>
              {i < LAYERS.length - 1 && (
                <div className="my-1 flex justify-start pl-6">
                  <motion.span
                    className="text-copper"
                    aria-hidden
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↓
                  </motion.span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Continuous pulse overlay */}
      {pulseActive && (
        <motion.div
          className="pointer-events-none relative -mt-[420px] mb-[420px] mx-auto w-px"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(192,103,43,0.3), transparent)",
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 0.6, 0], height: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}
