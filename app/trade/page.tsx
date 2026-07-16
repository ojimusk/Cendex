import MarketList from "./components/MarketList";
import TradeForm from "./components/TradeForm";
import TradeTabs from "./components/TradeTabs";

export default function TradePage() {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h1 className="text-5xl font-bold">BTC-PERP</h1>

            <div className="mt-3 flex gap-3">
              <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
                Live
              </span>

              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400">
                Cross Margin
              </span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-400">Mark Price</p>
            <h2 className="text-5xl font-bold text-blue-500">
              $118,420
            </h2>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-12">

          {/* Market List */}
          <div className="lg:col-span-3">
            <MarketList />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <TradeTabs />
          </div>

          {/* Trade Form */}
          <div className="lg:col-span-3">
            <TradeForm />
          </div>

        </div>

      </div>
    </main>
  );
}
