import { HeroSection } from "@/components/sections/home/hero-section";
import { MarketTickerSection } from "@/components/sections/home/market-ticker-section";
import { ServicesSection } from "@/components/sections/home/services-section";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Market Snapshot / Ticker */}
      <MarketTickerSection />

      {/* Services Overview */}
      <ServicesSection />

      {/*
        Upcoming sections (planned order):
        - Why Choose Us
        - Company Statistics
        - Research Preview
        - Compliance Section
        - Testimonials
        - Strong CTA
      */}
    </main>
  );
}
