import Badge from "@/components/Badge";
import Card from "@/components/Card";

const markets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$118,420",
    change: "+2.54%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,920",
    change: "+1.82%",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$192",
    change: "+5.31%",
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$2.74",
    change: "-1.24%",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: "$0.26",
    change: "+3.44%",
  },
  {
    symbol: "SUI",
    name: "Sui",
    price: "$4.12",
    change: "+7.13%",
  },
];

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-bold">
          Markets
        </h1>

        <p className="mt-4 text-gray-400">
          Explore perpetual markets available on Cendex.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <Card key={market.symbol}>
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    {market.symbol}
                  </h2>

                  <p className="text-gray-400">
                    {market.name}
                  </p>
                </div>

                <Badge
                  variant={
                    market.change.startsWith("-")
                      ? "red"
                      : "green"
                  }
                >
                  {market.change}
                </Badge>

              </div>

              <div className="mt-8 text-3xl font-bold">
                {market.price}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
}
