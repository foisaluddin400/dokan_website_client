"use client";

import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  MapPin,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    desc: "Your payments and data are fully protected with advanced security.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery from nearby verified sellers.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our support team is always ready to help you anytime.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Sellers",
    desc: "All shops are verified with real location and trust score.",
  },
  {
    icon: MapPin,
    title: "Location-Based",
    desc: "Find products and shops near your location easily.",
  },
  {
    icon: Zap,
    title: "Earn Without Stock",
    desc: "Start earning by selling products without investment.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-16  ">

      {/* HEADER */}
     <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-10 bg-accent-gold rounded-sm" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
            Why Choose Me?
          </h1>
          <p className="text-gray-400 text-sm"> Discover the most popular stores loved by our customers</p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >

            

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition mb-4">
                <Icon size={22} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-text mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>

            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-medium hover:bg-primary-dark transition shadow-medium">
          Start Your Journey
        </button>
      </div>

    </section>
  );
};

export default WhyChooseUs;