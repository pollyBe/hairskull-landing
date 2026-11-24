import type { Metadata } from "next";

import { site } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: `/${string}`;
  robots?: Metadata["robots"];
}

/**
 * Next.js replaces nested objects like `openGraph` instead of merging them,
 * so every page builds the full set here to keep siteName, locale, etc.
 */
export function pageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots,
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
