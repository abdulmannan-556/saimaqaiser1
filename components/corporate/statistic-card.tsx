"use client";

type StatisticCardProps = {
  label: string;
  value: number;
};

export const statisticCardData: StatisticCardProps[] = [
  { label: "Clients Served", value: 1200 },
  { label: "Trades Executed", value: 35000 },
  { label: "Years in Market", value: 15 },
  { label: "Investment Advisory Projects", value: 250 },
];

export function StatisticCard({ label, value }: StatisticCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border p-6 bg-card text-card-foreground hover:shadow-lg transition hover:scale-105">
      <span className="text-3xl font-bold">{value.toLocaleString()}</span>
      <span className="mt-2 text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
