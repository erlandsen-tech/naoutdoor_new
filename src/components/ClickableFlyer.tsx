"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface ClickableFlyerProps {
  src: string;
  alt: string;
  /** max-width CSS value for the thumbnail container (e.g. "680px") */
  maxWidth?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ClickableFlyer({
  src,
  alt,
  maxWidth = "680px",
  width = 900,
  height = 1300,
  priority = false,
}: ClickableFlyerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open ${alt} fullscreen`}
          className="group relative block overflow-hidden rounded-[14px] bg-white p-2 shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset"
          style={{ maxWidth }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
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
        <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
