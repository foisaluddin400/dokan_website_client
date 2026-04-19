"use client";

import React, { useState } from "react";
import { Star, SlidersHorizontal, X } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const colors = {
  primary: "#5B2EFF",
  primaryDark: "#3B1EDB",
  text: "#0F172A",
  textSecondary: "#475569",
  border: "#E2E8F0",
  surface: "#F8F9FB",
  accentGold: "#F7C948",
};

const products = [
  {
    title: "Wireless Headphones Pro",
    price: 2500,
    rating: 4.8,
    sold: 1200,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: { name: "Tech World", logo: "https://i.pravatar.cc/100?img=1" },
    description:
      "Premium noise-cancelling wireless headphones with 40-hour battery life, deep bass, and comfortable over-ear design.",
  },
  {
    title: "Smart Watch Series X",
    price: 4500,
    rating: 4.7,
    sold: 980,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: { name: "Gadget Zone", logo: "https://i.pravatar.cc/100?img=4" },
    description:
      "Advanced smartwatch with health monitoring, GPS tracking, long battery life and beautiful AMOLED display.",
  },
  {
    title: "Nike Running Shoes",
    price: 3200,
    rating: 4.6,
    sold: 1500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: { name: "Fashion Hub", logo: "https://i.pravatar.cc/100?img=2" },
    description:
      "Lightweight and comfortable Nike running shoes with excellent cushioning and breathable mesh upper.",
  },
  {
    title: "Bluetooth Speaker",
    price: 1800,
    rating: 4.9,
    sold: 2100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: { name: "Sound Store", logo: "https://i.pravatar.cc/100?img=5" },
    description:
      "Portable waterproof Bluetooth speaker with powerful 360° sound and 20-hour playtime.",
  },
];

const categories = [
  {
    name: "Electronics",
    sub: ["Smartphones", "Laptops", "Headphones", "Smart Watches"],
  },
  {
    name: "Fashion",
    sub: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
  },
  { name: "Home & Living", sub: ["Furniture", "Kitchen", "Decor"] },
  { name: "Beauty", sub: ["Skincare", "Makeup", "Haircare"] },
];

const Products = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    Record<string, string[]>
  >({});
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState("newest");

  const toggleDescription = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
      const newSub = { ...selectedSubcategories };
      delete newSub[category];
      setSelectedSubcategories(newSub);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleSubcategory = (category: string, sub: string) => {
    const current = selectedSubcategories[category] || [];
    if (current.includes(sub)) {
      setSelectedSubcategories({
        ...selectedSubcategories,
        [category]: current.filter((s) => s !== sub),
      });
    } else {
      setSelectedSubcategories({
        ...selectedSubcategories,
        [category]: [...current, sub],
      });
    }
  };

  return (
    <div className="min-h-screen container mx-auto py-8">
      <div className=" ">
        {/* Top Bar with Search & Filter Button */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Input placeholder="Search products..." />
          </div>

          {/* Filter Button - Visible only on Mobile */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl font-medium text-sm"
          >
            <SlidersHorizontal size={20} />
            Filters
          </button>

          {/* Sort Dropdown */}

          <Select
            label="Category"
            value={sortBy}
            options={[
              { label: "Electronics", value: "electronics" },
              { label: "Fashion", value: "fashion" },
              { label: "Home", value: "home" },
            ]}
          />
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-6 border border-border ">
              <h2 className="text-xl font-semibold mb-6 text-[#0F172A]">
                Filters
              </h2>

              {/* Categories with Subcategories */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                <div className="space-y-6">
                  {categories.map((cat) => (
                    <div key={cat.name}>
                      <label className="flex items-center gap-2 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.name)}
                          onChange={() => toggleCategory(cat.name)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-medium text-gray-800">
                          {cat.name}
                        </span>
                      </label>

                      {selectedCategories.includes(cat.name) && (
                        <div className="ml-6 space-y-2 text-sm">
                          {cat.sub.map((sub) => (
                            <label
                              key={sub}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={
                                  selectedSubcategories[cat.name]?.includes(
                                    sub,
                                  ) || false
                                }
                                onChange={() =>
                                  toggleSubcategory(cat.name, sub)
                                }
                                className="w-4 h-4 accent-primary"
                              />
                              <span className="text-gray-600">{sub}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>৳ 0</span>
                    <span>৳ {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Location (Example) */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Location</h3>
               <Select
          
            label="Category"
            value={sortBy}
            options={[
              { label: "Electronics", value: "electronics" },
              { label: "Fashion", value: "fashion" },
              { label: "Home", value: "home" },
            ]}
          />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((product, index) => {
                const isExpanded = expanded[index] || false;
                const shortDesc =
                  product.description.split(" ").slice(0, 15).join(" ") + "...";

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={product.store.logo}
                          className="w-6 h-6 rounded-full"
                          alt=""
                        />
                        <span className="text-xs text-gray-500 truncate">
                          {product.store.name}
                        </span>
                      </div>

                      <h3 className="font-semibold text-base leading-tight mb-3 line-clamp-2 min-h-[44px]">
                        {product.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {isExpanded ? product.description : shortDesc}
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-primary font-medium ml-1 hover:underline"
                        >
                          {isExpanded ? "less" : "more"}
                        </button>
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <Star
                            size={16}
                            className="text-accent-gold"
                            fill="#F7C948"
                          />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {product.sold} sold
                        </span>
                      </div>

                      <div className="text-2xl font-bold text-primary">
                        ৳ {product.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/60"
          onClick={() => setIsFilterOpen(false)}
        >
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b flex items-center justify-between px-6 py-4 z-10">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="p-6 space-y-10">
              {/* Same filter content as sidebar */}
              <div>
                <h3 className="font-medium mb-4">Categories</h3>
                {categories.map((cat) => (
                  <div key={cat.name} className="mb-6">
                    <label className="flex items-center gap-2 mb-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.name)}
                        onChange={() => toggleCategory(cat.name)}
                        className="w-4 h-4 accent-secondary"
                      />
                      <span className="font-medium">{cat.name}</span>
                    </label>

                    {selectedCategories.includes(cat.name) && (
                      <div className="ml-6 space-y-2">
                        {cat.sub.map((sub) => (
                          <label
                            key={sub}
                            className="flex items-center gap-2 cursor-pointer text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={
                                selectedSubcategories[cat.name]?.includes(
                                  sub,
                                ) || false
                              }
                              onChange={() => toggleSubcategory(cat.name, sub)}
                              className="w-4 h-4 accent-secondary"
                            />
                            {sub}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-secondary"
                />
                <div className="flex justify-between text-sm mt-2 text-gray-600">
                  <span>৳ 0</span>
                  <span>৳ {priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
