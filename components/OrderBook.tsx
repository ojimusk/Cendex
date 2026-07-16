import Card from "@/components/Card";

const buyOrders = [
  { price: "118,420", size: "0.52 BTC" },
  { price: "118,418", size: "0.35 BTC" },
  { price: "118,415", size: "1.10 BTC" },
  { price: "118,410", size: "0.87 BTC" },
];

const sellOrders = [
  { price: "118,425", size: "0.41 BTC" },
  { price: "118,430", size: "0.72 BTC" },
  { price: "118,435", size: "1.28 BTC" },
  { price: "118,440", size: "0.63 BTC" },
];

export default function OrderBook() {
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Order Book
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <h3 className="mb-3 text-green-400 font-semibold">
            Buy Orders
          </h3>

          <div className="space-y-3">
            {buyOrders.map((order, index) => (
              <div
                key={index}
                className="flex justify-between rounded-lg bg-green-500/5 p-3"
              >
                <span className="text-green-400">
                  ${order.price}
                </span>

                <span className="text-gray-400">
                  {order.size}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-red-400 font-semibold">
            Sell Orders
          </h3>

          <div className="space-y-3">
            {sellOrders.map((order, index) => (
              <div
                key={index}
                className="flex justify-between rounded-lg bg-red-500/5 p-3"
              >
                <span className="text-red-400">
                  ${order.price}
                </span>

                <span className="text-gray-400">
                  {order.size}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );
}
