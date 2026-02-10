"use client";

import { useState } from "react";

type Investment = {
  name: string;
  type: string;
  minInvestment: string;
  expectedReturn: string;
};

const investmentsData: Investment[] = [
  { name: "PSX Equity Fund", type: "Equity", minInvestment: "PKR 50,000", expectedReturn: "8-12%" },
  { name: "Government Bonds", type: "Bond", minInvestment: "PKR 25,000", expectedReturn: "5-6%" },
  { name: "Mutual Fund Growth", type: "Mutual Fund", minInvestment: "PKR 100,000", expectedReturn: "10-14%" },
];

export function InvestmentTable() {
  const [investments] = useState<Investment[]>(investmentsData);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">Investment Options</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Minimum Investment</th>
                <th className="px-6 py-3">Expected Return</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((inv) => (
                <tr key={inv.name} className="border-b hover:bg-muted/20 transition">
                  <td className="px-6 py-3">{inv.name}</td>
                  <td className="px-6 py-3">{inv.type}</td>
                  <td className="px-6 py-3">{inv.minInvestment}</td>
                  <td className="px-6 py-3">{inv.expectedReturn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
