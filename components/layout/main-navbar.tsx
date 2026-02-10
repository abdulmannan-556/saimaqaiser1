"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNavigation, NavItem } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { TopBar } from "@/components/layout/top-bar";
import { MobileMenu } from "@/components/layout/mobile-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-shadow",
        isScrolled && "shadow-sm"
      )}
    >
      <TopBar />

      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {mainNavigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.title} item={item} />
              ) : (
                <NavLink key={item.title} item={item} />
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/accounts/open-account">Open Account</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}

/* ================================
   Sub Components
   ================================ */

function NavLink({ item }: { item: NavItem }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm font-medium">
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[420px] gap-3 p-4 md:grid-cols-2">
          {item.children?.map((child) => (
            <li key={child.title}>
              <NavigationMenuLink asChild>
                <Link
                  href={child.href}
                  className="block rounded-md p-3 hover:bg-muted transition-colors"
                >
                  <div className="text-sm font-semibold">
                    {child.title}
                  </div>
                  {child.description && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {child.description}
                    </p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
