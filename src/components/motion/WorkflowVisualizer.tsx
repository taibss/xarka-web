"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "./GlobalMotionProvider";

interface WorkflowVisualizerProps {
  className?: string;
}

export function WorkflowVisualizer({ className = "" }: WorkflowVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState(-1);
  const motion = useMotion();

  const nodePositions = [
    { x: 0.1, y: 0.5, label: "Observe" },
    { x: 0.28, y: 0.35, label: "Understand" },
    { x: 0.46, y: 0.55, label: "Reason" },
    { x: 0.64, y: 0.4, label: "Predict" },
    { x: 0.82, y: 0.5, label: "Act" },
    { x: 0.95, y: 0.5, label: "Learn" },
  ];

  useEffect(() => {
    if (motion.reducedMotion) {
      setActiveNode(5);
      return;
    }

    const el = canvasRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let node = 0;
          const interval = setInterval(() => {
            setActiveNode(node);
            node++;
            if (node > 5) {
              clearInterval(interval);
            }
          }, 400);
          observer.unobserve(el);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [motion.reducedMotion]);

  useEffect(() => {
    if (motion.reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId: number;

    interface FlowParticle {
      progress: number;
      speed: number;
      pathIndex: number;
      alpha: number;
      size: number;
    }

    const flowParticles: FlowParticle[] = [];
    const nodePos = [
      { x: 0.1, y: 0.5 },
      { x: 0.28, y: 0.35 },
      { x: 0.46, y: 0.55 },
      { x: 0.64, y: 0.4 },
      { x: 0.82, y: 0.5 },
      { x: 0.95, y: 0.5 },
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getPointOnPath(pathIndex: number, t: number): { x: number; y: number } {
      const from = nodePositions[pathIndex];
      const to = nodePositions[pathIndex + 1];
      if (!from || !to) return { x: 0, y: 0 };

      const x = from.x + (to.x - from.x) * t;
      const midY = (from.y + to.y) / 2 + Math.sin(t * Math.PI) * -0.08;
      const y = from.y + (to.y - from.y) * t + (midY - (from.y + to.y) / 2) * Math.sin(t * Math.PI);
      return { x: x * W, y: y * H };
    }

    function spawnParticle() {
      if (flowParticles.length > 20) return;
      flowParticles.push({
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        pathIndex: Math.floor(Math.random() * 5),
        alpha: 0.4 + Math.random() * 0.4,
        size: 1.5 + Math.random() * 1.5,
      });
    }

    let time = 0;

    function draw() {
      time = performance.now();
      ctx!.clearRect(0, 0, W, H);

      ctx!.lineWidth = 1;
      for (let i = 0; i < nodePositions.length - 1; i++) {
        const from = nodePositions[i];
        const to = nodePositions[i + 1];
        const active = i < activeNode;
        const current = i === activeNode;

        ctx!.strokeStyle = active
          ? "rgba(192, 103, 43, 0.5)"
          : current
            ? "rgba(192, 103, 43, 0.3)"
            : "rgba(51, 84, 111, 0.15)";

        ctx!.beginPath();
        ctx!.moveTo(from.x * W, from.y * H);
        const cpx = ((from.x + to.x) / 2) * W;
        const cpy = ((from.y + to.y) / 2 - 0.08) * H;
        ctx!.quadraticCurveTo(cpx, cpy, to.x * W, to.y * H);
        ctx!.stroke();
      }

      for (let i = 0; i < nodePositions.length; i++) {
        const n = nodePositions[i];
        const active = i <= activeNode;
        const pulse = Math.sin(time * 0.003 + i) * 0.5 + 0.5;

        if (active) {
          ctx!.fillStyle = `rgba(192, 103, 43, ${0.08 + pulse * 0.06})`;
          ctx!.beginPath();
          ctx!.arc(n.x * W, n.y * H, 16 + pulse * 4, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.fillStyle = active ? "rgba(192, 103, 43, 1)" : "rgba(51, 84, 111, 0.4)";
        ctx!.beginPath();
        ctx!.arc(n.x * W, n.y * H, active ? 5 : 3, 0, Math.PI * 2);
        ctx!.fill();

        if (active) {
          ctx!.strokeStyle = "rgba(192, 103, 43, 0.3)";
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.arc(n.x * W, n.y * H, 8, 0, Math.PI * 2);
          ctx!.stroke();
        }
      }

      if (time % 200 < 20) spawnParticle();

      for (let i = flowParticles.length - 1; i >= 0; i--) {
        const p = flowParticles[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          p.pathIndex++;
          p.progress = 0;
          if (p.pathIndex >= nodePositions.length - 1) {
            flowParticles.splice(i, 1);
            continue;
          }
        }

        const pos = getPointOnPath(p.pathIndex, p.progress);
        ctx!.fillStyle = `rgba(192, 103, 43, ${p.alpha * (1 - p.progress * 0.3)})`;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [activeNode, motion.reducedMotion]);

  if (motion.reducedMotion) {
    return (
      <div className={`relative ${className}`}>
        <svg viewBox="0 0 1000 300" className="w-full" fill="none">
          {nodePositions.map((n, i) => (
            <g key={i}>
              {i < nodePositions.length - 1 && (
                <line
                  x1={n.x * 1000}
                  y1={n.y * 300}
                  x2={nodePositions[i + 1].x * 1000}
                  y2={nodePositions[i + 1].y * 300}
                  stroke="rgba(192, 103, 43, 0.5)"
                  strokeWidth="1"
                />
              )}
              <circle cx={n.x * 1000} cy={n.y * 300} r="5" fill="rgba(192, 103, 43, 1)" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0">
        {nodePositions.map((n, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 text-center"
            style={{
              left: `${n.x * 100}%`,
              top: `${n.y * 100 + 5}%`,
              opacity: i <= activeNode ? 1 : 0.3,
              transition: "opacity 0.5s ease",
            }}
          >
            <div className="label-mono text-[10px] text-copper">{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
