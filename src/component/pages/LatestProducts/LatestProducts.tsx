import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../../utils/patchesData";
import { IoArrowForwardOutline } from "react-icons/io5";

const LatestProducts: React.FC = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  const products = data.slice(0,4)

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="md:w-11/12 w-full flex justify-between items-center mt-8">
        <h3 className="text-xl font-semibold">Latest products</h3>
        <button
          className="hover:text-green-600 text-xs flex items-center gap-2"
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
        >
          <span>View all</span>
          {showArrow && <IoArrowForwardOutline />}
        </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:w-11/12 w-full m-4">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            productID={item.productDescription}
            productName={item.productName}
            productSubtitle={item.productSubtitle}
            productImage={item.productImage}
            productPrice={item.productPrice}
            productDescription={item.productDescription}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default LatestProducts;
