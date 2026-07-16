export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Built on Hyperliquid
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Trade Perpetuals
          <br />
          <span className="text-blue-500">
            Faster Than Ever
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Modern decentralized perpetual exchange with lightning-fast execution,
          deep liquidity, and professional trading experience.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">
            Launch App
          </button>

          <button className="rounded-xl border border-gray-700 px-6 py-3 text-white transition hover:border-gray-500">
            Documentation
          </button>
        </div>

      </div>
    </section>
  );
}
