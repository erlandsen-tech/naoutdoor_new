import Link from "next/link";
import Image from "next/image";
import ClickableFlyer from "@/components/ClickableFlyer";

export default function Bike2Basic() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(340px, 52svh, 520px)" }}
      >
        <Image
          src="/design/b2b-flyer.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,22,17,0.2) 0%, rgba(31,22,17,0.25) 40%, rgba(31,22,17,0.88) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-8 z-10 px-6 text-center text-cream md:bottom-14">
          <div
            className="label mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.3em", opacity: 0.9 }}
          >
            Summer · Trysil · Aug 29–31, 2026
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
            Bike 2 Basic
          </h1>
          <p
            className="mx-auto mt-3 italic opacity-95"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body)",
              lineHeight: "1.5",
            }}
          >
            Nature · Love · Fellowship
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <SubPageCard
            href="/bike-2-basic/bike-trail-map"
            eyebrow="On two wheels"
            title="Bike trail map"
            body="The official route from Trysil through the Norwegian forests."
          />
          <SubPageCard
            href="/bike-2-basic/hiking-map"
            eyebrow="On foot"
            title="Hiking map"
            body="Trails around Trysil for when you want to stretch your legs."
          />
        </div>

        <div className="mt-10 md:mt-14">
          <ClickableFlyer
            src="/design/b2b-flyer.jpg"
            alt="Bike 2 Basic — Trysil summer flyer"
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
