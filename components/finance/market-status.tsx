"use client";

import { useEffect, useState } from "react";

type MarketIndex = {
  name: string;
  value: number;
  change: number;
};

const initialIndices: MarketIndex[] = [
  { name: "KSE-100", value: 47215, change: 0.52 },
  { name: "KSE-30", value: 15045, change: -0.34 },
  { name: "KMI-30", value: 5601, change: 0.12 },
];

export function MarketStatus() {
  const [indices, setIndices] = useState<MarketIndex[]>(initialIndices);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((idx) => ({
          ...idx,
          value: +(idx.value * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
          change: +(Math.random() - 0.5).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto whitespace-nowrap bg-muted py-4 px-2 flex gap-6">
      {indices.map((idx) => (
        <div
          key={idx.name}
          className="flex flex-col items-center justify-center min-w-[140px] border rounded px-3 py-2 bg-background"
        >
          <span className="font-semibold">{idx.name}</span>
          <span>{idx.value.toLocaleString()}</span>
          <span className={idx.change >= 0 ? "text-green-600" : "text-red-600"}>
            {idx.change >= 0 ? "+" : ""}
            {idx.change}%
          </span>
        </div>
      ))}
    </div>
  );
}
