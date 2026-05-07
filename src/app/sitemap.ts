import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://na-outdoor.org";

// BCP-47 tags for hreflang (must match [locale]/layout.tsx)
const BCP47: Record<Locale, string> = {
  en: "en",
  nb: "nb-NO",
  sv: "sv-SE",
  da: "da-DK",
  nl: "nl-NL",
  de: "de-DE",
  fr: "fr-FR",
  fi: "fi-FI",
};

// All locale-prefixed routes under app/[locale]/
const LOCALE_ROUTES = [
  "", // home
  "/readings",
  "/donations",
  "/speaker-meeting",
  "/jft-meeting",
  "/ski-and-recovery",
  "/ski-and-recovery/program",
  "/ski-and-recovery/ski-trail-map",
  "/bike-2-basic",
  "/bike-2-basic/program",
  "/bike-2-basic/hiking-map",
  "/bike-2-basic/bike-trail-map",
];

const PAMPHLET_SLUGS = [
  "who",
  "what",
  "why",
  "how",
  "traditions",
  "just-for-today",
  "we-do-recover",
];

function localePath(locale: Locale): string {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

function buildUrl(locale: Locale, route: string): string {
  return `${SITE_URL}${localePath(locale)}${route}`;
}

function alternatesFor(route: string): Record<string, string> {
  return {
    ...Object.fromEntries(
      routing.locales.map((l) => [BCP47[l], buildUrl(l, route)]),
    ),
    "x-default": `${SITE_URL}${route}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Locale-prefixed routes — one entry per (locale, route) with hreflang alternates
  for (const route of LOCALE_ROUTES) {
    for (const locale of routing.locales) {
      entries.push({
        url: buildUrl(locale, route),
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: { languages: alternatesFor(route) },
      });
    }
  }

  // Pamphlet routes — /{locale}/readings/{slug}
  for (const slug of PAMPHLET_SLUGS) {
    const route = `/readings/${slug}`;
    for (const locale of routing.locales) {
      entries.push({
        url: buildUrl(locale, route),
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: { languages: alternatesFor(route) },
      });
    }
  }

  return entries;
}
