import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://leewilliams.digital ";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...projects,
  ];
}
