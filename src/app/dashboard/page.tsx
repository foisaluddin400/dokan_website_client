"use client";

import React from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  Package, 
  Eye, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import EarningChart from '@/components/dashboardPage/EarningChart';
import OrderChart from '@/components/dashboardPage/OrderChart';

const DashboardHome = () => {
  // Sample Data
  const stats = [
    {
      title: "Total Income",
      value: "৳ 1,24,850",
      change: "+18.2%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-emerald-600"
    },
    {
      title: "Total Sales",
      value: "1,284",
      change: "+12.5%",
      isPositive: true,
      icon: ShoppingBag,
      color: "text-blue-600"
    },
    {
      title: "Total Products",
      value: "87",
      change: "-2",
      isPositive: false,
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Impressions",
      value: "45.2K",
      change: "+24.8%",
      isPositive: true,
      icon: Eye,
      color: "text-amber-600"
    },
  ];

  const recentOrders = [
    { id: "#ORD-7842", customer: "Rakibul Islam", product: "Wireless Headphones", amount: "৳ 2,500", status: "Delivered" },
    { id: "#ORD-7841", customer: "Ayesha Khan", product: "Smart Watch Series X", amount: "৳ 4,200", status: "Processing" },
    { id: "#ORD-7840", customer: "Samiul Hoque", product: "Nike Running Shoes", amount: "৳ 3,150", status: "Shipped" },
    { id: "#ORD-7839", customer: "Nadia Rahman", product: "Bluetooth Speaker", amount: "৳ 1,800", status: "Delivered" },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rakibul 👋</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your business today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-2xl bg-gray-100 ${stat.color.replace('text', 'bg')}/10`}>
                <stat.icon size={28} className={stat.color} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.change}
                {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Earning Overview Chart Area */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-gray-100">
         <EarningChart></EarningChart>
        </div>

        {/* Order Status */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-100">
       <OrderChart></OrderChart>
        </div>

        {/* Recent Orders Table */}
        <div className="lg:col-span-12 bg-white rounded-3xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="text-indigo-600 text-sm font-medium hover:underline">View All Orders →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 font-medium text-gray-500 text-sm">Order ID</th>
                  <th className="text-left py-4 font-medium text-gray-500 text-sm">Customer</th>
                  <th className="text-left py-4 font-medium text-gray-500 text-sm">Product</th>
                  <th className="text-right py-4 font-medium text-gray-500 text-sm">Amount</th>
                  <th className="text-center py-4 font-medium text-gray-500 text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="py-5 font-medium text-gray-900">{order.id}</td>
                    <td className="py-5 text-gray-700">{order.customer}</td>
                    <td className="py-5 text-gray-600">{order.product}</td>
                    <td className="py-5 text-right font-semibold text-gray-900">{order.amount}</td>
                    <td className="py-5 text-center">
                      <span className={`inline-block px-4 py-1 rounded-full text-xs font-medium
                        ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 
                          'bg-amber-100 text-amber-700'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;