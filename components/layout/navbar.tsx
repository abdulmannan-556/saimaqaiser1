"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/navigation";

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold tracking-tight">
          SAIMA QAISER
          <span className="text-primary"> SECURITIES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/accounts/open-account">Open Account</Link>
          </Button>

          <button
            aria-label="Toggle Menu"
            className="inline-flex items-center justify-center rounded-md border p-2 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Open Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navigation.main.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <Button asChild>
              <Link href="/accounts/open-account">Open Account</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
