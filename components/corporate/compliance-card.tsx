import { ComplianceCard } from "./compliance-card";

const complianceList = [
  {
    title: "PSX Licensed",
    description: "Authorized by Pakistan Stock Exchange for brokerage services.",
    icon: "/logos/psx.png",
  },
  {
    title: "SECP Regulated",
    description: "Registered with the Securities and Exchange Commission of Pakistan.",
    icon: "/logos/secp.png",
  },
];

export function ComplianceSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {complianceList.map((item) => (
        <ComplianceCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
