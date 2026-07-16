import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[160px]" />
    </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
          Built on Hyperliquid
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Trade Perpetuals
          <br />
          <span className="text-blue-500">
            Faster Than Ever
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Modern decentralized perpetual exchange with lightning-fast execution,
          deep liquidity, and professional trading experience.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="/trade"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
          >
            Launch App
          </Link>

          <Link
            href="/docs"
            className="rounded-xl border border-gray-700 px-8 py-4 text-lg text-white transition duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            Documentation
          </Link>

        </div>

      </div>

    </section>
  );
}
