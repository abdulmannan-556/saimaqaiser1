import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  keywords,
  noIndex = false,
}: SeoProps): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.seo.defaultTitle;

  const metaDescription =
    description ?? siteConfig.seo.defaultDescription;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      locale: "en_PK",
      type: "website",
    },
  };
}
