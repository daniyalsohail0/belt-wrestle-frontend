import React from "react";
import bannerImage from "../../../images/png-transparent-john-cena-wwe-championship-royal-rumble-world-heavyweight-championship-wwe-united-states-championship-john-cena-tshirt-boxing-glove-hand.png";

const Banner: React.FC = () => {
  return (
    <div className="h-64 h-[600px] flex items-center justify-center bg-black text-white">
      <div className="flex justify-between items-center w-3/4">
        <div className="w-1/2">
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
        <div className="w-1/2 flex justify-center items-center">
          <img src={bannerImage} alt="John Cena Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
