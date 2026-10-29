import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode; width?: "default" | "reading" };
const widths = { default: "max-w-7xl", reading: "max-w-3xl" } as const;

export function Container({ children, className = "", width = "default", ...props }: ContainerProps) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${widths[width]} ${className}`} {...props}>{children}</div>;
}
