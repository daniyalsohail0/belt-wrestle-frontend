import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import data from "./EliteData";

const EliteSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1>Elite Series</h1>
      <div className="grid grid-cols-4 gap-4 w-11/12">
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
    </div>
  );
};

export default EliteSection;
