"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const childrenArray = stagger > 0 ? findDirectChildren(children) : null;

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--stagger": `${stagger}ms` } as React.CSSProperties}
    >
      {childrenArray
        ? childrenArray.map((child, i) => (
            <div
              key={i}
              className="scroll-reveal-child"
              style={{
                transitionDelay: visible
                  ? `calc(var(--stagger, 0ms) * ${i})`
                  : "0ms",
              }}
            >
              <div
                className={`transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-[0.98]"
                }`}
              >
                {child}
              </div>
            </div>
          ))
        : childrenArray === null && (
            <div
              className={`flex flex-1 flex-col transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
            >
              {children}
            </div>
          )}
    </div>
  );
}

function findDirectChildren(node: ReactNode): ReactNode[] | null {
  if (!node || typeof node !== "object") return null;
  if (Array.isArray(node)) {
    const childArray = node.filter(Boolean);
    return childArray.length > 1 ? childArray : null;
  }
  const el = node as { props?: { children?: ReactNode } };
  if (el.props?.children) {
    const kids = Array.isArray(el.props.children)
      ? el.props.children.filter(Boolean)
      : [el.props.children];
    return kids.length > 1 ? kids : null;
  }
  return null;
}
