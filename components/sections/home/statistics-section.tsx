"use client";

import { statisticCardData } from "@/components/corporate/statistic-card";
import { StatisticCard } from "@/components/corporate/statistic-card";

export function StatisticsSection() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Our Achievements
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Trusted by thousands of investors across Pakistan, delivering secure and compliant trading services.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statisticCardData.map((stat) => (
            <StatisticCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
