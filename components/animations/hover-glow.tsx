"use client";

import { ReactNode } from "react";

type HoverGlowProps = {
  children: ReactNode;
  className?: string;
};

export function HoverGlow({ children, className = "" }: HoverGlowProps) {
  return (
    <div
      className={`${className} transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/40 rounded-lg`}
    >
      {children}
    </div>
  );
}
