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
    
    >
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 rounded-xl transition group border border-border"
              
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full transition group-hover:bg-primary"
                  style={{
                    background: "rgba(91, 46, 255, 0.1)", // primary light
                  }}
                >
                  <Icon
                    size={18}
                    
                    className="group-hover:text-accent text-primary transition"
                  />
                </div>

                {/* Text */}
                <p
                  className="text-sm text-text font-medium text-center md:text-left"
                  
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