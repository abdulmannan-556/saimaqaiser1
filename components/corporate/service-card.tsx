"use client";

import { cn } from "@/lib/utils";

export const serviceCardData = [
  {
    title: "Equity Trading",
    description: "Trade PSX-listed stocks securely online.",
    icon: "/icons/equity.svg",
  },
  {
    title: "Online Trading",
    description: "Access our trading platform from anywhere.",
    icon: "/icons/online-trading.svg",
  },
  {
    title: "Investment Advisory",
    description: "Professional guidance for your investments.",
    icon: "/icons/advisory.svg",
  },
  {
    title: "Market Research",
    description: "Insightful reports and analysis for informed decisions.",
    icon: "/icons/research.svg",
  },
];

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg border p-6 text-center transition hover:shadow-lg hover:scale-105",
        "bg-card text-card-foreground"
      )}
    >
      <img src={icon} alt={title} className="h-12 w-12 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
