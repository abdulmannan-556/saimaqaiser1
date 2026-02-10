"use client";

const badges = [
  { name: "PSX Licensed", logo: "/logos/psx.png" },
  { name: "SECP Regulated", logo: "/logos/secp.png" },
  { name: "ISO Certified", logo: "/logos/iso.png" },
];

export function ComplianceBadges() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">
          Our Regulatory Credentials
        </h3>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          We are fully licensed and regulated by the relevant authorities in Pakistan.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center justify-center w-32 h-20"
            >
              <img
                src={badge.logo}
                alt={badge.name}
                className="h-full object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
