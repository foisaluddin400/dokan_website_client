"use client";

import React from "react";
import { Users, Store, ShoppingCart, DollarSign } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const stats: Stat[] = [
  { icon: Users, label: "Active Users", value: "25K+" },
  { icon: Store, label: "Total Shops", value: "8K+" },
  { icon: ShoppingCart, label: "Products Sold", value: "120K+" },
  { icon: DollarSign, label: "Total Earnings", value: "৳ 3.5Cr+" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-14  ">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-br from-primary to-secondary rounded-xl">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative py-11 rounded-2xl   shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden"
            >

              {/* Glow */}
      

          

              {/* Value */}
              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-sm text-gray-300 mt-1">
                {item.label}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default StatsSection;