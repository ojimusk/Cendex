export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-bold text-white">
          Cendex
        </h1>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Markets</a>
          <a href="#">Trade</a>
          <a href="#">Portfolio</a>
          <a href="#">Leaderboard</a>
        </nav>

        <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black transition hover:opacity-90">
          Connect Wallet
        </button>

      </div>
    </header>
  );
}
