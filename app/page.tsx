export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-bold">
          Cendex
        </h1>

        <p className="mt-6 max-w-xl text-gray-400 text-lg">
          Modern Perpetual DEX built on Hyperliquid.
          Trade crypto with lightning-fast execution,
          deep liquidity, and a beautiful interface.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
            Launch App
          </button>

          <button className="rounded-xl border border-gray-600 px-6 py-3">
            Documentation
          </button>
        </div>

      </div>
    </main>
  );
}
