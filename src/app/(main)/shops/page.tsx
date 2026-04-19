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
  Crown,
  ShoppingBagIcon,
} from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

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
  trendingProducts: string[]; // Array of image URLs
};

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
    sold: 12500,
    products: 86,
    followers: 5400,
    trendingProducts: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    ],
  },
  {
    id: 2,
    name: "Fashion Hub",
    category: "Fashion",
    location: "Chattogram, Bangladesh",
    logo: "https://i.pravatar.cc/100?img=2",
    cover: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    rating: 4.6,
    reward: "Trusted Seller",
    sold: 9800,
    products: 54,
    followers: 3200,
    trendingProducts: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    ],
  },
];

const ShopPage = () => {
  const [search, setSearch] = useState<string>("");

  const filtered = shopsData.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen  py-8">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm mb-4">
            <ShoppingBagIcon className="text-yellow-500" size={28} />
            <h1 className="text-4xl font-bold text-gray-900">Shops Hub</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Celebrate top referrers and sellers • Earn points by referring
            friends
          </p>
        </div>

        {/* Search & Filters */}
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

        {/* Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filtered.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg overflow-hidden border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              {/* Cover Image */}
              <div className="relative h-48">
                <div className="absolute inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium px-2  py-1 rounded-sm">
                  🏆 {shop.reward}
                </div>
                <img
                  src={shop.cover}
                  alt={shop.name}
                  className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Logo */}
                <img
                  src={shop.logo}
                  alt={shop.name}
                  className="w-16 h-16 rounded-2xl border-4 border-white absolute -bottom-8 left-6 shadow-md"
                />
              </div>

              {/* Content */}
              <div className="pt-12 pb-6 px-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-xl text-[#0F172A]">
                      {shop.name}
                    </h3>
                    <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
                      <MapPin size={15} /> {shop.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Star size={16} className="fill-current" />
                    {shop.rating}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm text-text-secondary">
                  <span className="font-medium text-primary">
                    {shop.category}
                  </span>
                  <span>•</span>
                  <span>{shop.products} Products</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div>
                    <p className="text-sm  text-text-secondary">
                      {shop.sold.toLocaleString()}
                    </p>
                    <p className="text-xs text-text-secondary">Sold</p>
                  </div>
                  <div>
                    <p className="text-sm  text-text-secondary">
                      {shop.followers.toLocaleString()}
                    </p>
                    <p className="text-xs text-text-secondary">Followers</p>
                  </div>
                  <div>
                    <p className="text-sm  text-text-secondary">
                      {shop.products}
                    </p>
                    <p className="text-xs text-text-secondary">Products</p>
                  </div>
                </div>

                {/* Trending Products */}
                <div className="mt-7">
                  <p className="text-xs uppercase tracking-widest text-text-secondary font-medium mb-3">
                    Trending Products
                  </p>
                  <div className="flex gap-3">
                    {shop.trendingProducts.slice(0, 4).map((img, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                      >
                        <img
                          src={img}
                          alt="trending"
                          className="w-full h-full object-cover hover:scale-110 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reward Badge */}

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-8">
                  <button className="flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-4 py-2 rounded-lg  hover:bg-primary/90 transition-all active:scale-95">
                    <UserPlus size={18} />
                    Follow
                  </button>

                  <div className="flex gap-4 text-gray-500">
                    <MessageCircle
                      size={22}
                      className="cursor-pointer hover:text-primary transition"
                    />
                    <Heart
                      size={22}
                      className="cursor-pointer hover:text-red-500 transition"
                    />
                    <ShoppingBag
                      size={22}
                      className="cursor-pointer hover:text-primary transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
