"use client";

import React, { useState } from "react";
import { MapPin, Repeat, Heart, MessageCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const exchangeItems = [
  {
    id: 1,
    title: "iPhone 11 (Used)",
    want: "Looking for Samsung S21",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    user: "Rahim",
  },
  {
    id: 2,
    title: "Gaming Laptop",
    want: "Want MacBook or cash + exchange",
    location: "Chattogram",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    user: "Karim",
  },
];

const Exchange = () => {
  const [search, setSearch] = useState("");

  const filtered = exchangeItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  py-8">
 <div className=" bg-surface-2 border border-border rounded-2xl p-6">

        <h3 className="text-lg font-bold text-text mb-3">
          How Exchange Works 🤝
        </h3>

        <ul className="text-sm text-text-secondary space-y-2">
          <li>✔ Post your product for exchange</li>
          <li>✔ Mention what you want in return</li>
          <li>✔ Connect with users in same location</li>
          <li>✔ Meet & exchange safely</li>
        </ul>

      </div>
   {/* CTA */}
      <div className="mt-5 mb-7 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between">

        <div>
          <h3 className="text-lg md:text-xl font-bold">
            Have something unused?
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Exchange it with something valuable today
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition">
          Post Exchange
        </button>

      </div>

      {/* SEARCH + LOCATION FILTER */}
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* IMAGE */}
            <div className="overflow-hidden m-3 rounded-xl relative">
              <img
                src={item.image}
                className="w-full h-32 object-cover group-hover:scale-105 transition"
              />

              {/* Exchange Badge */}
              <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Repeat size={12} /> Exchange
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-3">

              {/* Title */}
              <h3 className="text-sm font-semibold text-text line-clamp-1">
                {item.title}
              </h3>

              {/* Want */}
              <p className="text-xs text-text-secondary mt-1">
                Wants: {item.want}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1 text-xs text-text-muted mt-2">
                <MapPin size={12} />
                {item.location}
              </div>

              {/* User */}
              <p className="text-xs text-text-muted mt-1">
                By {item.user}
              </p>

              {/* ACTIONS */}
              <div className="flex justify-between items-center mt-3">

                <button className="text-primary text-xs font-medium hover:underline">
                  View Details
                </button>

                <div className="flex gap-2 text-text-secondary">
                  <Heart size={16} className="cursor-pointer hover:text-red-500" />
                  <MessageCircle size={16} className="cursor-pointer hover:text-primary" />
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* INFO SECTION */}
     

   

    </div>
  );
};

export default Exchange;