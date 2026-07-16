export default function ChartPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

      {/* Chart Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

        <div>
          <h2 className="text-2xl font-bold text-white">
            BTC-PERP Chart
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            15m • TradingView Integration (Coming Next)
          </p>
        </div>

        <div className="flex gap-2">
          {["1m", "5m", "15m", "1H", "4H", "1D"].map((timeframe) => (
            <button
              key={timeframe}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition hover:border-blue-500 hover:text-white"
            >
              {timeframe}
            </button>
          ))}
        </div>

      </div>

      {/* Chart Area */}
      <div className="flex h-[650px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-black">

        <div className="text-center">

          <div className="mb-4 text-6xl">
            📈
          </div>

          <h3 className="text-3xl font-bold text-white">
            TradingView Chart
          </h3>

          <p className="mt-3 text-gray-500">
            Widget akan diintegrasikan pada Sprint berikutnya.
          </p>

        </div>

      </div>

    </div>
  );
}
