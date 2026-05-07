import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import ClickableFlyer from "@/components/ClickableFlyer";

export default function Program() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 sm:px-6">
      <div
        style={{ paddingTop: "clamp(24px, 5vw, 48px)", paddingBottom: "clamp(16px, 3vw, 32px)" }}
      >
        <Link
          href="/ski-and-recovery"
          aria-label="Back"
          className="label inline-flex items-center gap-2 text-espresso/70 hover:text-espresso"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <span>Ski & Recovery</span>
        </Link>
        <div className="mt-4 text-center">
          <div
            className="label text-sunset"
            style={{ fontSize: "10.5px", letterSpacing: "0.28em" }}
          >
            Program · 2027
          </div>
          <h1
            className="display mt-2"
            style={{
              fontSize: "var(--fs-display-m)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Ski &amp; Recovery program
          </h1>
        </div>
      </div>

      <ClickableFlyer
        src="/sr-program-2027.png"
        alt="Ski & Recovery Program 2027 - Trysil"
        maxWidth="820px"
        width={800}
        height={1200}
        priority
      />
    </div>
  );
}
