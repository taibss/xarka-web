"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import { useMotion } from "./GlobalMotionProvider";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const motion = useMotion();

  const handleMouseMove = useCallback(() => {
    if (motion.reducedMotion || !hovered) return;
    setOffset({
      x: motion.mouse.nx * 12 * strength,
      y: motion.mouse.ny * 8 * strength,
    });
  }, [motion.mouse.nx, motion.mouse.ny, motion.reducedMotion, hovered, strength]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${hovered ? 1.03 : 1})`,
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      };

  const content = (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-sm"
          style={{
            boxShadow: "0 0 24px 4px rgba(192, 103, 43, 0.15)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="relative inline-block">
        {content}
      </a>
    );
  }

  return content;
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className = "", intensity = 1 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const motion = useMotion();

  const handleMouseMove = useCallback(() => {
    if (motion.reducedMotion || !hovered || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (motion.mouse.x - centerX) / (rect.width / 2);
    const dy = (motion.mouse.y - centerY) / (rect.height / 2);
    setTilt({ x: -dy * 4 * intensity, y: dx * 4 * intensity });
  }, [motion.mouse.x, motion.mouse.y, motion.reducedMotion, hovered, intensity]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: hovered
          ? "transform 0.1s ease-out"
          : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
