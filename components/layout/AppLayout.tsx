import type { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <main className="mx-auto w-full max-w-md px-4 pt-4 pb-24">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
