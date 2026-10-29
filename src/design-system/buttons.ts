export const buttonVariants = {
  primary: "bg-ink text-surface hover:bg-ink/90",
  secondary: "bg-brand text-surface hover:bg-brand/90",
  outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-surface",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  light: "bg-surface text-ink hover:bg-paper",
} as const;

export const buttonSizes = {
  sm: "min-h-9 px-4 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-6 text-sm",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;
