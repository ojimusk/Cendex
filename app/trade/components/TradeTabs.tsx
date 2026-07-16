"use client";

import { useState } from "react";
import ChartPanel from "./ChartPanel";
import OrderBook from "./OrderBook";
import RecentTrades from "./RecentTrades";
import Positions from "./Positions";

const tabs = [
  "Chart",
  "Order Book",
  "Trades",
  "Positions",
] as const;

type Tab = (typeof tabs)[number];

export default function TradeTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Chart");

  return (
    <div className="mt-8">

      {/* Tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto rounded-xl border border-white/10 bg-[#111] p-2">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-lg px-5 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Content */}
      {activeTab === "Chart" && <ChartPanel />}

      {activeTab === "Order Book" && <OrderBook />}

      {activeTab === "Trades" && <RecentTrades />}

      {activeTab === "Positions" && <Positions />}
    </div>
  );
}
