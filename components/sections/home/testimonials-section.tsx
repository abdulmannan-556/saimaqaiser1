interface TestimonialItem {
  name: string;
  role: string;
  message: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Ahmed R.",
    role: "Individual Investor",
    message:
      "SAIMA QAISER SECURITIES has provided me with reliable execution and professional guidance. Their research helped me navigate volatile market conditions with confidence.",
  },
  {
    name: "Fatima K.",
    role: "Long-term Investor",
    message:
      "Their transparent operations and responsive support team make them stand out among brokerage firms. I feel secure trading through their platform.",
  },
  {
    name: "Usman A.",
    role: "Active Trader",
    message:
      "Fast trade execution, clear communication, and strong market insights. A trustworthy brokerage firm that understands the needs of serious traders.",
  },
];

export function TestimonialsSection(): JSX.Element {
  return (
    <section className="bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            We value long-term relationships built on trust,
            transparency, and consistent performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border bg-card p-6 transition hover:shadow-md"
            >
              <p className="text-sm text-muted-foreground">
                “{testimonial.message}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
