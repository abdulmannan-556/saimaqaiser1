interface StatisticItem {
  label: string;
  value: string;
  description: string;
}

const STATISTICS: StatisticItem[] = [
  {
    label: "Years of Experience",
    value: "15+",
    description:
      "Serving investors with professional brokerage services in Pakistan.",
  },
  {
    label: "Active Clients",
    value: "5,000+",
    description:
      "Retail and institutional clients trading with confidence.",
  },
  {
    label: "Trades Executed",
    value: "1M+",
    description:
      "Successful trades executed across Pakistan Stock Exchange.",
  },
  {
    label: "Market Coverage",
    value: "100%",
    description:
      "Full coverage of PSX-listed equities and market segments.",
  },
];

export function StatisticsSection(): JSX.Element {
  return (
    <section className="bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Our Track Record
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our performance and experience reflect our commitment to
            transparency, compliance, and long-term client success.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATISTICS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-6 text-center transition hover:shadow-md"
            >
              <p className="text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
