import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300";

  const primaryClass =
    "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105";

  const secondaryClass =
    "border border-white/10 bg-white/5 text-white hover:border-blue-500 hover:bg-white/10 hover:scale-105";

  return (
    <Link
      href={href}
      className={`${baseClass} ${
        variant === "primary" ? primaryClass : secondaryClass
      }`}
    >
      {children}
    </Link>
  );
}
