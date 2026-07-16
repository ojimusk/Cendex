"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Cendex
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#" className="hover:text-white transition">
            Markets
          </a>
          <a href="#" className="hover:text-white transition">
            Trade
          </a>
          <a href="#" className="hover:text-white transition">
            Portfolio
          </a>
          <a href="#" className="hover:text-white transition">
            Leaderboard
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black hover:bg-gray-200 transition">
            Connect Wallet
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="flex flex-col px-6 py-4 text-gray-300">
            <a
              href="#"
              className="py-3 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Markets
            </a>

            <a
              href="#"
              className="py-3 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Trade
            </a>

            <a
              href="#"
              className="py-3 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>

            <a
              href="#"
              className="py-3 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
