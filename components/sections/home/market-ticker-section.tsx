"use client";

import { useEffect, useState } from "react";
import { CURRENCY } from "@/lib/constants";

type TickerItem = {
  symbol: string;
  price: number;
  change: number; // percentage change
};

const sampleTickers: TickerItem[] = [
  { symbol: "PSX:KSE100", price: 47215.23, change: 0.52 },
  { symbol: "PSX:OGDC", price: 92.1, change: -0.12 },
  { symbol: "PSX:HBL", price: 155.7, change: 0.33 },
  { symbol: "PSX:UBL", price: 131.2, change: -0.21 },
  { symbol: "PSX:MCB", price: 178.6, change: 0.45 },
];

export function MarketTickerSection() {
  const [tickers, setTickers] = useState<TickerItem[]>(sampleTickers);

  // Simulate live updates (demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => ({
          ...t,
          price: +(t.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
          change: +(Math.random() - 0.5).toFixed(2),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-muted py-4">
      <div className="container flex overflow-x-auto gap-8 whitespace-nowrap">
        {tickers.map((t) => (
          <div
            key={t.symbol}
            className="flex min-w-[140px] items-center gap-2 rounded border px-3 py-2 bg-background text-sm font-medium"
          >
            <span className="font-semibold">{t.symbol}</span>
            <span>
              {CURRENCY.SYMBOL}
              {t.price.toLocaleString()}
            </span>
            <span
              className={
                t.change >= 0 ? "text-green-600" : "text-red-600"
              }
            >
              {t.change >= 0 ? "+" : ""}
              {t.change}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
