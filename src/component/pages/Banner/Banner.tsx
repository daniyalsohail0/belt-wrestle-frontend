import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="banner-container relative h-64 h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Discover Exceptional Championship Belts
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-8">
          Elevate your champions with our premium wrestling belts collection
        </p>
        <button className="bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 font-semibold text-base md:text-lg transition-transform transform hover:scale-105 focus:outline-none">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
