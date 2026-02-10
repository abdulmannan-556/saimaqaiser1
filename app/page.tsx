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

export const metadata = createMetadata({
  title: "Home",
  description: siteConfig.description,
});

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <MainNavbar />

      <main className="relative">
        <HeroSection />
        <MarketTickerSection />
        <ServicesOverview />
        <ServicesOverview /> {/* optional duplicate if needed */}
        <StatisticsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <InsightsPreviewSection />
        <ResearchPreview />
        <PartnerLogos />
        <ComplianceBadges />
        <CtaSection />
        <CtaAccountOpen />
      </main>

      <Footer />
    </>
  );
}
