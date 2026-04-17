'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Search, LogOut, ShoppingBag, 
  MapPin, ShoppingCart, Award 
} from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery]   = useState('');
  const [isScrolled, setIsScrolled]     = useState(false);   // ✅ scroll state

  const profileRef = useRef<HTMLDivElement>(null);
  const isLoggedIn = true;

  // ── Click outside profile ───────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Body scroll lock ────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // ── Scroll listener — 20% of page height ───────────────
  useEffect(() => {
    const onScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.05; // 5vh feels natural for 20% trigger
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/',          label: 'Home'      },
    { href: '/shops',     label: 'Shops'     },
    { href: '/products',  label: 'Products'  },
    { href: '/wholesale', label: 'Wholesale' },
    { href: '/resell',    label: 'Resell'    },
    { href: '/exchange',  label: 'Exchange'  },
    { href: '/used',      label: 'Used'      },
  ];

  return (
    <>
      {/*
        ✅ Glass style injected once — avoids Tailwind purge issues
           backdrop-filter must live in real CSS, not arbitrary Tailwind values
      */}
      <style>{`
        .navbar-glass {
          background: rgba(255, 255, 255, 0.55) !important;
          backdrop-filter: saturate(180%) blur(18px);
          -webkit-backdrop-filter: saturate(180%) blur(18px);
          box-shadow: 0 4px 24px 0 rgba(80, 80, 120, 0.10),
                      0 1.5px 0 0 rgba(255,255,255,0.18) inset;
          border-bottom-color: rgba(200, 200, 220, 0.35) !important;
        }
        .navbar-glass .navbar-inner-border {
          border-bottom-color: rgba(200, 200, 220, 0.25) !important;
        }
      `}</style>

      <nav
        className={`
          sticky top-0 z-50 border-b border-gray-200
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'navbar-glass' : 'bg-white shadow-sm'}
        `}
      >
        {/* ── Top Row ───────────────────────────────────────── */}
        <div className={` navbar-inner-border transition-colors duration-500
          ${isScrolled ? 'border-white/20' : 'border-gray-200'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <ShoppingBag size={32} className="text-indigo-600" />
                  <span>Shopify</span>
                </div>
              </Link>

              {/* Search — desktop */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, brands, categories..."
                    className={`
                      w-full border rounded-full py-3 pl-12 pr-6 text-sm
                      focus:outline-none focus:border-indigo-500 focus:ring-1
                      transition-all duration-500
                      ${isScrolled
                        ? 'bg-white/50 border-white/40 placeholder:text-gray-500 backdrop-blur-sm'
                        : 'bg-gray-100 border-gray-300'
                      }
                    `}
                  />
                  <Search className="absolute left-5 top-3.5 text-gray-400" size={20} />
                </div>
              </div>

              {/* Location — desktop */}
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 px-4 py-2 hover:bg-gray-100/70 rounded-xl cursor-pointer transition-colors">
                <MapPin size={20} />
                <div>
                  <p className="font-medium text-gray-900">Dhaka</p>
                  <p className="text-xs -mt-1">Bangladesh</p>
                </div>
              </div>

              {/* Right icons */}
              <div className="flex items-center gap-3 md:gap-4">

                {/* Rewards — desktop */}
                <Link
                  href="/rewards"
                  className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-5 py-2.5 rounded-2xl font-medium text-sm hover:from-amber-600 hover:to-yellow-600 transition-all shadow-sm"
                >
                  <Award size={18} />
                  Rewards
                </Link>

                {/* Profile */}
                {isLoggedIn ? (
                  <div className="relative" ref={profileRef}>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 hover:bg-gray-100/70 p-2 rounded-full transition-colors"
                    >
                      <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        RK
                      </div>
                    </button>

                    {/* Profile Dropdown */}
                    <div
                      className={`
                        absolute right-0 mt-3 w-64 rounded-3xl shadow-xl border py-2 z-50 overflow-hidden
                        transition-all duration-300 origin-top-right
                        ${isScrolled
                          ? 'bg-white/80 backdrop-blur-xl border-white/30'
                          : 'bg-white border-gray-100'
                        }
                        ${isProfileOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        }
                      `}
                    >
                      <div className="px-6 py-4 border-b border-gray-100">
                        <p className="font-semibold">Rakibul Islam</p>
                        <p className="text-xs text-gray-500">rakib@example.com</p>
                      </div>
                      <Link href="/profile"  className="block px-6 py-3 hover:bg-gray-50/80 text-sm">My Profile</Link>
                      <Link href="/orders"   className="block px-6 py-3 hover:bg-gray-50/80 text-sm">My Orders</Link>
                      <Link href="/wishlist" className="block px-6 py-3 hover:bg-gray-50/80 text-sm">Wishlist</Link>
                      <div className="border-t border-gray-100 my-1" />
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="flex w-full items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50/80 text-sm"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link href="/login" className="hidden md:block px-6 py-2 text-gray-700 hover:bg-gray-100/70 rounded-full transition-colors">
                    Login
                  </Link>
                )}

                {/* Cart */}
                <Link href="/cart" className="relative p-3 hover:bg-gray-100/70 rounded-full transition-colors">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    3
                  </span>
                </Link>

                {/* Hamburger */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-3 text-gray-700"
                  aria-label="Toggle menu"
                >
                  <span className={`block transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Nav — desktop only ──────────────────────── */}
        <div className={`hidden md:block   transition-colors duration-500
          ${isScrolled ? 'border-border' : 'border-t border-border'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-14 text-sm font-medium text-black overflow-x-auto">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-5 py-4 hover:text-indigo-600 transition-colors whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ────────────────────────────────────── */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className={`border-t px-5 py-6 space-y-6 transition-colors duration-500
            ${isScrolled
              ? 'bg-white/60 backdrop-blur-xl border-white/20'
              : 'bg-white border-gray-100'
            }`}
          >
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className={`
                  w-full border rounded-full py-3.5 pl-12 pr-5
                  focus:outline-none focus:border-indigo-500 transition-all duration-500
                  ${isScrolled ? 'bg-white/50 border-white/40' : 'bg-gray-100 border-gray-300'}
                `}
              />
              <Search className="absolute left-5 top-4 text-gray-400" size={22} />
            </div>

            {/* Nav links with stagger */}
            <div className="flex flex-col space-y-1 text-base font-medium">
              {navLinks.map(({ href, label }, i) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: isMenuOpen ? `${i * 45}ms` : '0ms' }}
                  className={`
                    py-3 px-2 rounded-xl hover:bg-gray-50/80 hover:text-indigo-600
                    transition-all duration-300
                    ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Rewards */}
            <Link
              href="/rewards"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-2xl font-medium"
            >
              <Award size={20} />
              Go to Rewards
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;