import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface LanguageMenuItem {
  href: string;
  label: string;
}

export interface LanguageMenuProps {
  items: LanguageMenuItem[];
  backHref?: string;
}

export default function LanguageMenu({
  items,
  backHref = "/readings",
}: LanguageMenuProps) {
  return (
    <div
      className="mx-auto w-full max-w-xl px-6"
      style={{ paddingTop: "clamp(30px, 6vw, 56px)", paddingBottom: "clamp(20px, 4vw, 40px)" }}
    >
      <Link
        href={backHref}
        aria-label="Back"
        className="label inline-flex items-center gap-2 text-espresso/70 hover:text-espresso"
        style={{ fontSize: "11px", letterSpacing: "0.2em" }}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        <span>Back</span>
      </Link>

      <div className="mt-5">
        <div
          className="label text-sunset"
          style={{
            fontSize: "10.5px",
            letterSpacing: "0.28em",
            marginBottom: "8px",
          }}
        >
          Choose a reading
        </div>
        <h1
          className="display"
          style={{
            fontSize: "var(--fs-display-m)",
            lineHeight: "1",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Literature.
        </h1>
      </div>

      <nav aria-label="Language pamphlets" className="mt-6 space-y-2.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex w-full items-center justify-between gap-4 rounded-[10px] border border-espresso/12 bg-white px-4 py-3.5 text-espresso transition-all hover:-translate-y-0.5 hover:border-espresso/35 hover:shadow-[var(--shadow-card)]"
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "var(--fs-body)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </span>
            <span
              aria-hidden
              className="label text-espresso/50 transition-transform group-hover:translate-x-1 group-hover:text-espresso"
              style={{ fontSize: "12px", letterSpacing: "0.18em" }}
            >
              Read →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
