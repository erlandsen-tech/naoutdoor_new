"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const FLAGS: Record<Locale, string> = {
  en: "/flags/united-kingdom.png",
  nb: "/flags/norway.png",
  sv: "/flags/sweden.png",
  da: "/flags/denmark.png",
  nl: "/flags/netherlands.png",
  de: "/flags/germany.png",
  fr: "/flags/france.png",
  fi: "/flags/finland.png",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("languages");

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function switchTo(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    // router.replace preserves the current pathname under the new locale.
    // Cookie update is handled by next-intl automatically.
    router.replace(pathname, { locale: next });
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t(locale)}
        className="flex items-center gap-1.5 rounded-full border border-espresso/15 bg-white/60 px-2.5 py-1.5 backdrop-blur-md transition-colors hover:bg-white"
      >
        <span
          className="overflow-hidden rounded-[3px] ring-1 ring-espresso/10"
          style={{ width: "22px", height: "15px" }}
        >
          <Image
            src={FLAGS[locale]}
            alt=""
            width={22}
            height={15}
            className="h-full w-full object-cover"
          />
        </span>
        <span
          className="label text-espresso/85 hidden sm:inline"
          style={{ fontSize: "10.5px", letterSpacing: "0.14em" }}
        >
          {locale.toUpperCase()}
        </span>
        <span aria-hidden className="text-espresso/50 text-[10px]">
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 mt-2 min-w-[180px] overflow-hidden rounded-[12px] border border-espresso/10 bg-white shadow-[var(--shadow-card)] z-50"
        >
          {routing.locales.map((l) => {
            const active = l === locale;
            return (
              <li key={l} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => switchTo(l)}
                  aria-current={active ? "true" : undefined}
                  className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors ${
                    active
                      ? "bg-espresso/5 text-espresso"
                      : "text-espresso/85 hover:bg-espresso/5"
                  }`}
                >
                  <span
                    className="overflow-hidden rounded-[3px] ring-1 ring-espresso/10"
                    style={{ width: "26px", height: "17px" }}
                  >
                    <Image
                      src={FLAGS[l]}
                      alt=""
                      width={26}
                      height={17}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span
                    className="label flex-1"
                    style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                  >
                    {t(l)}
                  </span>
                  {active && (
                    <span aria-hidden className="text-sunset text-[12px]">
                      ●
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
