import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { routing, type Locale } from "@/i18n/routing";

const PHONE_NUMBER = "+47 901 32 761";
const PHONE_TEL = "+4790132761";
const EMAIL = "mail@naoutdoor.org";

export default async function Practical({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "practical" });

  return (
    <div className="flex flex-1 flex-col">
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

      <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 md:py-14">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Trysil external link */}
          <a
            href="https://www.trysil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-[12px] border border-espresso/10 bg-cream/60 p-5 transition-all hover:-translate-y-0.5 hover:border-espresso/30 hover:bg-cream hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex-1">
              <CardEyebrow>{t("trysilCard.eyebrow")}</CardEyebrow>
              <CardTitle>{t("trysilCard.title")}</CardTitle>
              <CardBody>{t("trysilCard.body")}</CardBody>
              <CardCta>
                <span>{t("trysilCard.cta")}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </CardCta>
            </div>
          </a>

          {/* Cabin rental */}
          <div className="rounded-[12px] border border-espresso/10 bg-cream/60 p-5">
            <CardEyebrow>{t("lodgingCard.eyebrow")}</CardEyebrow>
            <CardTitle>{t("lodgingCard.title")}</CardTitle>
            <CardBody>{t("lodgingCard.body")}</CardBody>
            <a
              href={`tel:${PHONE_TEL}`}
              className="label mt-4 inline-flex items-center gap-2 text-espresso underline decoration-sunset/60 underline-offset-4 hover:decoration-sunset"
              style={{ fontSize: "13px", letterSpacing: "0.14em" }}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Contact */}
          <div className="rounded-[12px] border border-espresso/10 bg-cream/60 p-5">
            <CardEyebrow>{t("contactCard.eyebrow")}</CardEyebrow>
            <CardTitle>{t("contactCard.title")}</CardTitle>
            <CardBody>{t("contactCard.body")}</CardBody>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={`mailto:${EMAIL}`}
                className="label inline-flex items-center gap-2 text-espresso underline decoration-sunset/60 underline-offset-4 hover:decoration-sunset"
                style={{ fontSize: "13px", letterSpacing: "0.14em" }}
              >
                <Mail className="h-3.5 w-3.5" aria-hidden />
                <span>{EMAIL}</span>
              </a>
              <span
                className="label text-espresso/70"
                style={{ fontSize: "13px", letterSpacing: "0.14em" }}
              >
                · {t("contactCard.facebookLabel")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="label text-sunset"
      style={{
        fontSize: "10px",
        letterSpacing: "0.22em",
        marginBottom: "6px",
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-fraunces), serif",
        fontSize: "var(--fs-title-s, var(--fs-body))",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: "1.2",
      }}
    >
      {children}
    </div>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-2 italic text-ink/70"
      style={{
        fontFamily: "var(--font-fraunces), serif",
        fontSize: "var(--fs-body-s)",
        lineHeight: "1.5",
      }}
    >
      {children}
    </p>
  );
}

function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="label mt-4 flex items-center gap-2 text-espresso transition-transform group-hover:gap-3"
      style={{ fontSize: "11px", letterSpacing: "0.18em" }}
    >
      {children}
    </div>
  );
}
