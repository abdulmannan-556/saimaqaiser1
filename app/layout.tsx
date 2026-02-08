import "@/app/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "SAIMA QAISER SECURITIES (PVT) LIMITED",
  description:
    "Licensed PSX Broker providing secure, transparent, and professional trading services in Pakistan.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
