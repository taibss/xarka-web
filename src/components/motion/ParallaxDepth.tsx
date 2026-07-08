"use client";

import { useRef, type ReactNode } from "react";
import { useMotion, useSpringValue } from "./GlobalMotionProvider";

interface ParallaxDepthProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  mouseInfluence?: number;
  scrollInfluence?: number;
}

export function ParallaxDepth({
  children,
  className = "",
  depth = 0.5,
  mouseInfluence = 1,
  scrollInfluence = 1,
}: ParallaxDepthProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motion = useMotion();

  const factor = depth * mouseInfluence;
  const scrollFactor = depth * scrollInfluence * 0.3;

  const x = useSpringValue(motion.mouse.nx * 20 * factor, 100, 22);
  const y = useSpringValue(
    motion.mouse.ny * 12 * factor - motion.scroll.y * scrollFactor * 0.1,
    100,
    22,
  );

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `translate3d(${x}px, ${y}px, ${depth * -100}px)`,
        willChange: "transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className = "", speed = 0.15 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motion = useMotion();

  const yOffset = useSpringValue(-motion.scroll.y * speed, 60, 18);

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `translate3d(0, ${yOffset}px, 0)`,
        willChange: "transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
