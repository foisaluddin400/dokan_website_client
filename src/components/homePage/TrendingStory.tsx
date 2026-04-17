import React from "react";
import { Star } from "lucide-react";

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
    <section
      className="w-full py-14 px-4 md:px-10"
      style={{ background: "var(--background)" }}
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Trending Stores
        </h2>

        <p style={{ color: "var(--text-secondary)" }} className="mt-2">
          Discover top performing sellers on our platform
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stores.map((store, index) => (
          <div
            key={index}
            className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            {/* Top Row */}
            <div className="flex items-center gap-3">
              <img
                src={store.logo}
                alt={store.name}
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: "1px solid var(--border)" }}
              />

              <div>
                <h3
                  className="font-semibold transition"
                  style={{ color: "var(--text)" }}
                >
                  {store.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                  <Star size={14} style={{ color: "#F7C948" }} />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {store.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 flex justify-between text-sm">
              <div>
                <p style={{ color: "var(--text-muted)" }}>Sold</p>
                <p style={{ color: "var(--text)" }} className="font-semibold">
                  {store.sold}
                </p>
              </div>

              <div>
                <p style={{ color: "var(--text-muted)" }}>Products</p>
                <p style={{ color: "var(--text)" }} className="font-semibold">
                  {store.products}
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-4 w-full py-2 rounded-xl font-medium transition"
              style={{
                background: "var(--primary)",
                color: "#fff",
              }}
            >
              Visit Store
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingStory;