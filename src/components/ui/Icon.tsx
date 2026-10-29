type IconName =
  "arrow" | "check" | "plus" | "mail" | "pin" | "heart" | "menu" | "close";

type IconProps = { name: IconName; size?: number };

export function Icon({ name, size = 18 }: IconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "arrow")
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  if (name === "check")
    return (
      <svg {...props}>
        <path d="m5 12 4.3 4.3L19 7" />
      </svg>
    );
  if (name === "plus")
    return (
      <svg {...props}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg {...props}>
        <path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  if (name === "heart")
    return (
      <svg {...props}>
        <path d="M20.8 8.6c0 5.3-8.8 10.5-8.8 10.5S3.2 13.9 3.2 8.6A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.3Z" />
      </svg>
    );
  if (name === "close")
    return (
      <svg {...props}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  return (
    <svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
