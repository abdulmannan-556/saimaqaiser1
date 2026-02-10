"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { FeatureCard } from "@/components/corporate/feature-card";

const features = [
  {
    title: "Trusted PSX Broker",
    description: "Licensed and compliant with Pakistan Stock Exchange regulations.",
    icon: "✅",
  },
  {
    title: "Expert Analysts",
    description: "Receive insights and recommendations from seasoned professionals.",
    icon: "📊",
  },
  {
    title: "Secure Trading",
    description: "Advanced encryption and security protocols protect your investments.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available for all your trading queries.",
    icon: "☎️",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {features.map((feature, index) => (
          <RevealOnScroll key={index} direction="up" distance={30}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
