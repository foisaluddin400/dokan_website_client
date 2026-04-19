"use client";

import React, { useState } from "react";
import { Package, Truck, CheckCircle, XCircle } from "lucide-react";

const ordersData = [
  {
    id: "#ORD-1001",
    title: "Wireless Headphones",
    price: 1200,
    status: "pending",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    date: "12 Apr 2026",
  },
  {
    id: "#ORD-1002",
    title: "Smart Watch",
    price: 1800,
    status: "delivered",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    date: "10 Apr 2026",
  },
  {
    id: "#ORD-1003",
    title: "Bluetooth Speaker",
    price: 900,
    status: "cancelled",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
    date: "08 Apr 2026",
  },
];

const tabs = ["all", "pending", "delivered", "cancelled"];

const Order = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? ordersData
      : ordersData.filter((o) => o.status === activeTab);

  const getStatusUI = (status: string) => {
    switch (status) {
      case "pending":
        return {
          color: "text-warning bg-warning-light",
          icon: <Truck size={14} />,
          label: "Pending",
        };
      case "delivered":
        return {
          color: "text-success bg-success-light",
          icon: <CheckCircle size={14} />,
          label: "Delivered",
        };
      case "cancelled":
        return {
          color: "text-error bg-error-light",
          icon: <XCircle size={14} />,
          label: "Cancelled",
        };
      default:
        return {
          color: "text-text bg-surface",
          icon: <Package size={14} />,
          label: "Processing",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 md:px-10 py-8">

      {/* HEADER */}
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-6">
        My Orders 📦
      </h1>

      {/* TABS */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-surface border border-border text-text-secondary hover:bg-surface-2"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ORDER LIST */}
      <div className="space-y-4">

        {filtered.length === 0 ? (
          <div className="bg-surface border border-border rounded-xl p-6 text-center text-text-secondary">
            No orders found 😢
          </div>
        ) : (
          filtered.map((order) => {
            const statusUI = getStatusUI(order.status);

            return (
              <div
                key={order.id}
                className="bg-surface border border-border rounded-xl p-4 shadow-soft flex flex-col md:flex-row gap-4 justify-between"
              >

                {/* LEFT */}
                <div className="flex gap-4">

                  <img
                    src={order.image}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-text">
                      {order.title}
                    </h3>

                    <p className="text-sm text-text-secondary mt-1">
                      Order ID: {order.id}
                    </p>

                    <p className="text-sm text-text-secondary">
                      Date: {order.date}
                    </p>

                    <p className="text-primary font-bold mt-2">
                      ৳ {order.price}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-between items-end">

                  {/* STATUS */}
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusUI.color}`}
                  >
                    {statusUI.icon}
                    {statusUI.label}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-2 mt-4 md:mt-0">

                    {order.status === "pending" && (
                      <>
                        <button className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                          Track
                        </button>

                        <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-surface-2 transition">
                          Cancel
                        </button>
                      </>
                    )}

                    {order.status === "delivered" && (
                      <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-surface-2 transition">
                        Buy Again
                      </button>
                    )}

                  </div>

                </div>

              </div>
            );
          })
        )}

      </div>
    </div>
  );
};

export default Order;