"use client";
import { ArrowRight, DollarSign } from "lucide-react";
import Link from "next/link";

const AffiliateSection = () => {
  return (
    <main className="py-16 ">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-10 bg-accent-gold rounded-sm" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Affiliate Program
              </h1>
              <p className="text-gray-400 text-sm">
                {" "}
                Discover the most popular stores loved by our customers
              </p>
            </div>
          </div>
        </div>
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 overflow-hidden">
          {/* Background decorative element */}
          <div className="absolute top-8 right-8 opacity-10">
            <DollarSign className="w-32 h-32 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Label */}
            <div className="inline-block mb-4">
              <span className="text-green-400 text-xs font-bold tracking-widest">
                AFFILIATE PROGRAM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl font-bold text-white mb-3 leading-tight">
              Earn Up to 15%
              <br />
              Commission
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-10">
              No inventory. No shipping. Just share & earn.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              {/* Stat 1 */}
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-accent-gold">
                    15%
                  </span>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Max Commission
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-cyan-400">24hr</span>
                </div>
                <p className="text-gray-300 text-sm font-medium">Payout</p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-accent-gold">
                    50k+
                  </span>
                </div>
                <p className="text-gray-300 text-sm font-medium">Products</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-br from-accent-gold to-warning text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors flex items-center gap-2 w-fit">
              Start Earning <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AffiliateSection;
