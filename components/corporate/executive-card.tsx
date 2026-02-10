import { ExecutiveCard } from "./executive-card";

const executives = [
  {
    name: "Saima Qaiser",
    position: "CEO",
    photo: "/executives/saima-qaiser.jpg",
    linkedin: "https://www.linkedin.com/in/saima-qaiser",
  },
  {
    name: "Ali Raza",
    position: "CFO",
    photo: "/executives/ali-raza.jpg",
    linkedin: "https://www.linkedin.com/in/ali-raza",
  },
];

export function ExecutiveSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Our Leadership</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <ExecutiveCard key={exec.name} {...exec} />
          ))}
        </div>
      </div>
    </section>
  );
}
