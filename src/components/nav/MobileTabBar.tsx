"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, activeId } from "./navConfig";
import { NAV_ICONS } from "./NavIcons";

export default function MobileTabBar() {
  const pathname = usePathname();
  const active = activeId(pathname);

  return (
    <nav
      aria-label="Primary mobile"
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
          return (
            <li key={item.id} className="flex">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                className={`group flex w-full flex-col items-center justify-center gap-[3px] rounded-[20px] px-1 transition-colors ${
                  isActive
                    ? "text-sunset"
                    : "text-cream/65 active:text-cream"
                }`}
              >
                <Icon size={22} />
                <span
                  className="label text-[10.5px]"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {item.shortLabel}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
