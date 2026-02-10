"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary text-white py-20 sm:py-28">
      <div className="container mx-auto text-center px-4">
        <RevealOnScroll direction="up" distance={30}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your Investments?
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Open an account with SAIMA QAISER SECURITIES (PVT) LIMITED and start trading with confidence. Our team of experts ensures your investments are secure and compliant.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Open Your Account
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
