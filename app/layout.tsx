import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SAIMA QAISER SECURITIES (PVT) LIMITED",
    template: "%s | SAIMA QAISER SECURITIES",
  },
  description:
    "SAIMA QAISER SECURITIES (PVT) LIMITED is a licensed Pakistan Stock Exchange broker providing equity trading, investment advisory, and market research services.",
  keywords: [
    "Pakistan Stock Exchange Broker",
    "PSX Broker",
    "Equity Trading Pakistan",
    "Investment Advisory",
    "Stock Brokerage Firm",
    "SAIMA QAISER SECURITIES",
  ],
  authors: [{ name: "SAIMA QAISER SECURITIES (PVT) LIMITED" }],
  creator: "SAIMA QAISER SECURITIES (PVT) LIMITED",
  metadataBase: new URL("https://www.saimaqaisersecurities.com"),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.saimaqaisersecurities.com",
    title: "SAIMA QAISER SECURITIES (PVT) LIMITED",
    description:
      "Licensed PSX broker offering secure, compliant, and professional financial services in Pakistan.",
    siteName: "SAIMA QAISER SECURITIES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
