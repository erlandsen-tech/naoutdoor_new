import Link from "next/link";
import { NAV_ITEMS } from "./navConfig";

export default function Footer() {
  return (
    <footer
      className="hidden md:block border-t border-espresso/10 mt-20"
      style={{ background: "var(--color-cream-soft)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div
            className="label text-[11px] text-sunset"
            style={{ letterSpacing: "0.22em" }}
          >
            NA Outdoor
          </div>
          <p className="mt-3 max-w-sm text-[15px] leading-[1.55] text-ink/80">
            A fellowship of Narcotics Anonymous members in Norway who find
            strength, connection, and joy through nature.
          </p>
          <p
            className="mt-4 max-w-sm text-[13px] italic leading-[1.5] text-ink/55"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Made possible by the 7th Tradition — supported solely by voluntary
            contributions from our members.
          </p>
        </div>

        <div>
          <div
            className="label text-[10px] text-ink/55"
            style={{ letterSpacing: "0.22em" }}
          >
            Navigate
          </div>
          <ul className="mt-3 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-[15px] text-espresso hover:text-sunset transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="label text-[10px] text-ink/55"
            style={{ letterSpacing: "0.22em" }}
          >
            Mailing address
          </div>
          <address
            className="mt-3 not-italic text-[14px] leading-[1.55] text-ink/80"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Anonyme Narkomane · Område Øst · Service Komite
            <br />
            Hummeldalsvegen 1, 2406 Elverum
          </address>
        </div>
      </div>

      <div className="border-t border-espresso/10">
        <div
          className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between label text-[10px] text-ink/50"
          style={{ letterSpacing: "0.22em" }}
        >
          <span>© {new Date().getFullYear()} · NA Outdoor</span>
          <span>Trysil · Norway</span>
        </div>
      </div>
    </footer>
  );
}
