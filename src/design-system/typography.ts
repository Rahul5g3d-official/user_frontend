export const typography = {
  display: "font-sans text-5xl font-extrabold leading-[0.9] tracking-[-0.075em] sm:text-6xl lg:text-8xl",
  h1: "font-sans text-5xl font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-6xl lg:text-7xl",
  h2: "font-sans text-4xl font-extrabold leading-[0.96] tracking-[-0.06em] sm:text-5xl lg:text-6xl",
  h3: "font-sans text-2xl font-extrabold leading-tight tracking-[-0.045em]",
  body: "text-base leading-7",
  large: "text-lg leading-8",
  small: "text-sm leading-6",
  label: "text-xs font-extrabold uppercase tracking-[0.14em]",
  serif: "font-serif font-normal tracking-[-0.05em]",
} as const;

export type HeadingSize = "display" | "h1" | "h2" | "h3";
export type TextSize = "body" | "large" | "small";
