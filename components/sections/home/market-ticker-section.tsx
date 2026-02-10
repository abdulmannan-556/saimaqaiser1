"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";
import { useEffect, useState } from "react";

type TickerItem = {
  symbol: string;
  price: number;
  change: number; // percentage change
};

const mockTickerData: TickerItem[] = [
  { symbol: "PSX100", price: 4200, change: 0.45 },
  { symbol: "HBL", price: 150.25, change: -0.32 },
  { symbol: "OGDC", price: 92.5, change: 1.12 },
  { symbol: "UBL", price: 128.8, change: -0.56 },
  { symbol: "MCB", price: 210.4, change: 0.78 },
];

export function MarketTickerSection() {
  const [tickerData, setTickerData] = useState<TickerItem[]>(mockTickerData);

  // Optional: simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData((prev) =>
        prev.map((item) => ({
          ...item,
          price: parseFloat((item.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2)),
          change: parseFloat((Math.random() - 0.5).toFixed(2)),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-6 overflow-hidden">
      <RevealOnScroll direction="up" distance={20}>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Live Market Ticker
        </h2>
      </RevealOnScroll>

      <div className="overflow-x-auto whitespace-nowrap py-2">
        <div className="flex space-x-8 min-w-max px-4 animate-marquee">
          {tickerData.map((item, index) => (
            <HoverGlow
              key={index}
              className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="font-bold">{item.symbol}</span>
              <span>${item.price.toFixed(2)}</span>
              <span
                className={`${
                  item.change >= 0 ? "text-green-400" : "text-red-400"
                } font-medium`}
              >
                {item.change >= 0 ? "+" : ""}
                {item.change.toFixed(2)}%
              </span>
            </HoverGlow>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
