"use client";

import { useCallback, useEffect, useState } from "react";

const SCALE_STEPS = [0.9, 1.0, 1.15, 1.3, 1.5, 1.75, 2.0] as const;
const DEFAULT_INDEX = 1;
const STORAGE_KEY = "naoutdoor:reading-font-scale";
const CSS_VAR = "--reading-font-size";

function applyScale(scale: number) {
  document.documentElement.style.setProperty(CSS_VAR, String(scale));
}

function readStoredIndex(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return DEFAULT_INDEX;
    const parsed = Number.parseInt(raw, 10);
    if (Number.isNaN(parsed) || parsed < 0 || parsed >= SCALE_STEPS.length) {
      return DEFAULT_INDEX;
    }
    return parsed;
  } catch {
    return DEFAULT_INDEX;
  }
}

export default function TextSizeControl() {
  const [index, setIndex] = useState(DEFAULT_INDEX);

  useEffect(() => {
    const stored = readStoredIndex();
    setIndex(stored);
    applyScale(SCALE_STEPS[stored]);
  }, []);

  const update = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(SCALE_STEPS.length - 1, next));
    setIndex(clamped);
    applyScale(SCALE_STEPS[clamped]);
    try {
      localStorage.setItem(STORAGE_KEY, String(clamped));
    } catch {
      // ignore (private mode, etc.)
    }
  }, []);

  const atMin = index === 0;
  const atMax = index === SCALE_STEPS.length - 1;
  const percent = Math.round(SCALE_STEPS[index] * 100);

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-espresso/15 bg-white/70 px-1 py-1 backdrop-blur-md shadow-[0_2px_8px_rgba(31,22,17,0.05)]"
      role="group"
      aria-label="Text size"
    >
      <button
        type="button"
        onClick={() => update(index - 1)}
        disabled={atMin}
        aria-label="Decrease text size"
        className="flex h-7 w-7 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5 disabled:cursor-not-allowed disabled:opacity-30 sm:h-8 sm:w-8"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        A−
      </button>
      <span
        className="label min-w-[3ch] px-1 text-center text-espresso/60 tabular-nums"
        style={{ fontSize: "9.5px", letterSpacing: "0.08em" }}
        aria-live="polite"
      >
        {percent}%
      </span>
      <button
        type="button"
        onClick={() => update(index + 1)}
        disabled={atMax}
        aria-label="Increase text size"
        className="flex h-7 w-7 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5 disabled:cursor-not-allowed disabled:opacity-30 sm:h-8 sm:w-8"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        A+
      </button>
    </div>
  );
}
