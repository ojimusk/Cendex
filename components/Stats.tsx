import Card from "@/components/Card";

export default function Stats() {
  const stats = [
    {
      value: "$1B+",
      label: "Trading Volume",
    },
    {
      value: "120K+",
      label: "Active Traders",
    },
    {
      value: "150+",
      label: "Markets",
    },
    {
      value: "<100ms",
      label: "Order Execution",
    },
  ];

  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Trusted by Traders
          </h2>

          <p className="mt-4 text-gray-400">
            Built for speed, reliability, and professional trading.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label}>
              <h3 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
