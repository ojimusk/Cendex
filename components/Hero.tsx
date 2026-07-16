import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          Built on Hyperliquid
        </div>

        <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
          Trade Perpetuals
          <br />
          <span className="text-blue-500">
            Faster Than Ever
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Modern decentralized perpetual exchange with lightning-fast
          execution, deep liquidity, and professional trading experience.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/trade"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            Launch App
          </Link>

          <Link
            href="/docs"
            className="rounded-xl border border-gray-700 px-8 py-4 text-lg text-white transition hover:border-blue-500"
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
