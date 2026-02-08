import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">PSX Registered Broker</Badge>
              <Badge variant="secondary">SECP Compliant</Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Your Trusted Partner in the{" "}
              <span className="text-primary">Pakistan Stock Exchange</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-muted-foreground md:text-lg">
              SAIMA QAISER SECURITIES (PVT) LIMITED provides secure, transparent,
              and professional brokerage services backed by deep market
              expertise and strict regulatory compliance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/accounts/open-account">
                  Open Trading Account
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust Information */}
            <div className="flex flex-wrap gap-8 pt-6">
              <TrustItem label="Regulated By" value="SECP" />
              <TrustItem label="Exchange" value="PSX" />
              <TrustItem label="Specialization" value="Equity Trading" />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />
            <div className="relative rounded-2xl border bg-card p-6 shadow-lg">
              <div className="space-y-4">
                <div className="h-4 w-1/3 rounded bg-muted" />
                <div className="h-24 rounded bg-muted" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-12 rounded bg-muted" />
                  <div className="h-12 rounded bg-muted" />
                  <div className="h-12 rounded bg-muted" />
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Market data shown for illustration purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TrustItemProps {
  label: string;
  value: string;
}

function TrustItem({ label, value }: TrustItemProps): JSX.Element {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
