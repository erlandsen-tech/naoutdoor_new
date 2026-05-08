import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import ClickableFlyer from "@/components/ClickableFlyer";

export default async function SkiAndRecovery({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "ski" });

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(340px, 52svh, 520px)" }}
      >
        <Image
          src="/design/mountain-slope.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,52,96,0.25) 0%, rgba(15,52,96,0.2) 40%, rgba(15,52,96,0.88) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-8 z-10 px-6 text-center text-cream md:bottom-14">
          <div
            className="label mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.3em", opacity: 0.9 }}
          >
            {t("heroEyebrow")}
          </div>
          <h1
            className="display"
            style={{
              fontSize: "var(--fs-display-l)",
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {t("heroTitle")}
          </h1>
          <p
            className="mx-auto mt-3 max-w-lg italic opacity-95"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body)",
              lineHeight: "1.5",
            }}
          >
            {t("heroTagline")}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <SubPageCard
            href="/ski-and-recovery/program"
            eyebrow={t("programCard.eyebrow")}
            title={t("programCard.title")}
            body={t("programCard.body")}
            openLabel={t("openCta")}
          />
          <SubPageCard
            href="/ski-and-recovery/ski-trail-map"
            eyebrow={t("trailMapCard.eyebrow")}
            title={t("trailMapCard.title")}
            body={t("trailMapCard.body")}
            openLabel={t("openCta")}
          />
        </div>

        <a
          href="https://www.trysil.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-start gap-4 rounded-[12px] border border-espresso/10 bg-cream/60 p-5 transition-all hover:-translate-y-0.5 hover:border-espresso/30 hover:bg-cream hover:shadow-[var(--shadow-card)]"
        >
          <div className="flex-1">
            <div
              className="label text-sunset"
              style={{ fontSize: "10px", letterSpacing: "0.22em", marginBottom: "6px" }}
            >
              {t("trysilCard.eyebrow")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "var(--fs-title-s, var(--fs-body))",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
              }}
            >
              {t("trysilCard.title")}
            </div>
            <p
              className="mt-2 italic text-ink/70"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "var(--fs-body-s)",
                lineHeight: "1.5",
              }}
            >
              {t("trysilCard.body")}
            </p>
            <div
              className="label mt-4 flex items-center gap-2 text-espresso transition-transform group-hover:gap-3"
              style={{ fontSize: "11px", letterSpacing: "0.18em" }}
            >
              <span>{t("trysilCard.cta")}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </div>
          </div>
        </a>

        {/* 2027 flyer — click to open fullscreen lightbox */}
        <div className="mt-10 md:mt-14">
          <ClickableFlyer
            src="/design/ski-flyer-2027.png"
            alt="NA Outdoor — Ski & Recovery Trysil, March 8–13 2027 (21 years)"
            maxWidth="680px"
          />
        </div>
      </section>
    </div>
  );
}

function SubPageCard({
  href,
  eyebrow,
  title,
  body,
  openLabel,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  openLabel: string;
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
        <span>{openLabel}</span>
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
