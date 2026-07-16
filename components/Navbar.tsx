"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-white"
          >
            Cendex
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 text-gray-300 md:flex">
            <Link href="/markets" className="transition hover:text-white">
              Markets
            </Link>

            <Link href="/trade" className="transition hover:text-white">
              Trade
            </Link>

            <Link href="/portfolio" className="transition hover:text-white">
              Portfolio
            </Link>

            <Link href="/leaderboard" className="transition hover:text-white">
              Leaderboard
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200">
              Connect Wallet
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-gray-700 p-3 text-white md:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-20 left-0 z-40 w-full border-b border-white/10 bg-black md:hidden">
          <div className="flex flex-col p-6">

            <Link
              href="/markets"
              onClick={() => setOpen(false)}
              className="py-4 text-lg text-gray-300 hover:text-white"
            >
              Markets
            </Link>

            <Link
              href="/trade"
              onClick={() => setOpen(false)}
              className="py-4 text-lg text-gray-300 hover:text-white"
            >
              Trade
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="py-4 text-lg text-gray-300 hover:text-white"
            >
              Portfolio
            </Link>

            <Link
              href="/leaderboard"
              onClick={() => setOpen(false)}
              className="py-4 text-lg text-gray-300 hover:text-white"
            >
              Leaderboard
            </Link>

          </div>
        </div>
      )}
    </>
  );
}
