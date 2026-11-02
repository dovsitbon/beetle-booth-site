import type { MetadataRoute } from "next";
import site from "@/data/site.json";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: lang === "he" ? 1 : 0.8,
    alternates: { languages: { ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`])), "x-default": `${site.url}/he` } },
  }));
}
