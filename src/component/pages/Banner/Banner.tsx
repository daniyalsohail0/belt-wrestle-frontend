import React from "react";
import './Banner.css'

const Banner: React.FC = () => {
  return (
    <div className="slide-in background text-white min-h-screen flex items-center justify-center">
      <div className="text-center white-glassmorphism p-8 m-6">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 uppercase">
          Become the undisputed champion
        </h1>
        <button className="bg-[#0F0F0F] text-white rounded px-3 py-2 font-semibold text-base text-sm transition-transform transform hover:scale-105 focus:outline-none">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
