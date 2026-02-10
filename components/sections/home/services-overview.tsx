"use client";

import { serviceCardData } from "@/components/corporate/service-card";
import { ServiceCard } from "@/components/corporate/service-card";

export function ServicesOverview() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Comprehensive Pakistan Stock Exchange brokerage solutions for
          trading, investment, and market research.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCardData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
