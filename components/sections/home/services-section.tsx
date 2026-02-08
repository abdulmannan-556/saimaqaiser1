import Link from "next/link";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Equity Trading",
    description:
      "Execute trades on the Pakistan Stock Exchange with speed, transparency, and professional support.",
    href: "/services/equity-trading",
  },
  {
    title: "Online Trading Platform",
    description:
      "Access the market through a reliable and secure online trading platform designed for investors.",
    href: "/services/online-trading",
  },
  {
    title: "Research & Analysis",
    description:
      "In-depth market research, technical analysis, and daily insights to support informed decisions.",
    href: "/services/research",
  },
  {
    title: "Investment Advisory",
    description:
      "Personalized investment advice aligned with your financial goals and risk profile.",
    href: "/services/investment-advisory",
  },
];

export function ServicesSection(): JSX.Element {
  return (
    <section className="bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            SAIMA QAISER SECURITIES (PVT) LIMITED offers a complete
            range of brokerage and investment services backed by
            regulatory compliance and market expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-xl border bg-card p-6 transition hover:shadow-lg"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
