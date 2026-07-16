export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Markets</h1>

      <div className="mt-8 rounded-xl border border-gray-800">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400">
              <th>Pair</th>
              <th>Price</th>
              <th>24h</th>
              <th>Volume</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BTC</td>
              <td>$118,500</td>
              <td className="text-green-400">+2.4%</td>
              <td>$2.1B</td>
            </tr>

            <tr>
              <td>ETH</td>
              <td>$6,320</td>
              <td className="text-red-400">-1.2%</td>
              <td>$980M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
