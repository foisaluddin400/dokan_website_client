"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingBag,
  Heart,
  Gift,
  User,
  Menu,
  X,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
    { name: "Rewards", href: "/dashboard/rewards", icon: Gift },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ====================== SIDEBAR (Fixed - No Scroll) ====================== */}
      <aside
        className={`
          fixed md:static z-50 h-full w-72 bg-white border-r border-gray-200 
          flex flex-col transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo / Header */}
        <div className="px-8 py-8 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shopify</h1>
              <p className="text-xs text-gray-500 -mt-1">Seller Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation - Scrollable if needed, but usually fits */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all
                    ${isActive 
                      ? "bg-indigo-600 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon 
                    size={20} 
                    className={isActive ? "text-white" : "text-gray-500"} 
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout Section */}
        <div className="p-6 border-t border-gray-100 flex-shrink-0">
          <button className="flex items-center gap-3 w-full px-5 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* ====================== MAIN CONTENT AREA ====================== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 md:px-8 flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block text-sm text-gray-500">
              Welcome back, <span className="font-semibold text-gray-900">Rakibul</span>
            </div>
            
            <div className="w-9 h-9 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-semibold">
              RK
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}