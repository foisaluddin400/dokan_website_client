"use client";

import React from "react";
import { ShoppingCart, Package } from "lucide-react";

type Product = {
  title: string;
  price: number;
  originalPrice: number;
  moq: number;
  discount: string;
  image: string;
  supplier: string;
  location: string;
};

const wholesaleProducts: Product[] = [
  {
    title: "Wireless Headphones",
    price: 1200,
    originalPrice: 1800,
    moq: 20,
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    supplier: "Tech World",
    location: "Dhaka",
  },
  {
    title: "Smart Watch",
    price: 1800,
    originalPrice: 2500,
    moq: 15,
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    supplier: "Gadget Zone",
    location: "Chattogram",
  },
  {
    title: "Bluetooth Speaker",
    price: 900,
    originalPrice: 1400,
    moq: 25,
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
    supplier: "Sound Store",
    location: "Dhaka",
  },
  {
    title: "Gaming Headset",
    price: 1500,
    originalPrice: 2100,
    moq: 10,
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    supplier: "Gaming Hub",
    location: "Sylhet",
  },
];

const WholesaleSection: React.FC = () => {
  return (
    <section className="   ">

  <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-10 bg-accent-gold rounded-sm" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
            Wholesales
          </h1>
          <p className="text-gray-400 text-sm"> Discover the most Wholesellers loved by our customers</p>
          </div>
        </div>
      </div>
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wholesaleProducts.map((product, index) => (
          <div
            key={index}
            className="group rounded-xl bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden m-3 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* DISCOUNT BADGE */}
              <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-primary text-white">
                {product.discount}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-3">

              {/* TITLE */}
              <h3 className="text-sm font-semibold text-text line-clamp-1">
                {product.title}
              </h3>

              {/* PRICE */}
              <div className="mt-1">
                <span className="text-primary font-bold text-sm">
                  ৳ {product.price} / pcs
                </span>
                <span className="ml-2 text-xs line-through text-text-muted">
                  ৳ {product.originalPrice}
                </span>
              </div>

              {/* MOQ */}
              <p className="text-xs text-text-secondary mt-1">
                Min Order: {product.moq} pcs
              </p>

              {/* SUPPLIER */}
              <div className="flex items-center justify-between mt-3 text-xs text-text-secondary">
                <span>{product.supplier}</span>
                <span>{product.location}</span>
              </div>

              {/* ACTION */}
              <button className="mt-3 w-full py-3 text-xs rounded-lg bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center gap-1 hover:bg-primary transition">
                <ShoppingCart size={14} /> Order Bulk
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* CTA BANNER */}
      <div className="mt-10 rounded-2xl p-6 bg-gradient-to-r from-primary to-secondary text-white flex flex-col md:flex-row items-center justify-between">

        <div>
          <h3 className="text-lg md:text-xl font-bold">
            Start Your Wholesale Business 🚀
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Buy in bulk, resell easily & grow your profit
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-primary font-semibold rounded-xl hover:bg-surface transition">
          Become Reseller
        </button>

      </div>

    </section>
  );
};

export default WholesaleSection;