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
import Title from "../ui/Title";

const categories = [
  { name: "Fashion", icon: Shirt, color: "#5B2EFF" },
  { name: "Electronics", icon: Smartphone, color: "#10B981" },
  { name: "Groceries", icon: ShoppingBag, color: "#F59E0B" },
  { name: "Home", icon: Home, color: "#F7C948" }, // accent-gold
  { name: "Gaming", icon: Gamepad2, color: "#8B5CF6" },
  { name: "Fitness", icon: Dumbbell, color: "#FF5C5C" }, // accent-red
  { name: "Automobile", icon: Car, color: "#6366F1" },
  { name: "Books", icon: BookOpen, color: "#3B82F6" },
];

const CategorySection = () => {
  return (
    <section className="w-full py-9 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-10 bg-accent-gold rounded-sm" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Category
            </h1>
            <p className="text-gray-400 text-sm">
              {" "}
              Discover the Category loved by our customers
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <div
              key={index}
              className="group bg-white border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                className="mt-3 text-sm font-medium transition group-hover:text-primary"
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
