import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <span className="inline-block rounded-full border border-blue-500 px-4 py-2 text-blue-400">
          Built on Hyperliquid
        </span>

        <h1 className="mt-8 text-5xl font-extrabold">
          Trade Perpetuals
          <br />
          <span className="text-blue-500">
            Faster Than Ever
          </span>
        </h1>

        <p className="mt-6 text-gray-400">
          Modern decentralized perpetual exchange with lightning-fast execution,
          deep liquidity, and professional trading experience.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/trade"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold"
          >
            Launch App
          </Link>

          <Link
            href="/docs"
            className="rounded-xl border border-gray-700 px-6 py-3"
          >
            Documentation
          </Link>
        </div>

      </div>
    </section>
  );
}
