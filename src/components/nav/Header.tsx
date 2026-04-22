"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { NAV_ITEMS, activeId, hasReadableText } from "./navConfig";
import { routing } from "@/i18n/routing";
import TextSizeControl from "../TextSizeControl";
import LanguageSwitcher from "../LanguageSwitcher";

function localePrefix(locale: string): string {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const active = activeId(pathname);
  const showTextSize = hasReadableText(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prefix = localePrefix(locale);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[rgba(245,230,200,0.9)] backdrop-blur-xl shadow-[0_1px_0_rgba(31,22,17,0.08)]"
          : "bg-[rgba(245,230,200,0.55)] backdrop-blur-md"
      }`}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <a href="#main" className="skip-link">
        {t("skipToContent")}
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-3.5">
        {/* Brand lockup — symbol + Fraunces wordmark + Trysil tagline.
         *  Always visible on all screens; the header's cream backdrop keeps
         *  the dark logo legible even over dark hero imagery. */}
        <Link
          href={prefix || "/"}
          className="flex items-center gap-3 group"
          aria-label={t("brandAria")}
        >
          <Image
            src="/design/na-symbol.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[-6deg] md:h-10 md:w-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className="text-espresso"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 1.2vw + 0.9rem, 22px)",
                letterSpacing: "-0.018em",
                lineHeight: 1,
              }}
            >
              {t("brand")}
            </span>
            <span
              className="label text-espresso/55 mt-[3px] hidden sm:inline-block"
              style={{
                fontSize: "9.5px",
                letterSpacing: "0.3em",
              }}
            >
              {t("brandTagline")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Text-size control — only on reading pages. */}
          {showTextSize && <TextSizeControl />}

          {/* Desktop nav */}
          <nav aria-label={t("primaryNav")} className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full border border-espresso/15 bg-[rgba(255,255,255,0.7)] px-2 py-1.5 backdrop-blur-md shadow-[0_4px_14px_rgba(31,22,17,0.06)]">
              {NAV_ITEMS.map((item, i) => {
                const isActive = active === item.id;
                const href = `${prefix}${item.href === "/" ? "" : item.href}` || "/";
                return (
                  <span key={item.id} className="flex items-center">
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`label relative rounded-full px-3.5 py-2 text-[11.5px] transition-all ${
                        isActive
                          ? "bg-espresso text-cream"
                          : "text-espresso/85 hover:bg-espresso/5"
                      }`}
                      style={{ letterSpacing: "0.14em" }}
                    >
                      {t(item.id)}
                    </Link>
                    {i < NAV_ITEMS.length - 1 && (
                      <span
                        aria-hidden
                        className="label px-0.5 text-espresso/30 text-[12px] select-none"
                      >
                        {"//"}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </nav>

          {/* Language switcher — visible on all breakpoints */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
