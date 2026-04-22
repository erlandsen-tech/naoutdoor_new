"use client";

import { useState } from "react";
import Image from "next/image";

export default function DonationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ── Header band ────────────────────────────── */}
      <section
        className="relative w-full bg-espresso text-cream"
        style={{
          padding: "clamp(40px, 7vw, 80px) clamp(22px, 5vw, 60px) clamp(30px, 5vw, 56px)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <div
            className="label text-cream/70"
            style={{ fontSize: "11px", letterSpacing: "0.28em", marginBottom: "8px" }}
          >
            7th Tradition
          </div>
          <h1
            className="display"
            style={{
              fontSize: "var(--fs-display-l)",
              lineHeight: "0.98",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Donate.
          </h1>
          <p
            className="mt-3 max-w-xl italic text-cream/90"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body)",
              lineHeight: "1.5",
            }}
          >
            Every NA group ought to be fully self-supporting, declining outside
            contributions.
          </p>
        </div>
      </section>

      <div
        className="mx-auto w-full max-w-3xl"
        style={{ padding: "clamp(20px, 3vw, 32px) clamp(16px, 3vw, 24px) 0" }}
      >
        {/* ── Vipps hero ───────────────────────────── */}
        <article
          className="rounded-[14px] text-white shadow-[var(--shadow-vipps)]"
          style={{
            background: "linear-gradient(135deg, #FF5B24 0%, #E04A15 100%)",
            padding: "22px 22px 26px",
          }}
        >
          <div className="flex items-center justify-between">
            <div
              className="label opacity-95"
              style={{ fontSize: "11px", letterSpacing: "0.2em" }}
            >
              Fastest · Norway
            </div>
            <Image
              src="/design/pay-with-vipps.png"
              alt="Vipps"
              width={100}
              height={28}
              className="h-7 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div
            className="mt-5 italic opacity-90"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body)",
              marginBottom: "4px",
            }}
          >
            Send to number
          </div>
          <div
            className="label"
            style={{
              fontSize: "clamp(44px, 10vw, 72px)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1,
            }}
          >
            520065
          </div>

          <CopyButton value="520065" label="Tap to copy number" dark />

          <div
            className="mt-4 italic opacity-95"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body-s)",
            }}
          >
            Add a note:{" "}
            <span className="font-bold not-italic">
              &ldquo;NA Outdoor donation&rdquo;
            </span>
          </div>
        </article>

        {/* ── Divider ──────────────────────────────── */}
        <div
          className="flex items-center gap-3"
          style={{ padding: "26px 4px 10px" }}
        >
          <div className="h-px flex-1 bg-espresso/15" />
          <span
            className="label text-espresso/55"
            style={{ fontSize: "10.5px", letterSpacing: "0.2em" }}
          >
            Other ways
          </span>
          <div className="h-px flex-1 bg-espresso/15" />
        </div>

        {/* ── Secondary methods ────────────────────── */}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
          <SecondaryCard
            label="Bank transfer · Norway"
            value="1506 0727 772"
            sub="Konto · Anonyme Narkomane"
          />
          <SecondaryCard
            label="IBAN · International"
            value="NO52 1506 0727 772"
            sub="DNB SWIFT: DNBANOKKXXX"
          />

          {/* Cash card */}
          <div
            className="flex items-center gap-4 rounded-[12px] border-[1.5px] border-dashed border-espresso/20 md:col-span-2"
            style={{ padding: "18px" }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(31,22,17,0.06)" }}
              aria-hidden
            >
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <div
                className="label text-espresso/55"
                style={{ fontSize: "10px", letterSpacing: "0.22em" }}
              >
                Cash
              </div>
              <div
                className="mt-1"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "var(--fs-body)",
                  lineHeight: "1.4",
                }}
              >
                Contribute at meetings in person.
              </div>
            </div>
          </div>
        </div>

        {/* ── Mailing address ──────────────────────── */}
        <div className="mt-8 md:mt-10">
          <div
            className="label text-espresso/55"
            style={{ fontSize: "10px", letterSpacing: "0.22em", marginBottom: "8px" }}
          >
            Mailing address
          </div>
          <address
            className="not-italic italic text-ink"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "var(--fs-body-s)",
              lineHeight: "1.55",
              fontStyle: "italic",
            }}
          >
            Anonyme Narkomane · Område Øst · Service Komite
            <br />
            Hummeldalsvegen 1, 2406 Elverum
          </address>
        </div>
      </div>
    </div>
  );
}

function SecondaryCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div
      className="rounded-[12px] border border-espresso/10 bg-white"
      style={{ padding: "16px 18px" }}
    >
      <div
        className="label text-espresso/55"
        style={{ fontSize: "10px", letterSpacing: "0.22em" }}
      >
        {label}
      </div>
      <div className="mt-1.5 flex items-center gap-3">
        <div
          className="label flex-1 text-espresso"
          style={{
            fontSize: "clamp(18px, 3vw, 22px)",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {value}
        </div>
        <CopyButton value={value.replace(/\s/g, "")} compact />
      </div>
      {sub && (
        <div
          className="mt-1 italic text-espresso/60"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "12.5px",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function CopyButton({
  value,
  label = "Copy",
  dark = false,
  compact = false,
}: {
  value: string;
  label?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("ok");
    } catch {
      setStatus("err");
    }
    setTimeout(() => setStatus("idle"), 1800);
  }

  if (compact) {
    const bg =
      status === "ok"
        ? "#16a34a"
        : status === "err"
          ? "#b91c1c"
          : "var(--color-espresso)";
    return (
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy ${value}`}
        className="label cursor-pointer rounded-[8px] text-cream transition-colors"
        style={{
          padding: "8px 14px",
          minWidth: "76px",
          fontSize: "12px",
          letterSpacing: "0.14em",
          background: bg,
        }}
      >
        {status === "ok" ? "Copied" : status === "err" ? "Error" : "Copy"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${value}`}
      className="label mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] transition-colors"
      style={{
        padding: "12px 14px",
        border: dark
          ? "1.5px solid rgba(255,255,255,0.35)"
          : "1.5px solid var(--color-espresso)",
        background:
          status === "ok"
            ? "rgba(22,163,74,0.9)"
            : dark
              ? "rgba(255,255,255,0.15)"
              : "transparent",
        color: dark ? "#fff" : "var(--color-espresso)",
        fontSize: "12px",
        letterSpacing: "0.16em",
      }}
    >
      <span>
        {status === "ok"
          ? "Copied to clipboard"
          : status === "err"
            ? "Couldn't copy"
            : label}
      </span>
    </button>
  );
}
