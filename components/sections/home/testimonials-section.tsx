"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";
import { TestimonialCard } from "@/components/corporate/testimonial-card";

const testimonials = [
  {
    name: "Ahmed Khan",
    position: "Investor",
    feedback:
      "SAIMA QAISER SECURITIES has transformed my trading experience. Professional and reliable.",
    avatar: "/avatars/ahmed.jpg",
  },
  {
    name: "Sara Ali",
    position: "Trader",
    feedback:
      "The online trading platform is seamless and the market insights are extremely helpful.",
    avatar: "/avatars/sara.jpg",
  },
  {
    name: "Usman Shah",
    position: "Investor",
    feedback:
      "Excellent support team and compliance standards. Highly recommend their services.",
    avatar: "/avatars/usman.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Testimonials
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={index} direction="up" distance={30}>
            <HoverGlow className="rounded-lg p-6 shadow-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300">
              <TestimonialCard
                name={testimonial.name}
                position={testimonial.position}
                feedback={testimonial.feedback}
                avatar={testimonial.avatar}
              />
            </HoverGlow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
