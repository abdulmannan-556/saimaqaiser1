"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-background py-20 sm:py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          SAIMA QAISER SECURITIES (PVT) LIMITED
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Licensed Pakistan Stock Exchange broker providing equity trading, online trading,
          investment advisory, and market research services.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/accounts/open-account">Open an Account</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Optional Image / Illustration */}
        <div className="mt-12 w-full max-w-4xl">
          <img
            src="/images/hero-finance.svg"
            alt="Stock trading illustration"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
