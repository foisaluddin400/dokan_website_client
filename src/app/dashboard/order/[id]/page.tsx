"use client";

import NavigatePage from "@/components/NavigatePage";
import React from "react";

const order = {
  id: "ORD-1001",
  customer: {
    name: "Rakibul Islam",
    phone: "+8801700000000",
    address: "Dhaka, Bangladesh",
  },
  status: "Delivered",
  payment: "Paid",
  date: "2026-04-20",
  items: [
    {
      name: "Wireless Headphones",
      price: 1500,
      qty: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      name: "Smart Watch",
      price: 1000,
      qty: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ],
};

const OrderDetails = () => {
  const subtotal = order.items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const delivery = 100;
  const total = subtotal + delivery;

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">

      {/* Header */}
      <NavigatePage title="Order Details" />

      <div className="grid lg:grid-cols-3 gap-4">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">

          {/* Items */}
          <div className="bg-white border border-border rounded-2xl p-4">
            <h2 className="font-semibold mb-4">Items</h2>

            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 mb-4"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium text-text">
                    {item.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    Qty: {item.qty}
                  </p>
                </div>

                <p className="font-semibold text-text">
                  ৳ {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Customer */}
          <div className="bg-white border border-border rounded-2xl p-4">
            <h2 className="font-semibold mb-3">Customer Info</h2>

            <p className="text-sm text-text">
              {order.customer.name}
            </p>
            <p className="text-sm text-text-secondary">
              {order.customer.phone}
            </p>
            <p className="text-sm text-text-secondary">
              {order.customer.address}
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* Summary */}
          <div className="bg-white border border-border rounded-2xl p-4">
            <h2 className="font-semibold mb-4">Summary</h2>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>৳ {subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Delivery</span>
              <span>৳ {delivery}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>৳ {total}</span>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white border border-border rounded-2xl p-4">
            <h2 className="font-semibold mb-3">Status</h2>

            <p className="text-sm text-text mb-1">
              Order: {order.status}
            </p>

            <p className="text-sm text-text-secondary">
              Payment: {order.payment}
            </p>

            <p className="text-xs text-text-muted mt-2">
              Date: {order.date}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderDetails;