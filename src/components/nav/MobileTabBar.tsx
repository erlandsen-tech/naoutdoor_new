"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { NAV_ITEMS, activeId } from "./navConfig";
import { NAV_ICONS } from "./NavIcons";
import { routing } from "@/i18n/routing";

function localePrefix(locale: string): string {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export default function MobileTabBar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const active = activeId(pathname);
  const prefix = localePrefix(locale);

  return (
    <nav
      aria-label={t("primaryNavMobile")}
      className="md:hidden fixed left-2 right-2 z-40 h-16 rounded-[22px] backdrop-blur-xl"
      style={{
        bottom: "var(--tabbar-offset)",
        background: "rgba(31, 22, 17, 0.92)",
        boxShadow: "var(--shadow-tabbar)",
      }}
    >
      <ul className="grid h-full grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICONS[item.id];
          const isActive = active === item.id;
          const label = t(item.id);
          const shortLabel = t(`${item.id}Short` as const);
          const href = `${prefix}${item.href === "/" ? "" : item.href}` || "/";
          return (
            <li key={item.id} className="flex">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
                className={`group flex w-full flex-col items-center justify-center gap-[3px] rounded-[20px] px-1 transition-colors ${
                  isActive ? "text-sunset" : "text-cream/65 active:text-cream"
                }`}
              >
                <Icon size={22} />
                <span
                  className="label text-[10.5px]"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {shortLabel}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
