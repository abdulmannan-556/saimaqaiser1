"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live clock (Pakistan Standard Time)
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Karachi",
      };
      setCurrentTime(new Date().toLocaleTimeString("en-PK", options));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "w-full transition-all duration-300 text-sm px-4 py-1 bg-primary text-white flex justify-center items-center gap-8",
        scrolled && "shadow-md"
      )}
    >
      <span>Market Hours: 09:30 AM - 03:30 PM PKT</span>
      <span>Current Time: {currentTime}</span>
      <span>Call Us: +92 21 0000000</span>
      <span>Email: info@saimaqaisersecurities.com</span>
    </div>
  );
}
