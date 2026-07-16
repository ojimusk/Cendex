export default function TradePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold">Cendex Trade</h1>

          <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Trading Layout */}
      <div className="mx-auto grid max-w-7xl gap-4 p-6 lg:grid-cols-12">

        {/* Chart */}
        <div className="col-span-12 rounded-2xl border border-white/10 bg-zinc-900 p-4 lg:col-span-8">
          <h2 className="mb-4 text-lg font-semibold">
            Trading Chart
          </h2>

          <div className="flex h-[500px] items-center justify-center rounded-xl bg-black text-gray-500">
            TradingView Chart (Coming Soon)
          </div>
        </div>

        {/* Order Panel */}
        <div className="col-span-12 rounded-2xl border border-white/10 bg-zinc-900 p-4 lg:col-span-4">

          <h2 className="mb-6 text-lg font-semibold">
            Place Order
          </h2>

          <div className="space-y-4">

            <input
              placeholder="Price"
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />

            <input
              placeholder="Amount"
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />

            <button className="w-full rounded-lg bg-green-500 py-3 font-semibold">
              Buy
            </button>

            <button className="w-full rounded-lg bg-red-500 py-3 font-semibold">
              Sell
            </button>

          </div>

        </div>

        {/* Order Book */}
        <div className="col-span-12 rounded-2xl border border-white/10 bg-zinc-900 p-4 lg:col-span-6">

          <h2 className="mb-4 text-lg font-semibold">
            Order Book
          </h2>

          <div className="flex h-64 items-center justify-center rounded-lg bg-black text-gray-500">
            Order Book
          </div>

        </div>

        {/* Recent Trades */}
        <div className="col-span-12 rounded-2xl border border-white/10 bg-zinc-900 p-4 lg:col-span-6">

          <h2 className="mb-4 text-lg font-semibold">
            Recent Trades
          </h2>

          <div className="flex h-64 items-center justify-center rounded-lg bg-black text-gray-500">
            Recent Trades
          </div>

        </div>

      </div>
    </main>
  );
          }
