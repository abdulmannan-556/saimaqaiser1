interface TestimonialItem {
  name: string;
  role: string;
  feedback: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Ahmed R.",
    role: "Retail Investor",
    feedback:
      "SAIMA QAISER SECURITIES provides a professional trading experience with reliable execution and helpful support whenever needed.",
  },
  {
    name: "Sara K.",
    role: "Long-term Investor",
    feedback:
      "Their research insights and disciplined approach helped me make more informed investment decisions in volatile markets.",
  },
  {
    name: "Usman A.",
    role: "Corporate Client",
    feedback:
      "We value their transparency, compliance standards, and professional handling of our corporate trading requirements.",
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
            We build long-term relationships by focusing on trust,
            transparency, and consistent service quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border bg-card p-6 transition hover:shadow-md"
            >
              <p className="text-sm text-muted-foreground italic">
                “{testimonial.feedback}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">
                  {testimonial.name}
                </p>
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
