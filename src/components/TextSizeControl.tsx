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
      className="fixed top-20 right-3 z-30 flex items-center gap-1 rounded-full border border-gray-300 bg-white/95 px-1 py-1 shadow-md dark:border-gray-700 dark:bg-gray-900/95"
      role="group"
      aria-label="Text size"
    >
      <button
        type="button"
        onClick={() => update(index - 1)}
        disabled={atMin}
        aria-label="Decrease text size"
        className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-gray-800 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-100 dark:hover:bg-gray-800"
      >
        A−
      </button>
      <span
        className="min-w-[3ch] text-center text-xs tabular-nums text-gray-600 dark:text-gray-300"
        aria-live="polite"
      >
        {percent}%
      </span>
      <button
        type="button"
        onClick={() => update(index + 1)}
        disabled={atMax}
        aria-label="Increase text size"
        className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-gray-800 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-100 dark:hover:bg-gray-800"
      >
        A+
      </button>
    </div>
  );
}
