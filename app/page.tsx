import { HeroSection } from "@/components/sections/home/hero-section";
import { MarketTickerSection } from "@/components/sections/home/market-ticker-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";
import { StatisticsSection } from "@/components/sections/home/statistics-section";
import { InsightsPreviewSection } from "@/components/sections/home/insights-preview-section";
import { ComplianceSection } from "@/components/sections/home/compliance-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { CtaSection } from "@/components/sections/home/cta-section";

// Reuse your existing specialized components
import { CtaAccountOpen } from "@/components/sections/home/cta-account-open";
import { PartnerLogos } from "@/components/sections/home/partner-logos";
import { ResearchPreview } from "@/components/sections/home/research-preview";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Partner Logos / Trust Section */}
      <PartnerLogos />

      {/* Market Snapshot / Ticker */}
      <MarketTickerSection />

      {/* Services Overview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Company Statistics */}
      <StatisticsSection />

      {/* Research & Insights Preview */}
      <ResearchPreview />

      {/* Compliance & Risk Disclosure */}
      <ComplianceSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Open Account CTA (existing specialized component) */}
      <CtaAccountOpen />
    </main>
  );
}
