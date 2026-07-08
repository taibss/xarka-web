"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  progress: number;
  sx: number;
  sy: number;
  ex: number;
  ey: number;
  mx: number;
  my: number;
}

export function SystemDiagramAnimated() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [drawn, setDrawn] = useState(false);
  const [activeInputIdx, setActiveInputIdx] = useState(-1);
  const [activeOutputIdx, setActiveOutputIdx] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const particleIdRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  // Line-draw trigger (original behavior)
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

  // Spawn particle along a path
  const spawnParticle = (sx: number, sy: number, ex: number, ey: number) => {
    const id = particleIdRef.current++;
    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2 - Math.abs(ex - sx) * 0.15;
    particlesRef.current.push({ id, progress: 0, sx, sy, ex, ey, mx, my });
  };

  // Canvas render loop for particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (timestamp: number) => {
      const dt = lastTimeRef.current ? (timestamp - lastTimeRef.current) / 1000 : 0.016;
      lastTimeRef.current = timestamp;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      }
      ctx.clearRect(0, 0, rect.width, rect.height);

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReduced) {
        particlesRef.current = particlesRef.current.filter((p) => {
          p.progress += dt * 1.0;
          if (p.progress >= 1) return false;
          const t = p.progress;
          const x = (1 - t) * (1 - t) * p.sx + 2 * (1 - t) * t * p.mx + t * t * p.ex;
          const y = (1 - t) * (1 - t) * p.sy + 2 * (1 - t) * t * p.my + t * t * p.ey;

          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
          gradient.addColorStop(0, "rgba(192, 103, 43, 0.8)");
          gradient.addColorStop(0.5, "rgba(192, 103, 43, 0.3)");
          gradient.addColorStop(1, "rgba(192, 103, 43, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#c0672b";
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          return true;
        });
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Animation orchestrator — sequential activation
  useEffect(() => {
    if (!isInView || !drawn) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let timeout: ReturnType<typeof setTimeout>;
    let inputIdx = 0;
    let outputIdx = 0;

    // Input path endpoints (matching original SVG coordinates)
    const inputPaths = [
      { sx: 210, sy: 50, ex: 470, ey: 168 },
      { sx: 210, sy: 114, ex: 470, ey: 174 },
      { sx: 210, sy: 178, ex: 470, ey: 180 },
      { sx: 210, sy: 242, ex: 470, ey: 186 },
      { sx: 210, sy: 306, ex: 470, ey: 192 },
    ];
    // Output path endpoints
    const outputPaths = [
      { sx: 650, sy: 168, ex: 910, ey: 76 },
      { sx: 650, sy: 180, ex: 910, ey: 180 },
      { sx: 650, sy: 192, ex: 910, ey: 284 },
    ];

    const activateNextInput = () => {
      if (inputIdx >= inputPaths.length) {
        setIsProcessing(true);
        timeout = setTimeout(() => {
          setIsProcessing(false);
          activateNextOutput();
        }, 1000);
        return;
      }
      setActiveInputIdx(inputIdx);
      const p = inputPaths[inputIdx];
      spawnParticle(p.sx, p.sy, p.ex, p.ey);
      inputIdx++;
      timeout = setTimeout(activateNextInput, 250);
    };

    const activateNextOutput = () => {
      if (outputIdx >= outputPaths.length) {
        timeout = setTimeout(() => {
          setActiveInputIdx(-1);
          setActiveOutputIdx(-1);
          inputIdx = 0;
          outputIdx = 0;
          timeout = setTimeout(activateNextInput, 300);
        }, 1200);
        return;
      }
      setActiveOutputIdx(outputIdx);
      const p = outputPaths[outputIdx];
      spawnParticle(p.sx, p.sy, p.ex, p.ey);
      outputIdx++;
      timeout = setTimeout(activateNextOutput, 250);
    };

    timeout = setTimeout(activateNextInput, 800);
    return () => clearTimeout(timeout);
  }, [isInView, drawn]);

  return (
    <div
      ref={ref}
      className={`draw-svg relative ${drawn ? "draw-in" : ""}`}
      style={{ "--len": 900 } as React.CSSProperties}
      role="img"
      aria-label="Diagram: scattered data sources converge into one Xarka intelligence, which produces foresight, vision testing and human-approved action"
    >
      {/* Canvas overlay for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

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

          {/* Highlight overlays for active input paths */}
          {[0, 1, 2, 3, 4].map((i) => {
            const paths = [
              "M210 50  C 330 50, 380 150, 470 168",
              "M210 114 C 320 114, 380 160, 470 174",
              "M210 178 C 320 178, 380 180, 470 180",
              "M210 242 C 320 242, 380 200, 470 186",
              "M210 306 C 330 306, 380 210, 470 192",
            ];
            const isActive = i <= activeInputIdx;
            return (
              <motion.path
                key={`highlight-in-${i}`}
                d={paths[i]}
                fill="none"
                stroke="#c0672b"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />
            );
          })}

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

            {/* Processing glow */}
            <AnimatePresence>
              {isProcessing && (
                <motion.polygon
                  points="560,84 646,132 646,228 560,276 474,228 474,132"
                  fill="none"
                  stroke="#c0672b"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ pointerEvents: "none" }}
                />
              )}
            </AnimatePresence>
          </g>

          {/* Curved paths from hex to outputs */}
          <g stroke="#33546f" strokeWidth="1" opacity=".8">
            <path d="M650 168 C 740 150, 790 76,  910 76" />
            <path d="M650 180 C 740 180, 790 180, 910 180" />
            <path d="M650 192 C 740 210, 790 284, 910 284" />
          </g>

          {/* Highlight overlays for active output paths */}
          {[0, 1, 2].map((i) => {
            const paths = [
              "M650 168 C 740 150, 790 76, 910 76",
              "M650 180 C 740 180, 790 180, 910 180",
              "M650 192 C 740 210, 790 284, 910 284",
            ];
            const isActive = i <= activeOutputIdx;
            return (
              <motion.path
                key={`highlight-out-${i}`}
                d={paths[i]}
                fill="none"
                stroke="#c0672b"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />
            );
          })}

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
