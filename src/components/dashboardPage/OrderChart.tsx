
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 200 },
  { month: "Mar", orders: 180 },
  { month: "Apr", orders: 260 },
  { month: "May", orders: 300 },
  { month: "Jun", orders: 240 },
];

export default function OrderChart() {
  return (
    <div className="w-full h-[350px] bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Orders Overview
        </h2>
        <p className="text-sm text-gray-500">
          Monthly order performance
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={chartData}>
          
          <defs>
            <linearGradient id="orderColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B1EDB" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#5B2EFF" stopOpacity={0.6} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          />

          <Bar
            dataKey="orders"
            fill="url(#orderColor)"
            radius={[8, 8, 0, 0]}
            barSize={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}