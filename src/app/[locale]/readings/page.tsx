import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

const LANGUAGES: Array<{ locale: Locale; labelKey: Locale; flag: string }> = [
  { locale: "en", labelKey: "en", flag: "/flags/united-kingdom.png" },
  { locale: "nb", labelKey: "nb", flag: "/flags/norway.png" },
  { locale: "sv", labelKey: "sv", flag: "/flags/sweden.png" },
  { locale: "da", labelKey: "da", flag: "/flags/denmark.png" },
  { locale: "nl", labelKey: "nl", flag: "/flags/netherlands.png" },
  { locale: "de", labelKey: "de", flag: "/flags/germany.png" },
  { locale: "fr", labelKey: "fr", flag: "/flags/france.png" },
  { locale: "fi", labelKey: "fi", flag: "/flags/finland.png" },
];

const PAMPHLET_SLUGS = [
  "who",
  "what",
  "why",
  "how",
  "traditions",
  "just-for-today",
  "we-do-recover",
] as const;

function localePrefix(locale: Locale): string {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export default async function Readings({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const [tPam, tLang] = await Promise.all([
    getTranslations({ locale, namespace: "pamphlets" }),
    getTranslations({ locale, namespace: "languages" }),
  ]);

  const prefix = localePrefix(locale as Locale);

  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <section
        className="mx-auto w-full max-w-3xl px-6 text-center"
        style={{ paddingTop: "clamp(30px, 6vw, 60px)", paddingBottom: "clamp(20px, 4vw, 40px)" }}
      >
        <div
          className="label text-sunset"
          style={{ fontSize: "11px", letterSpacing: "0.28em", marginBottom: "10px" }}
        >
          Readings & formats
        </div>
        <h1
          className="display"
          style={{
            fontSize: "var(--fs-display-l)",
            lineHeight: "0.98",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Readings.
        </h1>
        <p
          className="mx-auto mt-4 max-w-xl italic text-ink/70"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "var(--fs-body)",
            lineHeight: "1.55",
          }}
        >
          Meeting formats and core NA literature, available in eight languages.
        </p>
      </section>

      {/* Meeting formats */}
      <section className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div
          className="label text-espresso/55 mb-3"
          style={{ fontSize: "10px", letterSpacing: "0.22em" }}
        >
          Meeting format
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <FormatCard
            href={`${prefix}/speaker-meeting`}
            eyebrow="Open meeting"
            title="Speaker format"
            body="The classic NA speaker meeting opening and closing script."
          />
          <FormatCard
            href={`${prefix}/jft-meeting`}
            eyebrow="Daily reader"
            title="JFT & SPAD format"
            body="For Just for Today and Spiritual Principle a Day meetings."
          />
        </div>
      </section>

      {/* Pamphlet list in current locale */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6 md:pt-14">
        <div
          className="label text-espresso/55 mb-3"
          style={{ fontSize: "10px", letterSpacing: "0.22em" }}
        >
          Literature · {tLang(locale as Locale)}
        </div>
        <nav aria-label="Pamphlets" className="grid gap-2">
          {PAMPHLET_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`${prefix}/readings/${slug}`}
              className="group flex items-center justify-between rounded-[10px] border border-espresso/10 bg-white/60 px-4 py-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-espresso/30 hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <span
                className="label text-espresso"
                style={{ fontSize: "13px", letterSpacing: "0.12em" }}
              >
                {tPam(`${slug}.title`)}
              </span>
              <span
                aria-hidden
                className="text-espresso/50 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </nav>
      </section>

      {/* Language grid — switches locale while staying on /readings */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6 md:pt-14">
        <div
          className="label text-espresso/55 mb-4"
          style={{ fontSize: "10px", letterSpacing: "0.22em" }}
        >
          Other languages
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {LANGUAGES.filter((l) => l.locale !== locale).map((lang) => (
            <Link
              key={lang.locale}
              href={`${localePrefix(lang.locale)}/readings`}
              className="group flex flex-col items-center gap-3 rounded-[12px] border border-espresso/10 bg-white/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-espresso/30 hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <div
                className="overflow-hidden rounded-[4px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ring-1 ring-espresso/10"
                style={{ width: "60px", height: "40px" }}
              >
                <Image
                  src={lang.flag}
                  alt=""
                  width={60}
                  height={40}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <span
                className="label text-espresso"
                style={{ fontSize: "11.5px", letterSpacing: "0.14em" }}
              >
                {tLang(lang.labelKey)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function FormatCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-[12px] border border-espresso/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-espresso/30 hover:shadow-[var(--shadow-card)]"
    >
      <div
        className="label text-sunset"
        style={{ fontSize: "10px", letterSpacing: "0.22em", marginBottom: "6px" }}
      >
        {eyebrow}
      </div>
      <div
        className="display"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "var(--fs-title)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: "1.1",
        }}
      >
        {title}
      </div>
      <p
        className="mt-2 italic text-ink/70"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "var(--fs-body-s)",
          lineHeight: "1.5",
        }}
      >
        {body}
      </p>
      <div
        className="label mt-4 flex items-center gap-2 text-espresso transition-transform group-hover:gap-3"
        style={{ fontSize: "11px", letterSpacing: "0.18em" }}
      >
        <span>Open</span>
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
