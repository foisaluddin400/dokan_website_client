"use client";

import React, { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { FaAppleWhole } from "react-icons/fa6";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const wholesaleProducts = [
  {
    title: "Wireless Headphones",
    price: 1200,
    moq: 20,
    location: "Dhaka",
    rating: 4.7,
    sold: 500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    store: "Tech World",
  },
  {
    title: "Smart Watch",
    price: 1800,
    moq: 15,
    location: "Chattogram",
    rating: 4.6,
    sold: 320,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: "Gadget Zone",
  },
  {
    title: "Bluetooth Speaker",
    price: 900,
    moq: 25,
    location: "Dhaka",
    rating: 4.8,
    sold: 720,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
    store: "Sound Store",
  },
];

const WholesalePage = () => {
  const [search, setSearch] = useState("");

  const filtered = wholesaleProducts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8">

      {/* HEADER */}
       <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm mb-4">
            <FaAppleWhole className="text-yellow-500" size={28} />
            <h1 className="text-4xl font-bold text-gray-900">Rewards Hub</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Celebrate top referrers and sellers • Earn points by referring friends
          </p>
        </div>

      {/* SEARCH + FILTER */}
        <div className="md:grid md:grid-cols-12 gap-3 mb-8">
          {/* Search */}
          <div className="w-full mb-3 md:mb-0 col-span-4 md:col-span-6 lg:col-span-8">
            <Input placeholder="Search products..." />
          </div>

          {/* Category */}
          <div className=" w-full col-span-6 md:col-span-6  lg:col-span-4 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <Select
                label="Category"
                value="Mobile Phones"
                options={[
                  { label: "Electronics", value: "electronics" },
                  { label: "Fashion", value: "fashion" },
                  { label: "Home", value: "home" },
                ]}
              />

              {/* Location */}
              <Input placeholder="Search Location..." />
            </div>
          </div>
        </div>
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {filtered.map((product, index) => (
          <div
            key={index}
            className="group bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Image */}
            <div className="overflow-hidden m-3 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-3">

              {/* Title */}
              <h3 className="text-sm font-semibold text-text line-clamp-1">
                {product.title}
              </h3>

              {/* Price */}
              <p className="text-primary font-bold mt-1 text-sm">
                ৳ {product.price} / piece
              </p>

              {/* MOQ */}
              <p className="text-xs text-accent mt-1">
                Min Order: {product.moq} pcs
              </p>

              {/* Rating */}
              <div className="flex items-center justify-between mt-2 text-xs text-text-secondary">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-accent-gold fill-accent-gold" />
                  <span>{product.rating}</span>
                </div>
                <span>{product.sold} sold</span>
              </div>

              {/* Store */}
              <p className="text-xs text-text-muted mt-2">
                {product.store}
              </p>

              {/* Location */}
              <p className="text-xs text-text-muted">
                📍 {product.location}
              </p>

              {/* Button */}
              <button className="mt-3 w-full py-2 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-sm font-medium hover:bg-primary-dark transition">
                Contact Supplier
              </button>
            </div>
          </div>
        ))}

      </div>


     

    </div>
  );
};

export default WholesalePage;