import type { MetadataRoute } from "next";
import {
  DRAWING_SCALE_ARTICLE_DATES,
  DRAWING_SCALE_ARTICLE_URL,
  SITE_URL,
} from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23");
  const articleLastModified =
    DRAWING_SCALE_ARTICLE_DATES.dateModified || DRAWING_SCALE_ARTICLE_DATES.datePublished;

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    // 記事の日付が未設定の間は lastModified を出力しない（lib/site.ts の DRAWING_SCALE_ARTICLE_DATES）。
    {
      url: DRAWING_SCALE_ARTICLE_URL,
      ...(articleLastModified ? { lastModified: articleLastModified } : {}),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: new URL("/support", SITE_URL).toString(), lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: new URL("/privacy", SITE_URL).toString(), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
