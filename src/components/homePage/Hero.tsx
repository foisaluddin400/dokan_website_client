"use client";

import { ArrowRight, Package, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <div className=" container mx-auto flex items-center justify-center py-4">
      <div className="w-full">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-full">

          {/* LEFT (70%) */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-gradient-to-br from-primary via-primary-dark to-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden h-full flex flex-col justify-center">

              {/* BG BLUR */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-light rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-br from-accent-gold to-warning text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                  🔥 LIVE MARKETPLACE
                </div>

                {/* TITLE */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  Buy, Sell & Earn <br />
                  <span className="text-accent-gold">Without Investment</span>
                </h1>

                {/* TEXT */}
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md">
                  Shop products, open your store, or start earning with affiliate marketing.
                </p>

                {/* BUTTON */}
                <button className="bg-gradient-to-br from-accent-gold to-warning text-black font-bold rounded-full px-8 py-4 text-base flex items-center gap-2 transition active:scale-95">
                  Explore Now
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT (30%) */}
          <div className="lg:col-span-3 grid grid-rows-2 gap-6 h-full">

            {/* WHOLESALE */}
            <div className="bg-gradient-to-br from-accent-gold to-warning rounded-3xl p-6 text-black relative overflow-hidden flex flex-col justify-between">

              <div>
                <p className="text-sm font-bold mb-2">WHOLESALE</p>
                <h3 className="text-2xl font-bold mb-1">Bulk Deals</h3>
                <p className="text-sm">Start from ৳499</p>
              </div>

              <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center self-end">
                <Package className="w-6 h-6" />
              </div>
            </div>

            {/* AFFILIATE */}
            <div className="bg-gradient-to-br from-secondary to-primary-dark rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between">

              <div>
                <p className="text-sm font-bold mb-2">AFFILIATE</p>
                <h3 className="text-2xl font-bold mb-1">Earn 15%</h3>
                <p className="text-sm text-white/80">No investment needed</p>
              </div>

              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center self-end">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;