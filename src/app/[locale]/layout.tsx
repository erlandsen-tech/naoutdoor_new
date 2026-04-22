import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Layout from "@/components/Layout";
import HtmlLangSetter from "@/components/HtmlLangSetter";

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

  // Load the full message bundle for this locale. Providing `locale` + `messages`
  // explicitly means the client provider updates on client-side nav between
  // locales — without the props it caches the initial server-resolved locale
  // and never refreshes, which is why nav and switcher reverted to the old
  // locale when clicking around.
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HtmlLangSetter locale={locale} />
      <Layout>{children}</Layout>
    </NextIntlClientProvider>
  );
}
