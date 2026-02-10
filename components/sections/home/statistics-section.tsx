"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { NumberCounter } from "@/components/animations/number-counter";
import { StatisticCard } from "@/components/corporate/statistic-card";

const statistics = [
  { label: "Clients", value: 500, icon: "👥" },
  { label: "Trades", value: 1200, icon: "💹" },
  { label: "Awards", value: 50, icon: "🏆" },
  { label: "Research Reports", value: 200, icon: "📊" },
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-white">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {statistics.map((stat, index) => (
          <RevealOnScroll key={index} direction="up" distance={20}>
            <StatisticCard
              icon={stat.icon}
              label={stat.label}
              value={<NumberCounter start={0} end={stat.value} duration={2000} />}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
