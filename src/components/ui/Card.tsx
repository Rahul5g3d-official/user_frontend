import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & { children: ReactNode; tone?: "surface" | "paper" | "ink" | "tint" };
const tones = { surface: "bg-surface", paper: "bg-paper", ink: "bg-ink text-surface", tint: "bg-tint" } as const;

export function Card({ children, className = "", tone = "surface", ...props }: CardProps) {
  return <article className={`rounded-card ${tones[tone]} ${className}`} {...props}>{children}</article>;
}
