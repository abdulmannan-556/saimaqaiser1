"use client";

import { featureCardData, FeatureCard } from "@/components/corporate/feature-card";

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Why Choose SAIMA QAISER SECURITIES
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Trusted by investors across Pakistan for secure, compliant, and professional trading services.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureCardData.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
