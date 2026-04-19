import React from "react";
import { Gift, Trophy, Users, Star } from "lucide-react";

const rewards = [
  {
    icon: Gift,
    title: "Earn Points",
    desc: "Get reward points for every purchase and activity.",
    value: "Up to 500 pts",
  },
  {
    icon: Users,
    title: "Referral Bonus",
    desc: "Invite friends and earn bonus points instantly.",
    value: "৳ 200 / referral",
  },
  {
    icon: Trophy,
    title: "Top Seller Rewards",
    desc: "Top sellers get exclusive rewards & badges.",
    value: "Monthly Rewards",
  },
  {
    icon: Star,
    title: "Level System",
    desc: "Unlock higher levels and premium benefits.",
    value: "VIP Access",
  },
];

const RewardsSection = () => {
  return (
    <section className="w-full py-16  bg-[var(--color-surface-2)]">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
          Earn Rewards & Grow Faster
        </h2>
        <p className="text-[var(--color-text-secondary)] mt-2">
          Get rewarded for every action you take on the platform
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {rewards.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >

              {/* Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent" />

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition mb-4">
                <Icon size={20} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-[var(--color-text)] mb-1">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                {item.desc}
              </p>

              {/* VALUE */}
              <span className="text-xs font-medium text-[var(--color-primary)]">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA SECTION */}
      <div className="mt-12 text-center">

        <div className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-8 py-4 rounded-2xl shadow-strong">

          <h3 className="text-lg font-semibold">
            Start Earning Today 🚀
          </h3>

          <p className="text-sm text-white/80 mt-1">
            Join now and unlock exclusive rewards & bonuses
          </p>

          <button className="mt-4 px-6 py-2 rounded-xl bg-white text-[var(--color-primary)] font-medium hover:bg-[var(--color-surface)] transition">
            Get Started
          </button>

        </div>

      </div>

    </section>
  );
};

export default RewardsSection;