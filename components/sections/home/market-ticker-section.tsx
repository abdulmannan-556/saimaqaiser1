import { MARKET_STATUS, DISCLAIMERS } from "@/lib/constants";

interface MarketIndex {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const MARKET_INDICES: MarketIndex[] = [
  {
    name: "KSE-100",
    value: "78,450.32",
    change: "+245.18 (0.31%)",
    isPositive: true,
  },
  {
    name: "KSE-30",
    value: "26,210.44",
    change: "-58.72 (0.22%)",
    isPositive: false,
  },
  {
    name: "All Share",
    value: "52,110.90",
    change: "+102.40 (0.20%)",
    isPositive: true,
  },
];

export function MarketTickerSection(): JSX.Element {
  const marketStatus = MARKET_STATUS.OPEN;

  return (
    <section className="border-y bg-muted/30">
      <div className="container py-10">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Market Snapshot
            </h2>
            <p className="text-sm text-muted-foreground">
              Pakistan Stock Exchange overview
            </p>
          </div>

          {/* Market Status */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              Market Status:
            </span>
            <span
              className={`font-semibold ${
                marketStatus === MARKET_STATUS.OPEN
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}
            >
              {marketStatus === MARKET_STATUS.OPEN
                ? "Open"
                : "Closed"}
            </span>
          </div>
        </div>

        {/* Indices */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKET_INDICES.map((index) => (
            <div
              key={index.name}
              className="rounded-lg border bg-background p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{index.name}</h3>
                <span
                  className={`text-sm font-semibold ${
                    index.isPositive
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {index.isPositive ? "▲" : "▼"}
                </span>
              </div>

              <div className="mt-3">
                <p className="text-2xl font-bold">
                  {index.value}
                </p>
                <p
                  className={`text-sm ${
                    index.isPositive
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {index.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-muted-foreground">
          {DISCLAIMERS.MARKET_DATA}
        </p>
      </div>
    </section>
  );
}
