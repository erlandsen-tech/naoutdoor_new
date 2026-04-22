import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Layout from "@/components/Layout";

const SITE_URL = "https://na-outdoor.org";

// BCP-47 locale tags used in hreflang and openGraph. Map internal ISO-639-1
// codes to the region-qualified forms search engines prefer.
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

function localePath(locale: Locale): string {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) return {};

  const t = await getTranslations({ locale, namespace: "meta" });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [BCP47[l], `${localePath(l)}/`]),
  );

  return {
    title: {
      default: t("defaultTitle"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    alternates: {
      canonical: `${localePath(locale as Locale)}/`,
      languages: {
        ...languages,
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${SITE_URL}${localePath(locale as Locale)}`,
      siteName: "NA Outdoor",
      type: "website",
      locale: BCP47[locale as Locale].replace("-", "_"),
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => BCP47[l].replace("-", "_")),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // Layout (Header + Footer + MobileTabBar) lives here — not in the root
  // layout — so it re-renders whenever the [locale] segment changes. This
  // is what makes client-side language switches work: the nav bar needs
  // fresh translations + fresh locale-prefixed hrefs after a switch.
  return <Layout>{children}</Layout>;
}
