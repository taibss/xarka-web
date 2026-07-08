"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMotion } from "./GlobalMotionProvider";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  variant?: "mask" | "blur" | "fade" | "words";
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  stagger = 60,
  variant = "mask",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const motion = useMotion();

  useEffect(() => {
    if (motion.reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, motion.reducedMotion]);

  if (variant === "words" && typeof children === "string") {
    const words = children.split(" ");
    return (
      // @ts-expect-error Tag is a valid HTML tag
      <Tag ref={ref} className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{
              transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * stagger}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * stagger}ms, filter 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * stagger}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(100%)",
              filter: visible ? "blur(0px)" : "blur(8px)",
            }}
          >
            <span className="inline-block">{word}</span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </Tag>
    );
  }

  const baseTransition = `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

  const variants: Record<string, React.CSSProperties> = {
    mask: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      clipPath: visible ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
    },
    blur: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      filter: visible ? "blur(0px)" : "blur(12px)",
    },
    fade: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
    },
  };

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : { ...variants[variant], transition: baseTransition };

  return (
    // @ts-expect-error Tag is a valid HTML tag
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

interface ParagraphRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ParagraphReveal({ children, className = "", delay = 100 }: ParagraphRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  const motion = useMotion();

  useEffect(() => {
    if (motion.reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, motion.reducedMotion]);

  const style: React.CSSProperties = motion.reducedMotion
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      };

  return (
    <p ref={ref} className={className} style={style}>
      {children}
    </p>
  );
}
