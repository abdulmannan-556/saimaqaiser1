"use client";

import { siteConfig } from "@/lib/site-config";
import { TRADING_HOURS } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden w-full border-b bg-muted text-sm text-muted-foreground md:block">
      <div className="container flex h-10 items-center justify-between">
        {/* Left: Market Info */}
        <div className="flex items-center gap-4">
          <span className="font-medium text-foreground">
            PSX Trading Hours:
          </span>
          <span>{TRADING_HOURS.REGULAR}</span>
          <span className="hidden lg:inline">
            ({TRADING_HOURS.DAYS})
          </span>
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-foreground transition-colors"
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hover:text-foreground transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
