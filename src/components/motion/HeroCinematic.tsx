"use client";

import { useRef, type ReactNode } from "react";
import { useMotion, useSpringValue } from "./GlobalMotionProvider";

interface HeroCinematicProps {
  children: ReactNode;
  className?: string;
}

export function HeroCinematic({ children, className = "" }: HeroCinematicProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motion = useMotion();

  const parallaxX = useSpringValue(motion.mouse.nx * 8, 80, 25);
  const parallaxY = useSpringValue(motion.mouse.ny * 5, 80, 25);
  const depthScale = useSpringValue(1 + motion.scroll.velocity * -0.0001, 100, 20);

  const scrollFade = Math.max(0, 1 - motion.scroll.y / (motion.viewport.h * 0.6));
  const scrollBlur = Math.min(4, motion.scroll.y / 200);

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) scale(${Math.min(1.02, depthScale)})`,
        filter: scrollBlur > 0.5 ? `blur(${scrollBlur}px)` : undefined,
        opacity: scrollFade,
        willChange: "transform, opacity, filter",
      };

  return (
    <div ref={ref} className={`relative ${className}`} style={style}>
      {children}
    </div>
  );
}

interface GlowOrbProps {
  x: string;
  y: string;
  size?: number;
  color?: string;
  speed?: number;
}

export function GlowOrb({
  x,
  y,
  size = 300,
  color = "rgba(192, 103, 43, 0.06)",
  speed = 1,
}: GlowOrbProps) {
  const motion = useMotion();

  if (motion.reducedMotion) return null;

  const offsetX = motion.mouse.nx * 30 * speed;
  const offsetY = motion.mouse.ny * 20 * speed;
  const pulse = Math.sin(motion.time * 0.001 * speed) * 0.3 + 0.7;

  return (
    <div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: `translate(-50%, -50%) translate3d(${offsetX}px, ${offsetY}px, 0)`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: pulse,
        willChange: "transform",
        filter: "blur(40px)",
      }}
    />
  );
}
