"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number; // pixels
  duration?: number; // ms
};

export function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  distance = 30,
  duration = 700,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const transformMap: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? "translateX(0) translateY(0)" : transformMap[direction],
        opacity: visible ? 1 : 0,
        transition: `all ${duration}ms ease-out`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
