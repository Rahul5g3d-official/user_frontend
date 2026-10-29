import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  buttonSizes,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "../../design-system/buttons";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingLabel?: string;
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
) {
  return `inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60 ${buttonSizes[size]} ${buttonVariants[variant]}`;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  loading = false,
  loadingLabel,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonClassName(variant, size)} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}
