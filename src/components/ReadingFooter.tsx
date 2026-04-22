"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LANGUAGE_NAMES: Record<string, string> = {
  english: "English",
  norwegian: "Norwegian",
  swedish: "Swedish",
  danish: "Danish",
  dutch: "Dutch",
  german: "German",
  french: "French",
  finnish: "Finnish",
};

interface ReadingFooterProps {
  /** Optional override. If omitted the footer auto-picks based on route:
   *   /english/who → /english (the language menu)
   *   /english     → /readings (the readings hub)
   *   /speaker-meeting / /jft-meeting → /readings
   */
  backHref?: string;
  /** aria-label override for the arrow link */
  backLabel?: string;
  /** No-op, kept so older callers don't break. */
  onPamflet?: boolean;
}

function resolveBack(pathname: string): { href: string; label: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";

  if (segments.length >= 2 && LANGUAGE_NAMES[first]) {
    return {
      href: `/${first}`,
      label: `More ${LANGUAGE_NAMES[first]} readings`,
    };
  }
  return { href: "/readings", label: "Back to readings" };
}

export default function ReadingFooter({
  backHref,
  backLabel,
}: ReadingFooterProps) {
  const pathname = usePathname() || "/";
  const resolved = resolveBack(pathname);
  const href = backHref ?? resolved.href;
  const label = backLabel ?? resolved.label;

  return (
    <div className="mt-12 flex flex-col items-center gap-3 pt-4 pb-6">
      {/* Back arrow on top — no label, the icon itself is the affordance. */}
      <Link
        href={href}
        aria-label={label}
        className="group inline-flex items-center justify-center"
      >
        <Image
          src="/img/left-arrow-black.png"
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 transition-transform group-hover:-translate-x-1 group-hover:scale-105"
        />
      </Link>

      {/* NA symbol — a quiet finishing mark. */}
      <Image
        src="/design/na-symbol.png"
        alt="Narcotics Anonymous"
        width={52}
        height={52}
        className="opacity-85"
        priority={false}
      />

      {/* Brand tagline under the NA symbol */}
      <div
        className="label text-espresso/60 text-center"
        style={{ fontSize: "10px", letterSpacing: "0.28em" }}
      >
        NA Outdoor · Trysil · Norway
      </div>
    </div>
  );
}
