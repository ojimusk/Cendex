import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function TradePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              BTC-PERP
            </h1>

            <div className="mt-3 flex gap-3">
              <Badge variant="green">
                Live
              </Badge>

              <Badge>
                Cross Margin
              </Badge>
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-400">
              Mark Price
            </p>

            <h2 className="text-4xl font-bold text-blue-500">
              $118,420
            </h2>
          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <Card>

              <div className="flex h-[500px] items-center justify-center rounded-xl border border-dashed border-white/10">

                <div className="text-center">

                  <h2 className="text-3xl font-bold">
                    Trading Chart
                  </h2>

                  <p className="mt-3 text-gray-500">
                    TradingView Chart will be added in Sprint 5.
                  </p>

                </div>

              </div>

            </Card>

          </div>

          <div>

            <Card>

              <h2 className="text-2xl font-bold">
                Trade
              </h2>

              <div className="mt-8 space-y-4">

                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-blue-500"
                />

                <input
                  type="number"
                  placeholder="Leverage"
                  className="w-full rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-blue-500"
                />

                <div className="flex gap-3">

                  <Button href="#">
                    Buy / Long
                  </Button>

                  <Button
                    href="#"
                    variant="secondary"
                  >
                    Sell / Short
                  </Button>

                </div>

              </div>

            </Card>

          </div>

        </div>

      </div>
    </main>
  );
}
