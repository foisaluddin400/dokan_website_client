"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = [
  {
    title: "Wireless Headphones Pro",
    desc: "Experience premium sound quality with massive limited-time discount.",
    price: 2500,
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    button: "Shop Now",
  },
  {
    title: "Smart Watch Series X",
    desc: "Track your lifestyle with style & save big today.",
    price: 4500,
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    button: "Buy Now",
  },
  {
    title: "Gaming Headset Ultra",
    desc: "Dominate every game with crystal clear sound & deep bass.",
    price: 3200,
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    button: "Grab Deal",
  },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Slides */}
      {banners.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content Card */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div
              className="backdrop-blur-xl border rounded-2xl p-8 max-w-xl text-center shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              {/* Discount Badge */}
              <div
                className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full"
                style={{
                  background: "var(--primary)",
                  color: "#fff",
                }}
              >
                {item.discount}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-3">{item.title}</h2>

              {/* Description */}
              <p style={{ color: "rgba(255,255,255,0.8)" }} className="text-sm mb-4">
                {item.desc}
              </p>

              {/* Price */}
              <p
                className="text-xl font-bold mb-5"
                style={{ color: "var(--accent)" }}
              >
                ৳ {item.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <button
                  style={{
                    background: "var(--primary)",
                    color: "#fff",
                  }}
                  className="px-6 py-2 rounded-xl font-medium"
                >
                  {item.button}
                </button>

                <button
                  className="px-6 py-2 rounded-xl border"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#fff",
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.2)",
        }}
      >
        <ChevronLeft style={{ color: "#fff" }} />
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.2)",
        }}
      >
        <ChevronRight style={{ color: "#fff" }} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className="cursor-pointer rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background:
                i === current ? "var(--primary)" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;