import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
