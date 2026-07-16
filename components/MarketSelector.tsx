"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import Card from "@/components/Card";

const markets = [
  "BTC-PERP",
  "ETH-PERP",
  "SOL-PERP",
  "XRP-PERP",
  "SUI-PERP",
  "DOGE-PERP",
];

export default function MarketSelector() {
  const [selected, setSelected] = useState("BTC-PERP");

  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Markets
      </h2>

      <div className="space-y-3">
        {markets.map((market) => (
          <button
            key={market}
            onClick={() => setSelected(market)}
            className={`flex w-full items-center justify-between rounded-xl border p-4 transition-all ${
              selected === market
                ? "border-blue-500 bg-blue-500/10"
                : "border-white/10 bg-black hover:border-blue-500"
            }`}
          >
            <span className="font-semibold text-white">
              {market}
            </span>

            {selected === market && (
              <Badge variant="green">
                Active
              </Badge>
            )}
          </button>
        ))}
      </div>
    </Card>
  );
}
