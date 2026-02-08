import Link from "next/link";

interface InsightItem {
  title: string;
  excerpt: string;
  date: string;
  href: string;
}

const INSIGHTS: InsightItem[] = [
  {
    title: "Weekly Market Outlook",
    excerpt:
      "An overview of market trends, sector performance, and key levels to watch in the upcoming trading week.",
    date: "Jan 15, 2026",
    href: "/insights/weekly-market-outlook",
  },
  {
    title: "KSE-100 Technical Analysis",
    excerpt:
      "Technical view of the KSE-100 index highlighting support, resistance, and momentum indicators.",
    date: "Jan 12, 2026",
    href: "/insights/kse-100-technical-analysis",
  },
  {
    title: "Investor Guide: Managing Market Volatility",
    excerpt:
      "Key strategies investors can use to manage risk and remain disciplined during volatile market conditions.",
    date: "Jan 08, 2026",
    href: "/insights/managing-market-volatility",
  },
];

export function InsightsPreviewSection(): JSX.Element {
  return (
    <section className="bg-muted/30">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Market Insights & Research
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stay informed with our latest market research, technical
              analysis, and investor education insights prepared by
              experienced professionals.
            </p>
          </div>

          <Link
            href="/insights"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all insights →
          </Link>
        </div>

        {/* Insights Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <Link
              key={insight.title}
              href={insight.href}
              className="group rounded-xl border bg-background p-6 transition hover:shadow-md"
            >
              <div className="flex h-full flex-col">
                <p className="text-xs text-muted-foreground">
                  {insight.date}
                </p>

                <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-primary">
                  {insight.title}
                </h3>

                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {insight.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
