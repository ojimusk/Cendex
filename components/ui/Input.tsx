import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({
  className,
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-xl border border-[#232323] bg-[#151515] px-4 py-3",
        "text-white placeholder:text-[#7A7A7A]",
        "outline-none transition-colors",
        "focus:border-[#5B8CFF]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
