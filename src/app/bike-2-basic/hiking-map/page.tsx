"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";

export default function HikingMapPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full flex-1 relative min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-center font-bold text-2xl mb-4">Hiking map</h2>
        <div className="w-full overflow-auto">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block mx-auto outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
            aria-label="Open hiking map fullscreen"
          >
            <Image src="/img/turkart.png" alt="Hiking map" width={1600} height={1200} className="mx-auto h-auto w-full max-w-full cursor-zoom-in" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/bike-2-basic">
            <Image src="/img/left-arrow.png" alt="Back" width={40} height={40} className="hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {open && (
        <ImageLightbox src="/img/turkart.png" alt="Hiking map" onClose={() => setOpen(false)} />
      )}
    </div>
  );
}


