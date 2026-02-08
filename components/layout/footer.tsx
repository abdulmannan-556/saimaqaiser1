import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">
            {siteConfig.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Licensed Pakistan Stock Exchange broker providing secure,
            transparent, and professional trading services.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2">
            {navigation.footer.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Compliance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>SECP Regulated</li>
            <li>PSX Member</li>
            <li>Risk Disclosure</li>
            <li>KYC / AML Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-muted-foreground">
            Market investments are subject to risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
