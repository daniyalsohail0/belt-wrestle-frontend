import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="slide-in background text-white min-h-screen flex items-end justify-center">
      <button className="bg-[#0F0F0F] text-white px-3 py-2 font-semibold text-base text-sm transition-transform transform hover:scale-105 focus:outline-none">
        Explore Now
      </button>
    </div>
  );
};

export default Banner;
