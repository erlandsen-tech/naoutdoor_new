import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getUpcomingEvents, type EventInstance } from "@/lib/events";

// Revalidate hourly so the "next up" event stays accurate as dates roll over
// without needing a redeploy.
export const revalidate = 3600;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const [t, tNav] = await Promise.all([
    getTranslations({ locale, namespace: "home" }),
    getTranslations({ locale, namespace: "nav" }),
  ]);

  const { primary, secondary } = getUpcomingEvents();

  return (
    <div className="flex flex-1 flex-col">
      {/* ── Hero ───────────────────────────────────────────────
       *  Background swaps to the next-up event's season. The typographic
       *  "Nature & Recovery" lockup stays as the evergreen brand signature;
       *  the bottom strip shows what's coming next with its dates.
       * ──────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(540px, 74svh, 820px)" }}
      >
        <Image
          src={primary.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: primary.heroFocal }}
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(31,22,17,0.55) 0%, rgba(31,22,17,0) 28%, rgba(31,22,17,0) 50%, rgba(31,22,17,0.92) 100%)",
          }}
        />

        {/* Top strip */}
        <div
          className="relative z-10 flex justify-center"
          style={{ paddingTop: "clamp(36px, 7vw, 72px)" }}
        >
          <span
            className="label inline-block border-y border-cream/80 px-3 text-cream"
            style={{
              fontSize: "clamp(10px, 0.7vw + 0.4rem, 12px)",
              letterSpacing: "0.24em",
              lineHeight: "1.6",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            {t("heroEyebrow")}
          </span>
        </div>

        {/* Bottom lockup */}
        <div className="absolute inset-x-0 bottom-8 z-10 px-6 text-center text-cream sm:bottom-12 md:bottom-16">
          <div
            className="label mb-2 opacity-90"
            style={{
              fontSize: "clamp(10px, 0.8vw + 0.3rem, 13px)",
              letterSpacing: "0.28em",
            }}
          >
            {t("heroIntro")}
          </div>
          <h1
            className="display-italic"
            style={{
              fontSize: "var(--fs-display-xl)",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            {t("heroNature")}
          </h1>
          <h2
            className="display"
            style={{
              fontSize: "var(--fs-display-xl)",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              margin: "2px 0 20px",
            }}
          >
            {t("heroAndRecovery")}
          </h2>
          <NextUpStrip event={primary} nextLabel={t("nextUp")} />
        </div>
      </section>

      {/* ── Event cards — primary (next) first, secondary second ─ */}
      <section className="mx-auto w-full max-w-4xl px-4 pt-7 sm:px-6 md:pt-12">
        <h2 className="visually-hidden">{t("eventsSectionHidden")}</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <EventCard event={primary} featured nextUpLabel={t("nextUp")} />
          <EventCard event={secondary} nextUpLabel={t("nextUp")} />
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="mx-auto mt-10 w-full max-w-2xl px-6 text-center md:mt-16">
        <div
          className="label mb-3 text-sunset"
          style={{ fontSize: "11px", letterSpacing: "0.28em" }}
        >
          {t("aboutEyebrow")}
        </div>
        <p
          className="mx-auto max-w-xl text-ink"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "var(--fs-body-l)",
            lineHeight: "1.55",
          }}
        >
          {t("about")}
        </p>
        <p
          className="mx-auto mt-4 max-w-lg italic text-ink/70"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "var(--fs-body-s)",
            lineHeight: "1.55",
          }}
        >
          {t("aboutTail")}
        </p>
      </section>

      {/* ── CTA row ───────────────────────────────────────────── */}
      <section className="mx-auto mt-8 w-full max-w-md px-4 md:mt-12 md:max-w-lg">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/readings"
            className="label flex items-center justify-center rounded-[10px] border-[1.5px] border-espresso px-4 py-4 text-espresso transition-colors hover:bg-espresso hover:text-cream"
            style={{ fontSize: "13px", letterSpacing: "0.18em" }}
          >
            {tNav("readings")}
          </Link>
          <Link
            href="/donations"
            className="label flex items-center justify-center rounded-[10px] bg-espresso px-4 py-4 text-cream transition-all hover:bg-[#2d1f15] hover:shadow-lg"
            style={{ fontSize: "13px", letterSpacing: "0.18em" }}
          >
            {tNav("donate")}
          </Link>
        </div>
      </section>
    </div>
  );
}

function NextUpStrip({
  event,
  nextLabel,
}: {
  event: EventInstance;
  nextLabel: string;
}) {
  return (
    <div
      className="label opacity-95"
      style={{
        fontSize: "clamp(10px, 0.7vw + 0.4rem, 12px)",
        letterSpacing: "0.22em",
      }}
    >
      ─── {nextLabel}:&nbsp;{event.title}&nbsp;·&nbsp;{event.dateLabel}&nbsp;───
    </div>
  );
}

function EventCard({
  event,
  featured = false,
  nextUpLabel,
}: {
  event: EventInstance;
  featured?: boolean;
  nextUpLabel: string;
}) {
  return (
    <Link
      href={event.href}
      className="group relative block overflow-hidden rounded-xl text-cream shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      style={{ background: event.gradient, padding: "22px 20px 20px" }}
    >
      <span
        className="label absolute right-4 top-[14px]"
        style={{
          color: event.metaColor,
          fontSize: "10px",
          letterSpacing: "0.18em",
        }}
      >
        {event.dateLabel}
      </span>
      <div
        className="label opacity-80"
        style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          marginBottom: "4px",
        }}
      >
        {featured ? `${nextUpLabel} · ` : ""}
        {event.season} · {event.location}
      </div>
      <div
        className="display pt-4 md:pt-6"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "var(--fs-display-m)",
          lineHeight: "1",
          letterSpacing: "-0.02em",
        }}
      >
        {event.title}
      </div>
      <div
        className="mt-2 italic opacity-85"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "var(--fs-body-s)",
          lineHeight: "1.4",
        }}
      >
        {event.subtitle}
      </div>
      <div
        className="label mt-4 flex items-center gap-2 transition-transform group-hover:gap-3"
        style={{ fontSize: "12px", letterSpacing: "0.14em" }}
      >
        <span>{event.cta}</span>
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
