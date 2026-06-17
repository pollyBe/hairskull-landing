export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://pollybe.github.io/hairskull-landing",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
