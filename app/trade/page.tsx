export default function TradePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold">
        Trade
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2 rounded-xl border border-gray-800 h-[600px] flex items-center justify-center">
          TradingView Chart
        </div>

        <div className="rounded-xl border border-gray-800 p-6">
          Order Panel
        </div>

      </div>

    </main>
  );
}
