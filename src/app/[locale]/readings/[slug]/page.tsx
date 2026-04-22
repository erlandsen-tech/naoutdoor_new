import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import ReadingFooter from "@/components/ReadingFooter";

const SLUGS = [
  "who",
  "what",
  "why",
  "how",
  "traditions",
  "just-for-today",
  "we-do-recover",
] as const;

type Slug = (typeof SLUGS)[number];

// Each slug maps to a CSS id in pamflets.css that sets the card background.
// IDs are Norwegian-sourced (hvem/hva/hvorfor/hvordan/trad/bare/vitil) and
// shared across all locales so the color scheme stays consistent.
const SLUG_ID: Record<Slug, string> = {
  who: "pam-hvem",
  what: "pam-hva",
  why: "pam-hvorfor",
  how: "pam-hvordan",
  traditions: "pam-trad",
  "just-for-today": "pam-bare",
  "we-do-recover": "pam-vitil",
};

function isSlug(value: string): value is Slug {
  return (SLUGS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as Locale) || !isSlug(slug)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: "pamphlets" });
  return { title: t(`${slug}.title`) };
}

export default async function PamphletPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as Locale) || !isSlug(slug)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "pamphlets" });
  const readingsHref = locale === routing.defaultLocale ? "/readings" : `/${locale}/readings`;

  return (
    <>
      <div>
        <div className="pam" id={SLUG_ID[slug]}>
          <div className="box-pam">
            <h2>{t(`${slug}.title`)}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw(`${slug}.body`) as string,
              }}
            />
          </div>
        </div>
      </div>
      <ReadingFooter backHref={readingsHref} />
    </>
  );
}
