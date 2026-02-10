import { ResearchReportCard } from "./research-report-card";

const reports = [
  {
    title: "Monthly Equity Research - Feb 2026",
    excerpt: "Insights into top-performing PSX stocks for February 2026.",
    href: "/insights/psx-monthly-feb-2026",
    date: "Feb 10, 2026",
  },
  {
    title: "Investment Strategy Report",
    excerpt: "Professional guidance to optimize your portfolio.",
    href: "/insights/investment-strategy-2026",
    date: "Jan 25, 2026",
  },
];

export function ResearchReportsSection() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reports.map((report) => (
        <ResearchReportCard key={report.title} {...report} />
      ))}
    </div>
  );
}
