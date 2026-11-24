import type { MetadataRoute } from "next";

import { hasPortfolio } from "@/constants/navigation";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/education",
    ...(hasPortfolio ? ["/portfolio"] : []),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
