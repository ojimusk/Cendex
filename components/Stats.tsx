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

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
