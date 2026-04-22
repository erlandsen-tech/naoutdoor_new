export type NavItem = {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", shortLabel: "Home", href: "/" },
  { id: "ski", label: "Ski & Recovery", shortLabel: "Ski", href: "/ski-and-recovery" },
  { id: "bike", label: "Bike 2 Basic", shortLabel: "Bike", href: "/bike-2-basic" },
  { id: "readings", label: "Readings", shortLabel: "Readings", href: "/readings" },
  { id: "donate", label: "Donate", shortLabel: "Donate", href: "/donations" },
];

const LANGUAGE_PREFIX_RE =
  /^\/(english|norwegian|swedish|danish|dutch|german|french|finnish)(\/|$)/;

/**
 * True on routes that display long-form readable content (pamflet pages,
 * speaker/JFT meeting formats). These are the pages where the text-size
 * control in the header is meaningful. The /readings hub itself and the
 * per-language menus are excluded — they have no resizable prose.
 */
export function hasReadableText(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === "/speaker-meeting" || pathname === "/jft-meeting") {
    return true;
  }
  // /{lang}/{slug} — 2+ segments under a language
  const m = pathname.match(LANGUAGE_PREFIX_RE);
  if (!m) return false;
  return pathname.split("/").filter(Boolean).length >= 2;
}

export function activeId(pathname: string | null): string {
  if (!pathname || pathname === "/") return "home";
  if (pathname.startsWith("/ski-and-recovery")) return "ski";
  if (pathname.startsWith("/bike-2-basic")) return "bike";
  if (pathname.startsWith("/donations")) return "donate";
  if (
    pathname.startsWith("/readings") ||
    pathname.startsWith("/speaker-meeting") ||
    pathname.startsWith("/jft-meeting") ||
    /^\/(english|norwegian|swedish|danish|dutch|german|french|finnish)/.test(pathname)
  ) {
    return "readings";
  }
  return "";
}
