"use client";

import React, { useState } from "react";
import { Crown, Copy, Check } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const products = [
  {
    title: "Wireless Headphones",
    price: 1200,
    sellPrice: 1600,
    profit: 400,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    title: "Smart Watch",
    price: 1800,
    sellPrice: 2400,
    profit: 600,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

const Resell = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopied(index);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <div className="min-h-screen mt-5">
<div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-2xl p-6 md:flex md:items-center md:justify-between gap-6">

  {/* LEFT CONTENT */}
  <div className="max-w-xl">

    <h3 className="text-xl font-bold text-text mb-3">
      Earn Without Investment 💸
    </h3>

    <p className="text-sm text-text-secondary mb-4">
      Subscribe, pick products, promote anywhere & earn profit without stock.
    </p>

    {/* STEPS */}
    <ul className="text-sm text-text-secondary space-y-2 mb-5">
      <li>✔ Choose product from list</li>
      <li>✔ Copy images & details</li>
      <li>✔ Sell on Facebook / WhatsApp</li>
      <li>✔ Keep your profit margin</li>
    </ul>

    {/* BUTTONS */}
    <div className="flex flex-wrap gap-3">

      <button className="px-6 py-2 bg-gradient-to-br from-primary to-secondary text-white rounded-xl font-semibold hover:bg-primary-dark transition">
        Subscribe Now (৳500)
      </button>

      <button className="px-6 py-2 border border-border rounded-xl text-text hover:bg-surface transition">
        View Demo Products
      </button>

    </div>

  </div>

  {/* RIGHT CARD */}
  <div className="mt-6 md:mt-0">

    <div className="bg-white border border-border rounded-xl p-5 text-center shadow-soft">

      <p className="text-xs text-text-secondary">
        Avg Monthly Earnings
      </p>

      <h2 className="text-2xl font-bold text-primary mt-1">
        ৳15,000+
      </h2>

      <p className="text-xs text-text-muted mt-1">
        Based on active resellers
      </p>

    </div>

  </div>

</div>
    

      <div className="md:grid md:grid-cols-12 mt-5 gap-3 mb-8">
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



      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {products.map((p, index) => (
          <div
            key={index}
            className="group bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)]  rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* IMAGE */}
            <div className="overflow-hidden m-3 rounded-xl">
              <img
                src={p.image}
                className="w-full h-32 object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3">

              <h3 className="text-sm font-semibold text-text">
                {p.title}
              </h3>

              <p className="text-xs text-text-secondary mt-1">
                Cost: ৳ {p.price}
              </p>

              <p className="text-sm font-bold text-primary">
                Sell: ৳ {p.sellPrice}
              </p>

              <p className="text-xs text-success">
                Profit: ৳ {p.profit}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => handleCopy(index)}
                className="mt-3 w-full py-2 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-sm flex items-center justify-center gap-1 hover:bg-primary-dark transition"
              >
                {copied === index ? (
                  <>
                    <Check size={14} /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy
                  </>
                )}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold">
          Start Selling Now
        </button>
      </div>

    </div>
  );
};

export default Resell;