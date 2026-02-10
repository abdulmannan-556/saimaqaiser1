"use client";

type TimelineItem = {
  year: string;
  event: string;
};

const timelineData: TimelineItem[] = [
  { year: "2010", event: "Company founded and licensed as PSX broker." },
  { year: "2012", event: "Launched online trading platform for retail investors." },
  { year: "2015", event: "Reached 5,000 active clients nationwide." },
  { year: "2018", event: "Expanded services to investment advisory and research." },
  { year: "2022", event: "ISO certification for compliance and security." },
];

export function Timeline() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">
          Our Journey
        </h2>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-muted" />
          <div className="flex flex-col space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`flex w-full items-center justify-${index % 2 === 0 ? "start" : "end"}`}
              >
                <div className="w-1/2 px-4 text-${index % 2 === 0 ? "right" : "left"}">
                  <span className="font-semibold text-primary">{item.year}</span>
                  <p className="mt-1 text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
