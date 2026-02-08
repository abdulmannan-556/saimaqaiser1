import { REGULATORS, DISCLAIMERS, BUSINESS_HOURS } from "@/lib/constants";

export function ComplianceSection(): JSX.Element {
  return (
    <section className="bg-muted/30">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Compliance & Risk Disclosure
          </h2>
          <p className="mt-4 text-muted-foreground">
            SAIMA QAISER SECURITIES (PVT) LIMITED operates under the
            strict guidelines of the Pakistan Stock Exchange and the
            Securities and Exchange Commission of Pakistan (SECP).
          </p>
        </div>

        {/* Regulatory Info */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-lg font-semibold">Regulators</h3>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside">
              <li>{REGULATORS.PSX}</li>
              <li>{REGULATORS.SECP}</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {BUSINESS_HOURS.WEEKDAYS} <br />
              {BUSINESS_HOURS.HOURS}
            </p>
            <p className="mt-2 text-xs text-muted-foreground italic">
              {BUSINESS_HOURS.MARKET_NOTE}
            </p>
          </div>

          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-lg font-semibold">Risk Disclosure</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {DISCLAIMERS.GENERAL}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
