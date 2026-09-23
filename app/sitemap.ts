import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23");

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: new URL("/support", SITE_URL).toString(), lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: new URL("/privacy", SITE_URL).toString(), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
