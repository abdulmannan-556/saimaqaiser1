"use client";

export const featureCardData = [
  {
    title: "Licensed & Compliant",
    description: "Fully licensed by SECP and PSX with strict regulatory adherence.",
    icon: "/icons/compliance.svg",
  },
  {
    title: "Professional Advisory",
    description: "Expert investment advisory for all types of investors.",
    icon: "/icons/advisory.svg",
  },
  {
    title: "Secure Trading",
    description: "Robust online trading platform with end-to-end security.",
    icon: "/icons/security.svg",
  },
];

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg border p-6 bg-card text-card-foreground transition hover:shadow-lg hover:scale-105">
      <img src={icon} alt={title} className="h-12 w-12 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
