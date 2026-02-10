"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";
import { ResearchReportCard } from "@/components/finance/research-report-card";

const insights = [
  {
    title: "Pakistan Stock Market Update",
    summary: "An overview of today's market movements and top performers.",
    link: "/insights/psx-market-update",
  },
  {
    title: "Investment Strategies for 2026",
    summary: "Key strategies for growing your portfolio in the current market.",
    link: "/insights/investment-strategies-2026",
  },
  {
    title: "Equity Research Insights",
    summary: "In-depth analysis of selected equities on the Pakistan Stock Exchange.",
    link: "/insights/equity-research",
  },
];

export function InsightsPreviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Market Insights
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {insights.map((insight, index) => (
          <RevealOnScroll key={index} direction="up" distance={30}>
            <HoverGlow className="rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <ResearchReportCard
                title={insight.title}
                summary={insight.summary}
                link={insight.link}
              />
            </HoverGlow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
