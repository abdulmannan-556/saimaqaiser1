import { OfficeCard } from "./office-card";

const offices = [
  {
    city: "Karachi",
    address: "123 Stock Exchange Rd, Karachi",
    phone: "+92 21 1234 5678",
    email: "karachi@saimaqaiser.com",
  },
  {
    city: "Lahore",
    address: "456 Finance Ave, Lahore",
    phone: "+92 42 2345 6789",
    email: "lahore@saimaqaiser.com",
  },
];

export function OfficesSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Our Offices</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <OfficeCard key={office.city} {...office} />
          ))}
        </div>
      </div>
    </section>
  );
}
