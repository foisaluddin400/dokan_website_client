import React from "react";
import {
  Truck,
  RefreshCcw,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping & Return" },
  { icon: RefreshCcw, title: "Money Back Guarantee" },
  { icon: Headphones, title: "Online Support 24/7" },
  { icon: ShieldCheck, title: "Secure Payment" },
];

const StatsBar = () => {
  return (
    <section
      className="py-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 rounded-xl transition group"
                style={{
                  background: "var(--surface)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full transition group-hover:bg-[var(--primary)]"
                  style={{
                    background: "rgba(91, 46, 255, 0.1)", // primary light
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: "var(--primary)" }}
                    className="group-hover:text-white"
                  />
                </div>

                {/* Text */}
                <p
                  className="text-sm font-medium text-center md:text-left"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default StatsBar;