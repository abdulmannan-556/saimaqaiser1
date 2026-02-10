"use client";

const partners = [
  { name: "PSX", logo: "/logos/psx.png" },
  { name: "SECP", logo: "/logos/secp.png" },
  { name: "ABC Bank", logo: "/logos/abc-bank.png" },
  { name: "XYZ Financial", logo: "/logos/xyz-financial.png" },
];

export function PartnerLogos() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Trusted By Our Partners
        </h2>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center w-32 h-20">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
