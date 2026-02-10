import { HeroSection } from "@/components/sections/home/hero-section";
import { MarketTickerSection } from "@/components/sections/home/market-ticker-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";
import { StatisticsSection } from "@/components/sections/home/statistics-section";
import { InsightsPreviewSection } from "@/components/sections/home/insights-preview-section";
import { ComplianceSection } from "@/components/sections/home/compliance-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Market Snapshot / Ticker */}
      <MarketTickerSection />

      {/* Services Overview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Company Statistics */}
      <StatisticsSection />

      {/* Research & Insights Preview */}
      <InsightsPreviewSection />

      {/* Compliance & Risk Disclosure */}
      <ComplianceSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/*
        Upcoming (final) section:
        - Strong CTA (Open Trading Account)
      */}
    </main>
  );
}
