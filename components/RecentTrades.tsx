import Card from "@/components/Card";

const trades = [
  {
    time: "10:24:31",
    price: "$118,421",
    size: "0.15 BTC",
    side: "BUY",
  },
  {
    time: "10:24:26",
    price: "$118,419",
    size: "0.42 BTC",
    side: "SELL",
  },
  {
    time: "10:24:18",
    price: "$118,420",
    size: "0.21 BTC",
    side: "BUY",
  },
  {
    time: "10:24:09",
    price: "$118,417",
    size: "0.87 BTC",
    side: "SELL",
  },
  {
    time: "10:24:02",
    price: "$118,416",
    size: "0.35 BTC",
    side: "BUY",
  },
];

export default function RecentTrades() {
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Trades
      </h2>

      <div className="space-y-3">
        {trades.map((trade, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-3"
          >
            <div>
              <p
                className={`font-semibold ${
                  trade.side === "BUY"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {trade.side}
              </p>

              <p className="text-xs text-gray-500">
                {trade.time}
              </p>
            </div>

            <div className="text-right">
              <p className="text-white">
                {trade.price}
              </p>

              <p className="text-sm text-gray-400">
                {trade.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
