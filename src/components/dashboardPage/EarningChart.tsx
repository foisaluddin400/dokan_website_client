"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { date: "Apr 1", earning: 1200 },
  { date: "Apr 2", earning: 1800 },
  { date: "Apr 3", earning: 900 },
  { date: "Apr 4", earning: 2400 },
  { date: "Apr 5", earning: 3200 },
];

export default function EarningChart() {
  return (
    <div className="w-full h-[350px] bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Earnings Overview
        </h2>
        <p className="text-sm text-gray-500">
          Daily earning performance
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={chartData}>
          
          <defs>
            <linearGradient id="colorEarning" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5B2EFF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#5B2EFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="earning"
            stroke="#5B2EFF"
            fill="url(#colorEarning)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}