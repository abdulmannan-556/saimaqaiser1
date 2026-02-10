"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaAccountOpen() {
  return (
    <section className="bg-secondary text-white py-20 sm:py-28">
      <div className="container mx-auto text-center px-4">
        <RevealOnScroll direction="up" distance={30}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Account Today
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Opening your account with SAIMA QAISER SECURITIES (PVT) LIMITED is quick, secure, and fully compliant. Take the first step toward smarter investments.
          </p>
          <Link href="/accounts/open-account">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100"
            >
              Open Account Now
            </Button>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
