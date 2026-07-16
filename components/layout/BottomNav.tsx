"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  CandlestickChart,
  Trophy,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Markets",
    href: "/markets",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Trade",
    href: "/trade",
    icon: CandlestickChart,
  },
  {
    name: "Points",
    href: "/points",
    icon: Trophy,
  },
  {
    name: "Account",
    href: "/account",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-[#232323] bg-[#151515]">
      <div className="mx-auto flex max-w-md justify-between px-2 py-2">
        {menus.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-xs transition-colors",
                active
                  ? "text-[#5B8CFF]"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
