"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

interface MotionState {
  mouse: { x: number; y: number; nx: number; ny: number };
  mouseVelocity: { x: number; y: number };
  scroll: { y: number; progress: number; velocity: number };
  viewport: { w: number; h: number; isMobile: boolean };
  activeSection: number;
  intensity: number;
  reducedMotion: boolean;
  time: number;
}

const defaultState: MotionState = {
  mouse: { x: 0, y: 0, nx: 0, ny: 0 },
  mouseVelocity: { x: 0, y: 0 },
  scroll: { y: 0, progress: 0, velocity: 0 },
  viewport: { w: 0, h: 0, isMobile: false },
  activeSection: 0,
  intensity: 1,
  reducedMotion: false,
  time: 0,
};

const MotionContext = createContext<MotionState>(defaultState);

export function useMotion() {
  return useContext(MotionContext);
}

export function useSpringValue(target: number, stiffness = 120, damping = 20) {
  const value = useRef(target);
  const velocity = useRef(0);
  const [output, setOutput] = useState(target);
  const ticking = useRef(false);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      const force = (target - value.current) * stiffness;
      velocity.current = (velocity.current + force / 60) * (1 - damping / 60);
      value.current += velocity.current / 60;
      if (Math.abs(velocity.current) > 0.01 || Math.abs(target - value.current) > 0.01) {
        setOutput(value.current);
        raf = requestAnimationFrame(tick);
      } else {
        value.current = target;
        velocity.current = 0;
        setOutput(target);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, stiffness, damping]);

  return output;
}

export function GlobalMotionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MotionState>(defaultState);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, time: 0 });
  const scrollRef = useRef({ y: 0, prevY: 0, velocity: 0, time: 0 });
  const rafRef = useRef<number>(0);
  const initialized = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setState((s) => ({ ...s, reducedMotion: true }));
      return;
    }

    const update = () => {
      const now = performance.now();
      const dt = Math.max(now - (mouseRef.current.time || now), 1) / 1000;
      mouseRef.current.time = now;

      const scrollDt = Math.max(now - (scrollRef.current.time || now), 1) / 1000;
      scrollRef.current.time = now;

      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrollProgress = scrollMax > 0 ? scrollY / scrollMax : 0;

      const rawVelY = (scrollY - scrollRef.current.prevY) / scrollDt;
      scrollRef.current.velocity = scrollRef.current.velocity * 0.85 + rawVelY * 0.15;
      scrollRef.current.prevY = scrollY;

      const mouseVelX = (mouseRef.current.x - mouseRef.current.prevX) / dt;
      const mouseVelY = (mouseRef.current.y - mouseRef.current.prevY) / dt;
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;

      const w = window.innerWidth;
      const h = window.innerHeight;

      setState((s) => ({
        ...s,
        mouse: {
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          nx: w > 0 ? (mouseRef.current.x / w) * 2 - 1 : 0,
          ny: h > 0 ? (mouseRef.current.y / h) * 2 - 1 : 0,
        },
        mouseVelocity: {
          x: mouseVelX * 0.1,
          y: mouseVelY * 0.1,
        },
        scroll: {
          y: scrollY,
          progress: scrollProgress,
          velocity: scrollRef.current.velocity,
        },
        viewport: {
          w,
          h,
          isMobile: w < 768,
        },
        time: now,
      }));

      rafRef.current = requestAnimationFrame(update);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    if (!initialized.current) {
      mouseRef.current.time = performance.now();
      scrollRef.current.time = performance.now();
      initialized.current = true;
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <MotionContext.Provider value={state}>{children}</MotionContext.Provider>;
}
