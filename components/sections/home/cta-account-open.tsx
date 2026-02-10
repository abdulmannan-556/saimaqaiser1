"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaAccountOpen() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Open Your Trading Account Today
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Start trading on the Pakistan Stock Exchange with a trusted broker. Our account opening process is fast and hassle-free.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link href="/accounts/open-account">Open Account</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
