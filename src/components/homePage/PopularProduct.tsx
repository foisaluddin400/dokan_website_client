import React from "react";
import { Star } from "lucide-react";
import Title from "../ui/Title";

const products = [
  {
    title: "Wireless Headphones Pro",
    price: 2500,
    rating: 4.8,
    sold: 1200,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Tech World",
      logo: "https://i.pravatar.cc/100?img=1",
    },
  },
  {
    title: "Smart Watch Series X",
    price: 4500,
    rating: 4.7,
    sold: 980,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Gadget Zone",
      logo: "https://i.pravatar.cc/100?img=4",
    },
  },
  {
    title: "Nike Running Shoes",
    price: 3200,
    rating: 4.6,
    sold: 1500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Fashion Hub",
      logo: "https://i.pravatar.cc/100?img=2",
    },
  },
  {
    title: "Bluetooth Speaker",
    price: 1800,
    rating: 4.9,
    sold: 2100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    store: {
      name: "Sound Store",
      logo: "https://i.pravatar.cc/100?img=5",
    },
  },
];

const PopularProduct = () => {
  return (
    <section
      className="w-full py-10 px-4 md:px-10"
     
    >
      {/* Header */}
    <Title
  title="Popular Products"
  description="Check out the best-selling products that our customers love"
  
/>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group rounded-xl bg-white border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1"
          
          >
            {/* Image */}
            <div className="overflow-hidden m-3 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              {/* Title */}
              <h3
                className="text-sm text-text font-semibold line-clamp-1"
           
              >
                {product.title}
              </h3>

              {/* Price */}
              <p
                className="text-sm text-primary font-bold mt-1"
              
              >
                ৳ {product.price}
              </p>

              {/* Rating + Sold */}
              <div className="flex items-center justify-between mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <Star size={12} style={{ color: "#F7C948" }} />
                  <span className="text-secondary">
                    {product.rating}
                  </span>
                </div>

                <span className="text-secondary">
                  {product.sold} sold
                </span>
              </div>

              {/* Store */}
              <div
                className="flex items-center gap-2 border-t border-border mt-3 pt-2"
               
              >
                <img
                  src={product.store.logo}
                  alt={product.store.name}
                  className="w-5 h-5 rounded-full border border-border object-cover"
             
                />

                <span
                  className="text-xs truncate text-secondary"
                
                >
                  {product.store.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;