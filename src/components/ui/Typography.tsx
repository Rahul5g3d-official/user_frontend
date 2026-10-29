import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import {
  typography,
  type HeadingSize,
  type TextSize,
} from "../../design-system/typography";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: HeadingSize;
  tone?: "default" | "inverse" | "brand";
};

const headingElements = { 1: "h1", 2: "h2", 3: "h3" } as const;
const headingTones = {
  default: "text-ink",
  inverse: "text-surface",
  brand: "text-brand",
} as const;

export function Heading({
  children,
  className = "",
  level = 2,
  size,
  tone = "default",
  ...props
}: HeadingProps) {
  const Element = headingElements[level];
  return (
    <Element
      className={`${typography[size ?? `h${level}`]} ${headingTones[tone]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  size?: TextSize;
  tone?: "default" | "muted" | "inverse";
};

const textTones = {
  default: "text-ink",
  muted: "text-muted",
  inverse: "text-surface/80",
} as const;

export function Text({
  children,
  className = "",
  size = "body",
  tone = "muted",
  ...props
}: TextProps) {
  return (
    <p
      className={`${typography[size]} ${textTones[tone]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

type LabelProps = (
  HTMLAttributes<HTMLSpanElement> | LabelHTMLAttributes<HTMLLabelElement>
) & {
  children: ReactNode;
  tone?: "brand" | "default" | "inverse";
  as?: "span" | "label";
};
const labelTones = {
  brand: "text-brand",
  default: "text-ink",
  inverse: "text-brand-soft",
} as const;

export function Label({
  children,
  className = "",
  tone = "brand",
  as = "span",
  ...props
}: LabelProps) {
  const Element = as;
  return (
    <Element
      className={`${typography.label} ${labelTones[tone]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
