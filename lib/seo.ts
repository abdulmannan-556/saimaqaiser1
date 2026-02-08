import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
}

/**
 * Generates consistent metadata for all pages.
 * Designed for Next.js 13 App Router.
 */
export function generateMetadata({
  title,
  description,
  path = "",
}: SeoOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.name;

  const fullDescription = description ?? siteConfig.description;

  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
