import { HeroSection } from "@/components/sections/home/hero-section";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/*
        Upcoming sections will be added here in this order:
        - Market Snapshot
        - Services Overview
        - Why Choose Us
        - Statistics
        - Research Preview
        - Compliance
        - Testimonials
        - CTA Section
      */}
    </main>
  );
}
