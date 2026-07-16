import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "blue" | "green" | "red" | "yellow";
};

export default function Badge({
  children,
  variant = "blue",
}: BadgeProps) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    green: "bg-green-500/10 text-green-400 border-green-500/30",
    red: "bg-red-500/10 text-red-400 border-red-500/30",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
