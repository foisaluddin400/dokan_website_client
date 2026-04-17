"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Search,
  LogOut,
  ChevronDown,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

type SubCategory = {
  name: string;
  link: string;
};

type Category = {
  name: string;
  subcategories: SubCategory[];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] =
    useState<boolean>(false);
  const [openSubCategoryIndex, setOpenSubCategoryIndex] = useState<
    number | null
  >(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const profileRef = useRef<HTMLDivElement | null>(null);

  const categories: Category[] = [
    {
      name: "Electronics",
      subcategories: [
        { name: "Smartphones", link: "/products/electronics/smartphones" },
        { name: "Laptops", link: "/products/electronics/laptops" },
        { name: "Headphones", link: "/products/electronics/headphones" },
        { name: "Smart Watches", link: "/products/electronics/watches" },
      ],
    },
    {
      name: "Fashion",
      subcategories: [
        { name: "Men's Clothing", link: "/products/fashion/men" },
        { name: "Women's Clothing", link: "/products/fashion/women" },
        { name: "Shoes", link: "/products/fashion/shoes" },
        { name: "Accessories", link: "/products/fashion/accessories" },
      ],
    },
    {
      name: "Home & Living",
      subcategories: [
        { name: "Furniture", link: "/products/home/furniture" },
        { name: "Kitchen", link: "/products/home/kitchen" },
        { name: "Decor", link: "/products/home/decor" },
      ],
    },
    {
      name: "Beauty",
      subcategories: [
        { name: "Skincare", link: "/products/beauty/skincare" },
        { name: "Makeup", link: "/products/beauty/makeup" },
        { name: "Haircare", link: "/products/beauty/haircare" },
      ],
    },
  ];

  const isLoggedIn: boolean = true;

  // Close profile on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubCategory = (index: number) => {
    setOpenSubCategoryIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-2xl font-bold text-black">
              <ShoppingBag size={32} className="text-indigo-600" />
              <span>Shopify</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-10">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search products, brands and categories..."
                className="w-full bg-gray-100 border border-gray-300 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1"
              />
              <Search
                className="absolute left-5 top-3.5 text-black"
                size={20}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium text-black">
            <a href="/">Home</a>
            <a href="/products">Products</a>

            {/* Categories */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button className="flex items-center gap-1 py-5">
                Categories
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-170 bg-white rounded-3xl shadow-xl border p-8 grid grid-cols-2 gap-10 z-50 transition-all duration-300 ${
                  isCategoryOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-lg mb-3">
                      {category.name}
                    </h3>
                    {category.subcategories.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.link}
                        className="block py-2 px-3 text-sm hover:bg-indigo-50 rounded-xl"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <a href="/shops">Shops</a>
            <a href="/wholesales">Wholesales</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-9 h-9 bg-indigo-600 text-white rounded-full"
                >
                  RK
                </button>

                <div
                  className={`absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-lg border z-50 transition-all ${
                    isProfileOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="p-4 border-b">
                    <p className="font-semibold">Rakibul Islam</p>
                    <p className="text-xs">rakib@example.com</p>
                  </div>

                  <a href="/profile" className="block p-3 hover:bg-gray-50">
                    My Profile
                  </a>
                  <a href="/orders" className="block p-3 hover:bg-gray-50">
                    My Orders
                  </a>
                  <a href="/wishlist" className="block p-3 hover:bg-gray-50">
                    Wishlist
                  </a>

                  <button className="w-full flex items-center gap-2 p-3 text-red-600 hover:bg-red-50">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex gap-3">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="p-5 space-y-5">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/shops">Shops</a>
            <a href="/wholesales">Wholesales</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;