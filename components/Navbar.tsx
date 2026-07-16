export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
      <h1 className="text-2xl font-bold text-white">Cendex</h1>

      <div className="hidden gap-6 text-gray-400 md:flex">
        <a href="/markets">Markets</a>
        <a href="/trade">Trade</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/leaderboard">Leaderboard</a>
      </div>

      <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black">
        Connect Wallet
      </button>
    </nav>
  );
}
