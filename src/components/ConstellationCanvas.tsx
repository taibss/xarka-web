"use client";

import { useEffect, useRef } from "react";

interface ConstellationCanvasProps {
  sparse?: boolean;
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function ConstellationCanvas({ sparse = false }: ConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const pts: Point[] = [];
    let N = 0;
    let animId: number;

    function newPt(anywhere: boolean): Point {
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : Math.random() < 0.5 ? -10 : H + 10,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6,
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      N = Math.min(sparse ? 60 : 88, Math.floor(W / (sparse ? 24 : 17)));
      if (pts.length === 0) {
        for (let i = 0; i < N; i++) pts.push(newPt(true));
      }
    }

    function tick() {
      const cx = W * 0.72;
      const cy = H * 0.46;
      ctx!.clearRect(0, 0, W, H);

      // Draw central hexagon (homepage only)
      if (!sparse) {
        ctx!.strokeStyle = "rgba(192,103,43,.5)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        for (let a = 0; a < 6; a++) {
          const ang = (Math.PI / 3) * a - Math.PI / 6;
          const hx = cx + Math.cos(ang) * 46;
          const hy = cy + Math.sin(ang) * 46;
          if (a === 0) {
            ctx!.moveTo(hx, hy);
          } else {
            ctx!.lineTo(hx, hy);
          }
        }
        ctx!.closePath();
        ctx!.stroke();
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // Attract toward center hexagon (homepage only)
        if (!sparse) {
          const dx = cx - p.x;
          const dy = cy - p.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          p.vx += (dx / d) * 0.0012;
          p.vy += (dy / d) * 0.0012;
          if (d < 52) {
            pts[i] = newPt(false);
            continue;
          }
        }

        p.vx *= 0.999;
        p.vy *= 0.999;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap sparse particles
        if (sparse) {
          if (p.x < -20) p.x = W + 10;
          if (p.x > W + 20) p.x = -10;
          if (p.y < -20) p.y = H + 10;
          if (p.y > H + 20) p.y = -10;
        }

        // Draw particle (fade distant particles)
        const distFromCenter = Math.sqrt(
          (p.x - cx) * (p.x - cx) + (p.y - cy) * (p.y - cy),
        );
        const maxDist = Math.sqrt(W * W + H * H) * 0.5;
        const distFactor = Math.max(0.45, 1 - (distFromCenter / maxDist) * 0.55);
        ctx!.fillStyle = `rgba(147,167,183,${(0.75 * distFactor).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();

        // Draw connections between nearby particles
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const dd = ddx * ddx + ddy * ddy;
          if (dd < 8100) {
            ctx!.strokeStyle = `rgba(83,110,134,${(0.4 * (1 - dd / 8100)).toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        // Draw lines to center hexagon (homepage only)
        if (!sparse) {
          const dx = cx - p.x;
          const dy = cy - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 240) {
            ctx!.strokeStyle = `rgba(192,103,43,${(0.28 * (1 - d / 240)).toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(cx, cy);
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [sparse]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
