"use client";

import { testimonialCardData, TestimonialCard } from "@/components/corporate/testimonial-card";

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Hear from our valued clients who trust us for secure and professional trading services.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialCardData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              message={testimonial.message}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
