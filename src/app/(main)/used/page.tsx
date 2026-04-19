"use client";

import React, { useState } from "react";
import { Search, MapPin, Heart, MessageCircle, Plus } from "lucide-react";

const usedProducts = [
  {
    id: 1,
    title: "iPhone 11 (Used)",
    price: 32000,
    location: "Dhaka",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    exchange: true,
  },
  {
    id: 2,
    title: "Gaming Chair",
    price: 8500,
    location: "Chattogram",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    exchange: false,
  },
  {
    id: 3,
    title: "Laptop Dell i5",
    price: 28000,
    location: "Narayanganj",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    exchange: true,
  },
];

const Used = () => {
  const [search, setSearch] = useState("");

  const filtered = usedProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen container mx-auto px-4 md:px-10 py-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text">
            Used Products
          </h1>
          <p className="text-text-secondary text-sm">
            Buy, Sell or Exchange products near your location
          </p>
        </div>

        <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary-dark transition">
          <Plus size={18} />
          Sell Product
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">

        {/* Search */}
        <div className="flex items-center bg-surface border border-border rounded-xl px-3 py-2 flex-1">
          <Search size={18} className="text-text-secondary" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search used products..."
            className="w-full ml-2 bg-transparent outline-none text-sm text-text"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2">
          <MapPin size={18} className="text-text-secondary" />
          <select className="bg-transparent text-sm outline-none text-text">
            <option>All Location</option>
            <option>Dhaka</option>
            <option>Narayanganj</option>
            <option>Chattogram</option>
          </select>
        </div>

        {/* Condition */}
        <select className="bg-surface border border-border rounded-xl px-3 py-2 text-sm text-text">
          <option>All Condition</option>
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Used</option>
        </select>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden m-3 rounded-xl">
              <img
                src={item.image}
                className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Exchange Badge */}
              {item.exchange && (
                <span className="absolute top-2 left-2 bg-accent text-black text-xs px-2 py-1 rounded-md font-semibold">
                  Exchange
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-3">

              {/* Title */}
              <h3 className="text-sm font-semibold text-text line-clamp-1">
                {item.title}
              </h3>

              {/* Price */}
              <p className="text-primary font-bold text-sm mt-1">
                ৳ {item.price.toLocaleString()}
              </p>

              {/* Condition + Location */}
              <div className="text-xs text-text-secondary mt-1">
                {item.condition} • {item.location}
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between items-center mt-3">

                <button className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary-dark transition">
                  View
                </button>

                <div className="flex gap-2 text-text-secondary">
                  <Heart size={16} className="cursor-pointer hover:text-accent-red" />
                  <MessageCircle size={16} className="cursor-pointer hover:text-primary" />
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Used;