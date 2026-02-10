"use client";

export const testimonialCardData = [
  {
    name: "Ali Khan",
    position: "Investor",
    company: "Karachi",
    message:
      "Saima Qaiser Securities provides a highly secure and reliable trading platform.",
    avatar: "/avatars/ali-khan.jpg",
  },
  {
    name: "Sara Ahmed",
    position: "Trader",
    company: "Lahore",
    message:
      "Their advisory services helped me make informed investment decisions.",
    avatar: "/avatars/sara-ahmed.jpg",
  },
  {
    name: "Fahad Malik",
    position: "Investor",
    company: "Islamabad",
    message:
      "Professional team and seamless account opening process.",
    avatar: "/avatars/fahad-malik.jpg",
  },
];

type TestimonialCardProps = {
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
};

export function TestimonialCard({
  name,
  position,
  company,
  message,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border p-6 bg-card text-card-foreground transition hover:shadow-lg hover:scale-105">
      <img
        src={avatar}
        alt={name}
        className="h-14 w-14 rounded-full object-cover"
      />
      <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      <h4 className="mt-3 font-semibold">{name}</h4>
      <span className="text-xs text-muted-foreground">
        {position} - {company}
      </span>
    </div>
  );
}
