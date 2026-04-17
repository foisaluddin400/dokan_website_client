import React from "react";
import {
  ShoppingBag,
  Smartphone,
  Shirt,
  Home,
  Gamepad2,
  Dumbbell,
  Car,
  BookOpen,
} from "lucide-react";

const categories = [
  { name: "Fashion", icon: Shirt, color: "var(--primary)" },
  { name: "Electronics", icon: Smartphone, color: "var(--secondary)" },
  { name: "Groceries", icon: ShoppingBag, color: "var(--accent)" },
  { name: "Home", icon: Home, color: "#F7C948" }, // accent-gold
  { name: "Gaming", icon: Gamepad2, color: "var(--primary-dark)" },
  { name: "Fitness", icon: Dumbbell, color: "#FF5C5C" }, // accent-red
  { name: "Automobile", icon: Car, color: "var(--secondary)" },
  { name: "Books", icon: BookOpen, color: "var(--primary-light)" },
];

const CategorySection = () => {
  return (
    <section
      className="w-full py-12 px-4 md:px-10"
      style={{ background: "var(--background)" }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Explore Categories
        </h2>

        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Find products from every category in one place
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon Circle */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl text-white transition group-hover:scale-110"
                style={{ background: cat.color }}
              >
                <Icon size={20} />
              </div>

              {/* Name */}
              <p
                className="mt-3 text-sm font-medium transition group-hover:text-[var(--primary)]"
                style={{ color: "var(--text)" }}
              >
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;