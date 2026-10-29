import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; children: ReactNode };

export function AppLink({ to, children, onClick, ...props }: AppLinkProps) {
  return <Link to={to} onClick={onClick} {...props}>{children}</Link>;
}
