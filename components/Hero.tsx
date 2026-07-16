import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          Built on Hyperliquid
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Trade Perpetuals
          <br />
          <span className="text-blue-500">
            Faster Than Ever
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Modern decentralized perpetual exchange built for professional traders.
          Experience lightning-fast execution, intuitive trading, and secure
          self-custody powered by Hyperliquid.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button href="/trade">
            Launch App
          </Button>

          <Button
            href="/docs"
            variant="secondary"
          >
            Documentation
          </Button>
        </div>

      </div>

    </section>
  );
}
