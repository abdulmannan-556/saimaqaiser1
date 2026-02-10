"use client";

import { HoverGlow } from "@/components/animations/hover-glow";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { FeatureCard } from "@/components/corporate/service-card";

const services = [
  {
    title: "Equity Trading",
    description: "Trade stocks efficiently with real-time data and secure execution.",
    icon: "📈",
  },
  {
    title: "Online Trading",
    description: "Access the market from anywhere with our advanced online platform.",
    icon: "💻",
  },
  {
    title: "Investment Advisory",
    description: "Get professional advice to grow and diversify your portfolio.",
    icon: "🧮",
  },
  {
    title: "Research Reports",
    description: "Detailed market analysis and insights from our expert analysts.",
    icon: "📊",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {services.map((service, index) => (
          <RevealOnScroll key={index} direction="up" distance={30}>
            <HoverGlow className="rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <FeatureCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </HoverGlow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
