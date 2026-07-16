export default function Assets() {
  const assets = [
    "BTC",
    "ETH",
    "SOL",
    "BNB",
    "XRP",
    "DOGE",
    "ARB",
    "SUI",
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Supported Assets
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {assets.map((asset) => (
            <div
              key={asset}
              className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-2xl font-bold text-white transition hover:border-blue-500 hover:bg-blue-500/10"
            >
              {asset}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
