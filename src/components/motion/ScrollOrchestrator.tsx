"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMotion } from "./GlobalMotionProvider";

interface ScrollOrchestratorProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function ScrollOrchestrator({
  children,
  className = "",
  intensity = 1,
}: ScrollOrchestratorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const motion = useMotion();

  useEffect(() => {
    if (motion.reducedMotion) {
      setIsVisible(true);
      setProgress(1);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [motion.reducedMotion]);

  useEffect(() => {
    if (motion.reducedMotion || !isVisible) return;

    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;

          const enterProgress = Math.min(1, Math.max(0, (vh - elementTop) / (vh * 0.6)));
          const exitProgress = Math.min(
            1,
            Math.max(0, (vh + elementHeight - elementTop) / (vh * 0.6)),
          );

          setProgress(Math.min(enterProgress, exitProgress));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isVisible, motion.reducedMotion]);

  const eased = easeOutCubic(Math.min(1, Math.max(0, progress)));
  const blur = (1 - eased) * 4 * intensity;
  const translateY = (1 - eased) * 30 * intensity;
  const scale = 0.98 + eased * 0.02;
  const opacity = 0.3 + eased * 0.7;

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        filter: blur > 0.1 ? `blur(${blur}px)` : undefined,
        opacity,
        willChange: "transform, opacity, filter",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
