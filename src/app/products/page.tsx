"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

const colors = {
  primary: "#5B2EFF",
  primaryDark: "#3B1EDB",
  text: "#0F172A",
  textSecondary: "#475569",
  border: "#E2E8F0",
  surface: "#F8F9FB",
  accentGold: "#F7C948",
};

const products = [
  {
    title: "Wireless Headphones Pro",
    price: 2500,
    rating: 4.8,
    sold: 1200,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Tech World",
      logo: "https://i.pravatar.cc/100?img=1",
    },
    description:
      "Premium noise-cancelling wireless headphones with 40-hour battery life, deep bass, and comfortable over-ear design. Perfect for music lovers and professionals who need high-quality sound.",
  },
  {
    title: "Smart Watch Series X",
    price: 4500,
    rating: 4.7,
    sold: 980,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Gadget Zone",
      logo: "https://i.pravatar.cc/100?img=4",
    },
    description:
      "Advanced smartwatch with health monitoring, GPS tracking, long battery life and beautiful AMOLED display. Stay connected and track your fitness goals easily.",
  },
  {
    title: "Nike Running Shoes",
    price: 3200,
    rating: 4.6,
    sold: 1500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Fashion Hub",
      logo: "https://i.pravatar.cc/100?img=2",
    },
    description:
      "Lightweight and comfortable Nike running shoes with excellent cushioning and breathable mesh upper. Ideal for daily training and long distance runs.",
  },
  {
    title: "Bluetooth Speaker",
    price: 1800,
    rating: 4.9,
    sold: 2100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Sound Store",
      logo: "https://i.pravatar.cc/100?img=5",
    },
    description:
      "Portable waterproof Bluetooth speaker with powerful 360° sound, deep bass, and 20-hour playtime. Perfect for parties, travel, and outdoor adventures.",
  },
];

const Products = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleDescription = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="container mx-auto min-h-screen px-4 md:px-10 py-10"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* FILTER */}
        <div
          className="bg-white rounded-2xl p-5 h-fit sticky top-20"
          style={{
            border: `1px solid ${colors.border}`,
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: colors.text }}
          >
            Filters
          </h2>

          <div className="space-y-2 text-sm">
            <label style={{ color: colors.textSecondary }} className="flex gap-2">
              <input type="checkbox" /> Electronics
            </label>
            <label style={{ color: colors.textSecondary }} className="flex gap-2">
              <input type="checkbox" /> Fashion
            </label>
            <label style={{ color: colors.textSecondary }} className="flex gap-2">
              <input type="checkbox" /> Home
            </label>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {products.map((product, index) => {
              const isExpanded = expanded[index];
              const shortDesc =
                product.description.split(" ").slice(0, 20).join(" ") + "...";

              return (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.border}`,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden m-3 rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">

                    {/* STORE */}
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src={product.store.logo}
                        className="w-6 h-6 rounded-full border"
                        style={{ borderColor: colors.border }}
                      />
                      <span
                        className="text-xs truncate"
                        style={{ color: colors.textSecondary }}
                      >
                        {product.store.name}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="font-semibold text-sm mb-2 min-h-[42px]"
                      style={{ color: colors.text }}
                    >
                      {product.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="text-xs mb-4 leading-relaxed"
                      style={{ color: colors.textSecondary }}
                    >
                      {isExpanded ? product.description : shortDesc}
                      <button
                        onClick={() => toggleDescription(index)}
                        className="ml-1 font-medium"
                        style={{ color: colors.primary }}
                      >
                        {isExpanded ? " See less" : " See more"}
                      </button>
                    </p>

                    {/* RATING */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} style={{ color: colors.accentGold }} />
                        <span>{product.rating}</span>
                      </div>
                      <span style={{ color: colors.textSecondary }}>
                        {product.sold} sold
                      </span>
                    </div>

                    {/* PRICE */}
                    <p
                      className="font-bold text-lg"
                      style={{ color: colors.primary }}
                    >
                      ৳ {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;