import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Earn money by selling products <br />
          <span className="text-blue-400">without stock</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Join subscription, select products, and start marketing
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition">
            Join Now
          </button>

          <button className="bg-white/10 border border-white text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white/20 transition">
            Browse Products
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;