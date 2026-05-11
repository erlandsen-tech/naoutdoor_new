import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

type ProgramItem = {
  time: string;
  title: string;
};

type ProgramDay = {
  weekday: string;
  date: string;
  items: ProgramItem[];
};

const DAYS: ProgramDay[] = [
  {
    weekday: "Friday",
    date: "28 August",
    items: [{ time: "20:00", title: "Evening meeting" }],
  },
  {
    weekday: "Saturday",
    date: "29 August",
    items: [
      { time: "09:00", title: "Morning meeting" },
      { time: "~11:00", title: "Cycling fun in the downhill / trail park" },
      { time: "18:00", title: "BBQ" },
      { time: "20:00", title: "Campfire meeting with speaker" },
    ],
  },
  {
    weekday: "Sunday",
    date: "30 August",
    items: [{ time: "11:00", title: "Morning meeting" }],
  },
];

export default function Program() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 sm:px-6">
      <div
        style={{
          paddingTop: "clamp(24px, 5vw, 48px)",
          paddingBottom: "clamp(16px, 3vw, 32px)",
        }}
      >
        <Link
          href="/bike-2-basic"
          aria-label="Back"
          className="label inline-flex items-center gap-2 text-espresso/70 hover:text-espresso"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <span>Bike 2 Basic</span>
        </Link>
        <div className="mt-4 text-center">
          <div
            className="label text-sunset"
            style={{ fontSize: "10.5px", letterSpacing: "0.28em" }}
          >
            Program · 2026
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
            A weekend of fellowship and activities in Trysil
          </h1>
        </div>
      </div>

      <ol className="flex flex-col gap-6 pb-10">
        {DAYS.map((day) => (
          <li
            key={day.weekday}
            className="rounded-[14px] border border-espresso/10 bg-white/70 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-6"
          >
            <div className="flex items-baseline justify-between gap-3 border-b border-espresso/10 pb-3">
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "var(--fs-title)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {day.weekday}
              </h2>
              <span
                className="label text-espresso/60"
                style={{ fontSize: "11px", letterSpacing: "0.2em" }}
              >
                {day.date}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {day.items.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className="flex items-baseline gap-4"
                >
                  <span
                    className="label shrink-0 text-sunset tabular-nums"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      minWidth: "4.5rem",
                    }}
                  >
                    {item.time}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: "var(--fs-body)",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
