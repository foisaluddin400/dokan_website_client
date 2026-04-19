"use client";

import React, { useState } from "react";
import { Minus, Plus, Trash2, Tag, ShoppingBagIcon } from "lucide-react";

const initialCart = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1200,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 1800,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const delivery = 60;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen py-8">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm mb-4">
          <ShoppingBagIcon className="text-yellow-500" size={28} />
          <h1 className="text-4xl font-bold text-gray-900">Rewards Hub</h1>
        </div>
        <p className="text-text-secondary text-lg max-w-md mx-auto">
          Celebrate top referrers and sellers • Earn points by referring friends
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT - CART ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <div className="bg-surface border border-border rounded-xl p-6 text-center text-text-secondary">
              Your cart is empty 😢
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-surface border border-border rounded-xl p-4 shadow-soft"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-24 h-24 rounded-lg object-cover"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="font-semibold text-text">{item.title}</h3>

                  <p className="text-primary font-bold mt-1">৳ {item.price}</p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:bg-surface-2"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="text-sm font-medium">{item.quantity}</span>

                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:bg-surface-2"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-surface border border-border rounded-2xl p-5 h-fit shadow-soft">
          <h2 className="text-lg font-semibold text-text mb-4">
            Order Summary
          </h2>

          {/* COUPON */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center border border-border rounded-lg px-3 py-2 w-full">
              <Tag size={16} className="text-text-secondary" />
              <input
                placeholder="Coupon code"
                className="ml-2 w-full bg-transparent outline-none text-sm"
              />
            </div>

            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm">
              Apply
            </button>
          </div>

          {/* PRICE DETAILS */}
          <div className="space-y-2 text-sm text-text-secondary">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳ {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>৳ {delivery}</span>
            </div>

            <div className="border-t border-border pt-3 flex justify-between text-text font-semibold">
              <span>Total</span>
              <span>৳ {total}</span>
            </div>
          </div>

          {/* CHECKOUT */}
          <button className="mt-5 w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:bg-primary-dark transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
