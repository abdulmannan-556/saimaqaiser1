"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary/5 py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Ready to Start Trading?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Open an account with SAIMA QAISER SECURITIES today and access Pakistan Stock Exchange with confidence.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/accounts/open-account">Open Account</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
