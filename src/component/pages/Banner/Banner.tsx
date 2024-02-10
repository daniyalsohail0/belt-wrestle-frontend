import React from "react";
import "./Banner.css";
import bannerImage from "../../../images/undertaker.png";

const Banner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center slide-in">
      <div className="w-11/12 flex md:flex-row flex-col items-center">
        <div className="flex flex-col w-1/2 m-4 p-4">
          <h1 className="md:text-6xl text-3xl font-bold uppercase">
            Be Your own champion
          </h1>
          <br />
          <button className="bg-[#0F0F0F] w-[150px] rounded text-white px-3 py-4 font-semibold text-base text-sm transition-transform transform hover:scale-105 focus:outline-none">
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={bannerImage} alt="bannerImage"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
