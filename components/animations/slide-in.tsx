"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type SlideInProps = {
  children: ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
};

export function SlideIn({ children, from = "bottom", className = "" }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const directions: Record<string, string> = {
    left: "-translate-x-10",
    right: "translate-x-10",
    top: "-translate-y-10",
    bottom: "translate-y-10",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : `${directions[from]} opacity-0`
      }`}
    >
      {children}
    </div>
  );
}
