"use client";

import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-20 ">

      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-20 blur-3xl bg-white" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16 text-white">

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Start Your Online Business Today 🚀
          </h2>

          <p className="mt-4 text-white/80 text-sm md:text-lg max-w-xl mx-auto">
            Sell products, earn money, or start without investment. Everything in one platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <button className="px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-[var(--color-surface)] transition">
              Become Seller
            </button>

            <button className="px-8 py-3 rounded-xl border border-white text-white hover:bg-white/10 transition">
              Start Earning
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;