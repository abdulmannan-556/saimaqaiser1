"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";

const researchReports = [
  {
    title: "Monthly Equity Research - Feb 2026",
    excerpt: "Insights into the top-performing PSX stocks for February 2026.",
    href: "/insights/psx-monthly-feb-2026",
  },
  {
    title: "Investment Strategy Report",
    excerpt: "Professional guidance to optimize investment portfolios.",
    href: "/insights/investment-strategy-2026",
  },
  {
    title: "Market Outlook Q1 2026",
    excerpt: "Forecasts and analysis of market trends in Q1 2026.",
    href: "/insights/market-outlook-q1-2026",
  },
];

export function ResearchPreview() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container mx-auto">
        <RevealOnScroll direction="up" distance={30}>
          <h2 className="text-3xl font-bold text-center sm:text-4xl">
            Research Reports
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            Access our latest research reports to make informed investment decisions.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {researchReports.map((report) => (
            <RevealOnScroll key={report.title} direction="up" distance={20}>
              <HoverGlow className="block rounded-lg border p-6 bg-card text-card-foreground hover:shadow-lg hover:scale-105 transition transform duration-300">
                <Link href={report.href} className="block">
                  <h3 className="text-lg font-semibold">{report.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{report.excerpt}</p>
                  <span className="mt-4 inline-block text-xs text-primary font-medium">
                    Read More →
                  </span>
                </Link>
              </HoverGlow>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
