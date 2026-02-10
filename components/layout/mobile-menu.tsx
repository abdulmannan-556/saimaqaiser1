"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open menu">
            <span className="text-lg font-bold">☰</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] sm:w-[360px]">
          <SheetHeader>
            <SheetTitle>{siteConfig.shortName}</SheetTitle>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-4">
            {mainNavigation.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-foreground hover:text-primary"
                >
                  {item.title}
                </Link>

                {item.children && (
                  <div className="mt-2 ml-3 flex flex-col gap-2 border-l pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8">
            <Button asChild className="w-full">
              <Link
                href="/accounts/open-account"
                onClick={() => setOpen(false)}
              >
                Open Account
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
