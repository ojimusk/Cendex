export default function WhyCendex() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "Ultra-fast execution powered by Hyperliquid infrastructure.",
    },
    {
      title: "Deep Liquidity",
      desc: "Trade with tight spreads and professional liquidity.",
    },
    {
      title: "Secure",
      desc: "Built with modern blockchain security and transparency.",
    },
    {
      title: "Low Fees",
      desc: "Competitive trading fees for every trader.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Why Cendex?
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need for professional perpetual trading.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
    }
