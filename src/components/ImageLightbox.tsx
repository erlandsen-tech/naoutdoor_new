"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState<number>(1);
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const draggingRef = useRef<{ active: boolean; startX: number; startY: number; baseX: number; baseY: number }>({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(4, Number((s + 0.2).toFixed(2))));
      if (e.key === "-" || e.key === "_") setScale((s) => Math.max(1, Number((s - 0.2).toFixed(2))));
      if (e.key.toLowerCase() === "0") resetView();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((s) => {
      const next = Math.max(1, Math.min(4, Number((s + delta).toFixed(2))));
      return next;
    });
  }

  function startDrag(e: React.MouseEvent | React.TouchEvent) {
    const point = "touches" in e ? e.touches[0] : (e as React.MouseEvent);
    draggingRef.current = {
      active: true,
      startX: point.clientX,
      startY: point.clientY,
      baseX: translate.x,
      baseY: translate.y,
    };
  }

  function onMove(e: React.MouseEvent | React.TouchEvent) {
    if (!draggingRef.current.active || scale === 1) return;
    const point = "touches" in e ? e.touches[0] : (e as React.MouseEvent);
    const dx = point.clientX - draggingRef.current.startX;
    const dy = point.clientY - draggingRef.current.startY;
    setTranslate({ x: draggingRef.current.baseX + dx, y: draggingRef.current.baseY + dy });
  }

  function endDrag() {
    draggingRef.current.active = false;
  }

  function zoomIn() {
    setScale((s) => Math.min(4, Number((s + 0.2).toFixed(2))));
  }

  function zoomOut() {
    setScale((s) => Math.max(1, Number((s - 0.2).toFixed(2))));
  }

  function resetView() {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} fullscreen`}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      onWheel={onWheel}
    >
      {/* Toolbar */}
      <div className="absolute top-3 right-3 flex gap-2 text-white">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          Open original
        </a>
        <button
          type="button"
          aria-label="Zoom out"
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            zoomOut();
          }}
        >
          −
        </button>
        <button
          type="button"
          aria-label="Reset zoom"
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            resetView();
          }}
        >
          100%
        </button>
        <button
          type="button"
          aria-label="Zoom in"
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            zoomIn();
          }}
        >
          +
        </button>
        <button
          type="button"
          aria-label="Close fullscreen"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
        >
          Close
        </button>
      </div>

      {/* Image stage */}
      <div
        className="relative w-auto h-[85vh] max-w-[95vw] overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={onMove}
        onTouchMove={onMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchEnd={endDrag}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{ transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`, transformOrigin: "center center" }}
          className="transition-transform will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            className="w-auto h-[85vh] max-w-none object-contain select-none"
            draggable={false}
            priority
          />
        </div>
      </div>
    </div>
  );
}


