"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  MessageCircle,
  Heart,
  UserPlus,
  ShoppingBag,
} from "lucide-react";

/* ---------------- TYPES ---------------- */
type Shop = {
  id: number;
  name: string;
  category: string;
  location: string;
  logo: string;
  cover: string;
  rating: number;
  reward: string;
  sold: number;
  products: number;
  followers: number;
  description: string;
};

/* ---------------- DATA ---------------- */
const shopsData: Shop[] = [
  {
    id: 1,
    name: "Tech World",
    category: "Electronics",
    location: "Dhaka, Bangladesh",
    logo: "https://i.pravatar.cc/100?img=1",
    cover: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: 4.8,
    reward: "Gold Seller",
    sold: 1250,
    products: 86,
    followers: 5400,
    description:
      "Best electronics shop with premium gadgets, smart devices and accessories at affordable prices. We ensure original products and fast delivery.",
  },
  {
    id: 2,
    name: "Fashion Hub",
    category: "Fashion",
    location: "Chattogram, Bangladesh",
    logo: "https://i.pravatar.cc/100?img=2",
    cover: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd49",
    rating: 4.6,
    reward: "Trusted Seller",
    sold: 980,
    products: 54,
    followers: 3200,
    description:
      "Trendy fashion store for men and women. Latest styles, premium fabrics and affordable pricing for everyone.",
  },
];

/* ---------------- COMPONENT ---------------- */
const ShopPage = () => {
  const [search, setSearch] = useState<string>("");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleDesc = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filtered = shopsData.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background px-4 md:px-10 py-8">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text">
          Explore Shops
        </h1>
        <p className="text-text-secondary mt-1">
          Find trusted sellers and brands
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">

        {/* Search */}
        <div className="flex items-center bg-surface border border-border rounded-xl px-3 py-2 flex-1">
          <Search className="text-text-secondary" size={18} />
          <input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search shops..."
            className="w-full ml-2 bg-transparent outline-none text-sm"
          />
        </div>

        {/* Category */}
        <select className="bg-surface border border-border rounded-xl px-3 py-2 text-sm">
          <option>All Category</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>

        {/* Location */}
        <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2">
          <MapPin size={18} className="text-text-secondary" />
          <select className="bg-transparent text-sm outline-none">
            <option>All Location</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
          </select>
        </div>
      </div>

      {/* SHOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((shop: Shop) => {
          const isOpen = expanded[shop.id];

          const shortDesc =
            shop.description.split(" ").slice(0, 18).join(" ") + "...";

          return (
            <div
              key={shop.id}
              className="bg-surface border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition"
            >

              {/* COVER */}
              <div className="relative h-32">
                <img
                  src={shop.cover}
                  className="w-full h-full object-cover"
                  alt={shop.name}
                />
                <div className="absolute inset-0 bg-black/30" />

                <img
                  src={shop.logo}
                  className="w-12 h-12 rounded-full border-2 border-white absolute -bottom-6 left-4"
                  alt={shop.name}
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 pt-8">

                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-text">{shop.name}</h2>

                  <div className="flex items-center gap-1 text-accent-gold text-sm">
                    <Star size={14} className="fill-accent-gold" />
                    {shop.rating}
                  </div>
                </div>

                <div className="text-xs text-text-secondary mt-1">
                  {shop.category} • {shop.location}
                </div>

                <p className="text-sm text-text-secondary mt-3">
                  {isOpen ? shop.description : shortDesc}
                  <button
                    onClick={() => toggleDesc(shop.id)}
                    className="text-primary ml-1 font-medium"
                  >
                    {isOpen ? "See less" : "See all"}
                  </button>
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 text-center mt-4 text-xs text-text-secondary">
                  <div>
                    <p className="font-bold text-text">{shop.sold}</p>
                    <p>Sold</p>
                  </div>
                  <div>
                    <p className="font-bold text-text">{shop.products}</p>
                    <p>Products</p>
                  </div>
                  <div>
                    <p className="font-bold text-text">{shop.followers}</p>
                    <p>Followers</p>
                  </div>
                </div>

                {/* REWARD */}
                <div className="mt-3 text-xs text-primary font-medium">
                  🏆 {shop.reward}
                </div>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-4">

                  <button className="flex items-center gap-1 text-sm text-primary">
                    <UserPlus size={16} /> Follow
                  </button>

                  <div className="flex gap-3 text-text-secondary">
                    <MessageCircle size={18} className="cursor-pointer hover:text-primary" />
                    <Heart size={18} className="cursor-pointer hover:text-red-500" />
                    <ShoppingBag size={18} className="cursor-pointer hover:text-primary" />
                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default ShopPage;