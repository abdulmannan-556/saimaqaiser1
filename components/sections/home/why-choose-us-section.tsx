interface ReasonItem {
  title: string;
  description: string;
}

const REASONS: ReasonItem[] = [
  {
    title: "PSX Registered Broker",
    description:
      "We are a registered member of the Pakistan Stock Exchange, operating under strict exchange regulations.",
  },
  {
    title: "SECP Compliant",
    description:
      "Fully compliant with Securities and Exchange Commission of Pakistan regulations, ensuring transparency and investor protection.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of seasoned market professionals with deep understanding of Pakistan’s equity markets.",
  },
  {
    title: "Secure & Transparent Operations",
    description:
      "Client assets, transactions, and data are handled with the highest standards of security and transparency.",
  },
];

export function WhyChooseUsSection(): JSX.Element {
  return (
    <section className="bg-muted/30">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose SAIMA QAISER SECURITIES
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choosing the right brokerage partner is critical. We combine
            regulatory compliance, market expertise, and client-focused
            services to help you trade with confidence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border bg-background p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
