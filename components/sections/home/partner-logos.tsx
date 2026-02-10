"use client";

import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { HoverGlow } from "@/components/animations/hover-glow";

const partners = [
  { name: "PSX", logo: "/logos/psx.png" },
  { name: "Karachi Stock Exchange", logo: "/logos/kse.png" },
  { name: "Bloomberg", logo: "/logos/bloomberg.png" },
  { name: "Reuters", logo: "/logos/reuters.png" },
];

export function PartnerLogos() {
  return (
    <section className="py-20 bg-gray-50">
      <RevealOnScroll direction="up" distance={40}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Partners
        </h2>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 px-4">
        {partners.map((partner, index) => (
          <RevealOnScroll key={index} direction="up" distance={20}>
            <HoverGlow className="flex items-center justify-center p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 sm:h-16 object-contain"
              />
            </HoverGlow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
