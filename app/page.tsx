import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import { ScrollProgress } from "@/components/layout/scroll-progress";
import { MainNavbar } from "@/components/layout/main-navbar";
import { Footer } from "@/components/layout/footer";

import {
  HeroSection,
  ServicesOverview,
  StatisticsSection,
  WhyChooseUsSection,
  MarketTickerSection,
  TestimonialsSection,
  InsightsPreviewSection,
  CtaSection,
  CtaAccountOpen,
  PartnerLogos,
  ResearchPreview,
  ComplianceBadges,
} from "@/components/sections/home";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";
import { NumberCounter } from "@/components/animations/number-counter";

export const metadata = createMetadata({
  title: "Home",
  description: siteConfig.description,
});

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <MainNavbar />

      <main className="relative space-y-20">
        {/* Hero Section */}
        <RevealOnScroll direction="up" distance={50}>
          <HeroSection />
        </RevealOnScroll>

        {/* Market Ticker */}
        <RevealOnScroll direction="up" distance={30}>
          <MarketTickerSection />
        </RevealOnScroll>

        {/* Services Overview with hover glow */}
        <RevealOnScroll direction="up" distance={30}>
          <HoverGlow>
            <ServicesOverview />
          </HoverGlow>
        </RevealOnScroll>

        {/* Statistics Section with Number Counters */}
        <RevealOnScroll direction="up" distance={30}>
          <StatisticsSection>
            <NumberCounter start={0} end={500} duration={2000} label="Clients" />
            <NumberCounter start={0} end={1200} duration={2000} label="Trades" />
            <NumberCounter start={0} end={100} duration={2000} label="Awards" />
          </StatisticsSection>
        </RevealOnScroll>

        {/* Why Choose Us */}
        <RevealOnScroll direction="up" distance={30}>
          <WhyChooseUsSection />
        </RevealOnScroll>

        {/* Testimonials */}
        <RevealOnScroll direction="up" distance={30}>
          <TestimonialsSection />
        </RevealOnScroll>

        {/* Insights Preview */}
        <RevealOnScroll direction="up" distance={30}>
          <InsightsPreviewSection />
        </RevealOnScroll>

        {/* Research Preview */}
        <RevealOnScroll direction="up" distance={30}>
          <ResearchPreview />
        </RevealOnScroll>

        {/* Partner Logos */}
        <RevealOnScroll direction="up" distance={30}>
          <PartnerLogos />
        </RevealOnScroll>

        {/* Compliance Badges */}
        <RevealOnScroll direction="up" distance={30}>
          <ComplianceBadges />
        </RevealOnScroll>

        {/* CTAs */}
        <RevealOnScroll direction="up" distance={30}>
          <CtaSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" distance={30}>
          <CtaAccountOpen />
        </RevealOnScroll>
      </main>

      <Footer />
    </>
  );
}
