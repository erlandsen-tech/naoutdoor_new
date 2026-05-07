export type EventKind = "ski" | "bike";

export type EventInstance = {
  kind: EventKind;
  id: string;
  start: Date; // ISO-midnight UTC
  end: Date; // inclusive last day, midnight UTC
  title: string;
  subtitle: string;
  href: string;
  dateLabel: string;
  season: "Winter" | "Summer";
  location: string;
  /** CSS linear-gradient for the event card background */
  gradient: string;
  /** eyebrow meta color */
  metaColor: string;
  /** path to hero background image (for home hero) */
  heroImage: string;
  /** focal point for hero image (object-position) */
  heroFocal: string;
  cta: string;
  /** a short italic tagline used in the hero eyebrow, e.g. "21 years running" */
  tagline?: string;
};

/**
 * The upcoming event calendar. Add new instances here each year.
 * Future note: end dates are inclusive — an event stays "current" through its
 * final day (local time in Norway is close enough to UTC for display purposes).
 */
export const EVENTS: EventInstance[] = [
  {
    kind: "bike",
    id: "bike-2026",
    start: new Date("2026-08-28T00:00:00Z"),
    end: new Date("2026-08-30T23:59:59Z"),
    title: "Bike 2 Basic",
    subtitle: "Nature · Love · Fellowship",
    href: "/bike-2-basic",
    dateLabel: "Aug 28–30, 2026",
    season: "Summer",
    location: "Trysil",
    gradient:
      "linear-gradient(135deg, #5BA8B0 0%, #E87A3E 68%, #D94A3D 100%)",
    metaColor: "var(--color-cream)",
    heroImage: "/design/b2b-flyer-2026.png",
    heroFocal: "center 45%",
    cta: "View the route",
    tagline: "Ride through the Norwegian summer",
  },
  {
    kind: "ski",
    id: "ski-2027",
    start: new Date("2027-03-08T00:00:00Z"),
    end: new Date("2027-03-13T23:59:59Z"),
    title: "Ski & Recovery",
    subtitle: "Norway's longest-running annual NA event",
    href: "/ski-and-recovery",
    dateLabel: "Mar 8–13, 2027",
    season: "Winter",
    location: "Trysil",
    gradient:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    metaColor: "var(--color-gold-line)",
    heroImage: "/design/aurora-trysil.jpg",
    heroFocal: "center center",
    cta: "View the program",
    tagline: "21 years running",
  },
  {
    kind: "bike",
    id: "bike-2027",
    start: new Date("2027-08-28T00:00:00Z"),
    end: new Date("2027-08-30T23:59:59Z"),
    title: "Bike 2 Basic",
    subtitle: "Nature · Love · Fellowship",
    href: "/bike-2-basic",
    dateLabel: "Late August 2027",
    season: "Summer",
    location: "Trysil",
    gradient:
      "linear-gradient(135deg, #5BA8B0 0%, #E87A3E 68%, #D94A3D 100%)",
    metaColor: "var(--color-cream)",
    heroImage: "/design/b2b-flyer-2026.png",
    heroFocal: "center 45%",
    cta: "View the route",
    tagline: "Ride through the Norwegian summer",
  },
  {
    kind: "ski",
    id: "ski-2028",
    start: new Date("2028-03-06T00:00:00Z"),
    end: new Date("2028-03-11T23:59:59Z"),
    title: "Ski & Recovery",
    subtitle: "Norway's longest-running annual NA event",
    href: "/ski-and-recovery",
    dateLabel: "March 2028",
    season: "Winter",
    location: "Trysil",
    gradient:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    metaColor: "var(--color-gold-line)",
    heroImage: "/design/aurora-trysil.jpg",
    heroFocal: "center center",
    cta: "View the program",
    tagline: "21 years running",
  },
];

/**
 * Pick the "next up" event (the soonest one whose end date is still in the
 * future) plus the next event of the other kind for the secondary card.
 * An event counts as "still relevant" through its final day, so during
 * Ski & Recovery week itself, ski stays primary.
 */
export function getUpcomingEvents(now: Date = new Date()): {
  primary: EventInstance;
  secondary: EventInstance;
} {
  const nowMs = now.getTime();
  const relevant = EVENTS.filter((e) => e.end.getTime() >= nowMs).sort(
    (a, b) => a.start.getTime() - b.start.getTime(),
  );

  const primary = relevant[0] ?? EVENTS[EVENTS.length - 1];
  const otherKind: EventKind = primary.kind === "ski" ? "bike" : "ski";
  const secondary =
    relevant.find((e) => e.kind === otherKind) ??
    EVENTS.filter((e) => e.kind === otherKind).pop() ??
    EVENTS[0];

  return { primary, secondary };
}
