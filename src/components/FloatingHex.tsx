"use client";

import { useParallax } from "../hooks/use-parallax";

interface FloatingHexProps {
  speed?: number;
  size?: number;
  className?: string;
}

export function FloatingHex({ speed = 0.25, size = 90, className = "" }: FloatingHexProps) {
  const { ref, style } = useParallax(speed * 100);

  return (
    <div ref={ref} style={style} className={`floating-hex ${className}`} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <polygon
          points="50,6 88,28 88,72 50,94 12,72 12,28"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
