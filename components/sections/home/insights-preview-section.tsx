"use client";

import Link from "next/link";
import { insightsData } from "@/content/insights";

export function InsightsPreviewSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">
          Market Insights
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          Stay informed with our latest market updates, analysis, and reports.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.slice(0, 3).map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="block rounded-lg border p-6 bg-card text-card-foreground hover:shadow-lg transition hover:scale-105"
            >
              <h3 className="text-lg font-semibold">{insight.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {insight.excerpt}
              </p>
              <span className="mt-4 inline-block text-xs text-primary font-medium">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
