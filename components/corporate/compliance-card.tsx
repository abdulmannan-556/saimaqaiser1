"use client";

type ComplianceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ComplianceCard({ title, description, icon }: ComplianceCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg border p-6 bg-card text-card-foreground transition hover:shadow-lg hover:scale-105">
      <img src={icon} alt={title} className="h-12 w-12 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
