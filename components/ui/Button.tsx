import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "success" | "danger" | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#5B8CFF] hover:opacity-90 text-white",
  success:
    "bg-[#00D084] hover:opacity-90 text-white",
  danger:
    "bg-[#FF5C5C] hover:opacity-90 text-white",
  ghost:
    "bg-transparent border border-[#2A2A2A] text-white hover:bg-[#1A1A1A]",
};

export function Button({
  variant = "primary",
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
