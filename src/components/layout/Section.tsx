import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  width?: "default" | "reading";
  flush?: boolean;
};

export function Section({
  children,
  className = "",
  width = "default",
  flush = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${flush ? "" : "py-16 sm:py-24 lg:py-32"} ${className}`}
      {...props}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
