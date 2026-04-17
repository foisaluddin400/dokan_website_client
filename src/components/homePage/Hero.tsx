"use client";

import React from "react";
import { ShoppingBag, Store, Gift, TrendingUp, ArrowRight, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  min-h-[60vh] flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT SIDE - MAIN CONTENT ================= */}
        <div className="lg:col-span-7 space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Bangladesh’s #1 Marketplace
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight">
            Sell Smart,<br />
            Buy Better,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Earn More.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-lg text-gray-200 leading-relaxed">
            One platform for everything — Open your shop, buy wholesale, 
            sell used items, or earn through affiliate without any investment.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 text-white">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <Store size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Real Shops</h4>
                <p className="text-sm text-gray-300">Professional storefront for every seller</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <Gift size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Affiliate Program</h4>
                <p className="text-sm text-gray-300">Earn money by referring others</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="group bg-white text-black hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl flex items-center gap-3 transition-all active:scale-95">
              Start Selling Free
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button className="border border-white/40 hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-2xl transition-all">
              Browse Marketplace
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-8 pt-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <div>
                <p className="font-semibold text-white">15,000+</p>
                <p className="text-xs">Active Sellers</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="font-semibold text-white">4.9/5</p>
              <p className="text-xs">User Rating</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE - HIGHLIGHTS ================= */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Big Promo Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
            <div className="uppercase tracking-widest text-xs mb-2 text-amber-300">Limited Time</div>
            <h3 className="text-3xl font-bold leading-tight">
              Up to <span className="text-amber-400">50% OFF</span><br />
              on Electronics
            </h3>
            <p className="mt-4 text-sm text-gray-200">
              Premium gadgets at unbeatable prices. Hurry, offer ends soon!
            </p>
            <button className="mt-6 bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              Shop Deals Now
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Two Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Become Seller Card */}
            <div className="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Store size={28} className="text-indigo-600" />
              </div>
              <h4 className="font-semibold text-xl text-gray-900">Become a Seller</h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Start your own shop in under 5 minutes. Zero investment required.
              </p>
              <button className="mt-6 text-indigo-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Started <ArrowRight size={18} />
              </button>
            </div>

            {/* Affiliate Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl p-6 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Gift size={28} />
              </div>
              <h4 className="font-semibold text-xl">Affiliate Program</h4>
              <p className="mt-2 text-white/80 text-sm">
                Earn passive income by sharing products. No stock needed.
              </p>
              <div className="mt-8 text-sm font-medium flex items-center gap-2">
                Earn up to 15% commission →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center text-white/60 text-xs tracking-widest">
        SCROLL TO EXPLORE
        <div className="w-px h-8 bg-white/30 mt-2" />
      </div>
    </section>
  );
};

export default Hero;