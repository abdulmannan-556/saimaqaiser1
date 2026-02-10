import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { DISCLAIMER_TEXT } from "@/lib/constants";
import { mainNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-12">
        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {siteConfig.shortName}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.address.registeredOffice}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Regulatory
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.regulatory.psx}</li>
              <li>{siteConfig.regulatory.secp}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Disclaimers */}
        <div className="space-y-2 text-xs text-muted-foreground">
          <p>{DISCLAIMER_TEXT.INVESTMENT}</p>
          <p>{DISCLAIMER_TEXT.ADVISORY}</p>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/compliance/kyc">KYC Policy</Link>
            <Link href="/compliance/risk-disclosure">
              Risk Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
