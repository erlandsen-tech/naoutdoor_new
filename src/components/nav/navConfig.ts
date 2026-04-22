export type NavItem = {
  id: "home" | "ski" | "bike" | "readings" | "donate";
  href: string;
};

// Labels come from messages/*.json under the `nav` namespace:
//   nav.home, nav.homeShort, nav.ski, nav.skiShort, etc.
// The href values are always the default-locale path; the <Link> component
// from next-intl's navigation helpers will add the locale prefix per request.
export const NAV_ITEMS: NavItem[] = [
  { id: "home", href: "/" },
  { id: "ski", href: "/ski-and-recovery" },
  { id: "bike", href: "/bike-2-basic" },
  { id: "readings", href: "/readings" },
  { id: "donate", href: "/donations" },
];

export function hasReadableText(pathname: string | null): boolean {
  if (!pathname) return false;

  const stripped = stripLocalePrefix(pathname);

  if (stripped === "/speaker-meeting" || stripped === "/jft-meeting") {
    return true;
  }
  // /readings/:slug — pamphlet pages (2+ segments under readings)
  if (stripped.startsWith("/readings/")) {
    return true;
  }
  return false;
}

export function activeId(pathname: string | null): NavItem["id"] | "" {
  if (!pathname) return "";

  const stripped = stripLocalePrefix(pathname);

  if (stripped === "/" || stripped === "") return "home";
  if (stripped.startsWith("/ski-and-recovery")) return "ski";
  if (stripped.startsWith("/bike-2-basic")) return "bike";
  if (stripped.startsWith("/donations")) return "donate";
  if (
    stripped.startsWith("/readings") ||
    stripped.startsWith("/speaker-meeting") ||
    stripped.startsWith("/jft-meeting")
  ) {
    return "readings";
  }
  return "";
}

// Strip a /{locale}/ prefix so the rest of the matching logic works against
// pathless-of-locale URLs. Locale codes are the 2-letter ISO codes we support.
const LOCALE_CODES = ["nb", "sv", "da", "nl", "de", "fr", "fi"]; // en has no prefix
function stripLocalePrefix(pathname: string): string {
  for (const code of LOCALE_CODES) {
    if (pathname === `/${code}`) return "/";
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(`/${code}`.length);
  }
  return pathname;
}
