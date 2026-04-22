type IconProps = { size?: number; className?: string };

const base = (
  size: number,
): React.SVGProps<SVGSVGElement> & { viewBox: string } => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export function IconHome({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5z" />
    </svg>
  );
}

export function IconSki({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 20l18-14M5 20l15-2" />
      <circle cx="17" cy="5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBike({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="6" cy="17" r="3.5" />
      <circle cx="18" cy="17" r="3.5" />
      <path d="M6 17l4-7h5l3 7M10 10l-2-3h3M15 10V6h2" />
    </svg>
  );
}

export function IconBook({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4h5A2 2 0 0 1 12.5 6v13.5a1.5 1.5 0 0 0-1.5-1.5H4V5.5z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5h-5A2 2 0 0 0 11.5 6v13.5a1.5 1.5 0 0 1 1.5-1.5h7V5.5z" />
    </svg>
  );
}

export function IconHeart({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 20s-7-4.5-9-9.5a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-1 4-8 9.5-9 9.5z" />
    </svg>
  );
}

export const NAV_ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  home: IconHome,
  ski: IconSki,
  bike: IconBike,
  readings: IconBook,
  donate: IconHeart,
};
