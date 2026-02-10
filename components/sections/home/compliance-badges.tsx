"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";

const badges = [
  { title: "Licensed PSX Broker", logo: "/badges/psx.png" },
  { title: "SECP Compliant", logo: "/badges/secp.png" },
  { title: "Secure Trading", logo: "/badges/secure.png" },
];

export function ComplianceBadges() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <RevealOnScroll direction="up" distance={30}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Compliance & Security
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 px-4">
        {badges.map((badge, index) => (
          <RevealOnScroll key={index} direction="up" distance={20}>
            <HoverGlow className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={badge.logo}
                alt={badge.title}
                className="h-16 sm:h-20 object-contain mb-2"
              />
              <span className="text-sm font-medium text-center">{badge.title}</span>
            </HoverGlow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
