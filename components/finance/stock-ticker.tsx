"use client";

import { useEffect, useState } from "react";

type Stock = {
  symbol: string;
  price: number;
  change: number; // in %
};

const initialStocks: Stock[] = [
  { symbol: "KSE-100", price: 47215, change: 0.52 },
  { symbol: "OGDC", price: 92.1, change: -0.12 },
  { symbol: "HBL", price: 155.7, change: 0.33 },
  { symbol: "UBL", price: 131.2, change: -0.21 },
];

export function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(initialStocks);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((s) => ({
          ...s,
          price: +(s.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
          change: +(Math.random() - 0.5).toFixed(2),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto whitespace-nowrap bg-muted py-4 px-2 flex gap-6">
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className="flex flex-col items-center justify-center min-w-[140px] border rounded px-3 py-2 bg-background"
        >
          <span className="font-semibold">{stock.symbol}</span>
          <span>{stock.price.toLocaleString()}</span>
          <span
            className={stock.change >= 0 ? "text-green-600" : "text-red-600"}
          >
            {stock.change >= 0 ? "+" : ""}
            {stock.change}%
          </span>
        </div>
      ))}
    </div>
  );
}
