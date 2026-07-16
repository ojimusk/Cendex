import Badge from "@/components/Badge";
import Card from "@/components/Card";

const positions = [
  {
    pair: "BTC-PERP",
    side: "LONG",
    size: "0.25 BTC",
    entry: "$117,800",
    pnl: "+$620",
  },
  {
    pair: "ETH-PERP",
    side: "SHORT",
    size: "2.5 ETH",
    entry: "$3,950",
    pnl: "-$84",
  },
];

export default function OpenPositions() {
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Open Positions
      </h2>

      <div className="space-y-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {position.pair}
                </h3>

                <p className="text-sm text-gray-400">
                  Size: {position.size}
                </p>
              </div>

              <Badge
                variant={
                  position.side === "LONG"
                    ? "green"
                    : "red"
                }
              >
                {position.side}
              </Badge>
            </div>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-400">
                Entry
              </span>

              <span className="text-white">
                {position.entry}
              </span>
            </div>

            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-400">
                Unrealized PnL
              </span>

              <span
                className={
                  position.pnl.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }
              >
                {position.pnl}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
            }
