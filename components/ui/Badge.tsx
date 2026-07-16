import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "primary"
  | "success"
  | "danger"
  | "bronze"
  | "silver"
  | "gold"
  | "diamond"
  | "master"
  | "legend";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-[#5B8CFF]/20 text-[#5B8CFF]",
  success: "bg-[#00D084]/20 text-[#00D084]",
  danger: "bg-[#FF5C5C]/20 text-[#FF5C5C]",
  bronze: "bg-[#8C6239]/20 text-[#C68C53]",
  silver: "bg-[#9CA3AF]/20 text-[#E5E7EB]",
  gold: "bg-[#F59E0B]/20 text-[#FCD34D]",
  diamond: "bg-[#06B6D4]/20 text-[#67E8F9]",
  master: "bg-[#8B5CF6]/20 text-[#C4B5FD]",
  legend: "bg-[#EF4444]/20 text-[#FCA5A5]",
};

export function Badge({
  variant = "primary",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
