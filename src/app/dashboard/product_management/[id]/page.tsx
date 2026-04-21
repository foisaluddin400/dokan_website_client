"use client";

import NavigatePage from "@/components/NavigatePage";

const ProductDetails = () => {
  const product = {
    name: "Wireless Headphones",
    price: 1200,
    stock: 20,
    description:
      "High quality wireless headphones with deep bass and long battery life.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  };

  return (
    <div className="p-4 md:p-6">

      <NavigatePage title="Product Details" />

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* IMAGE */}
        <div className="bg-white p-4 rounded-xl border">
          <img
            src={product.image}
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* INFO */}
        <div className="bg-white p-6 rounded-xl border">

          <h2 className="text-2xl font-bold">{product.name}</h2>

          <p className="text-gray-500 mt-2">
            {product.description}
          </p>

          <div className="mt-4 space-y-2">

            <p>
              💰 Price:{" "}
              <span className="font-bold">৳ {product.price}</span>
            </p>

            <p>
              📦 Stock:{" "}
              <span className="font-bold">{product.stock}</span>
            </p>

          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-6">

            <button className="px-5 py-2 bg-green-600 text-white rounded-lg">
              Edit Product
            </button>

            <button className="px-5 py-2 bg-red-600 text-white rounded-lg">
              Delete
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;