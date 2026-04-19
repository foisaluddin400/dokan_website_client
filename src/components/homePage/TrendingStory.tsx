import React from "react";
import { Star } from "lucide-react";
import Title from "../ui/Title";

const stores = [
  {
    name: "Tech World",
    logo: "https://i.pravatar.cc/100?img=1",
    rating: 4.8,
    sold: 1250,
    products: 86,
  },
  {
    name: "Fashion Hub",
    logo: "https://i.pravatar.cc/100?img=2",
    rating: 4.6,
    sold: 980,
    products: 54,
  },
  {
    name: "Home Store",
    logo: "https://i.pravatar.cc/100?img=3",
    rating: 4.7,
    sold: 1430,
    products: 102,
  },
  {
    name: "Gadget Zone",
    logo: "https://i.pravatar.cc/100?img=4",
    rating: 4.9,
    sold: 2100,
    products: 120,
  },
];

const TrendingStory = () => {
  return (
    <section className="w-full py-14 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-10 bg-accent-gold rounded-sm" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
            Trending Stores
          </h1>
          <p className="text-gray-400 text-sm"> Discover the most popular stores loved by our customers</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stores.map((store, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-white p-5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top Row */}
            <div className="flex items-center gap-3">
              <img
                src={store.logo}
                alt={store.name}
                className="w-12 h-12 rounded-full border border-border object-cover"
              />

              <div>
                <h3 className="font-semibold text-text transition">
                  {store.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                  <Star size={14} style={{ color: "#F7C948" }} />
                  <span className="text-secondary">{store.rating}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 flex justify-between text-sm">
              <div>
                <p className="text-text-muted">Sold</p>
                <p className="font-semibold text-text">{store.sold}</p>
              </div>

              <div>
                <p className="text-text-muted">Products</p>
                <p className="font-semibold text-text">{store.products}</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 bg-gradient-to-br from-primary to-secondary text-white w-full py-2 rounded-xl font-medium transition">
              Visit Store
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingStory;
