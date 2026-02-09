import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start Trading with Confidence
          </h2>

          <p className="mt-4 text-primary-foreground/90">
            Open your trading account with SAIMA QAISER SECURITIES (PVT)
            LIMITED and gain access to professional brokerage services,
            real-time market execution, and expert support.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link href="/open-account">
                Open Trading Account
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-primary"
            >
              <Link href="/contact">
                Speak to an Advisor
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-primary-foreground/80">
            * Trading in securities involves market risk. Please read
            all risk disclosures carefully before investing.
          </p>
        </div>
      </div>
    </section>
  );
}
