"use client";

import { useEffect, useState } from "react";

type NumberCounterProps = {
  from?: number;
  to: number;
  duration?: number; // in ms
  className?: string;
};

export function NumberCounter({ from = 0, to, duration = 2000, className = "" }: NumberCounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration / 50); // update every 50ms

    const interval = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= to) || (increment < 0 && start <= to)) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <span className={className}>{count.toLocaleString()}</span>;
}
