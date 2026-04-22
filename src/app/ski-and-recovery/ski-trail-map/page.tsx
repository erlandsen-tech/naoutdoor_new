"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ZoomIn } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

export default function SkiTrailMapPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
            Trysil · On the mountain
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
            Ski trail map
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open ski trail map fullscreen"
          className="group relative block overflow-hidden rounded-[14px] bg-white p-2 shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset"
        >
          <Image
            src="/img/skibakke.jpg"
            alt="Ski trail map"
            width={1600}
            height={1200}
            className="block h-auto w-full cursor-zoom-in rounded-[10px] transition-transform group-hover:scale-[1.01]"
          />
          <span
            className="label pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-espresso/85 px-3 py-2 text-cream backdrop-blur-md"
            style={{ fontSize: "10.5px", letterSpacing: "0.18em" }}
          >
            <ZoomIn className="h-3.5 w-3.5" aria-hidden />
            <span>Tap to zoom</span>
          </span>
        </button>
      </div>

      {open && (
        <ImageLightbox
          src="/img/skibakke.jpg"
          alt="Ski trail map"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
