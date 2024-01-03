import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../../utils/placeholderData";
import { IoArrowForwardOutline } from "react-icons/io5";

const NFLBelts: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="m-1 p-1">NFL Championship Belts</h1>
      <p className="text-gray-500 text-sm">
        <i>Handcrafted Championship Belts</i>
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-11/12 m-4">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            productName={item.name}
            productImage={item.imageURL}
            productPrice={item.price}
            productDescription={item.description}
          />
        ))}
      </div>
      <br />
      <button className="bg-black text-white px-4 py-3 flex gap-2 items-center font-semibold text-sm transition-transform transform hover:scale-105 focus:outline-none">
        <span>View More</span>
        <IoArrowForwardOutline />
      </button>
    </div>
  );
};

export default NFLBelts;
