import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import featuredProducts from "../../../utils/featuredProducts";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FeaturedProducts: React.FC = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="md:w-11/12 w-full flex justify-between items-center mt-8">
        <h3 className="text-2xl font-semibold">Featured products</h3>
        <Link to={`/shop`}>
          <button
            className="hover:text-green-600 text-xs flex items-center gap-2"
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
          >
            <span>View all</span>
            {showArrow && <IoArrowForwardOutline />}
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-8 md:w-11/12 w-full">
        {featuredProducts.map((item, index) => (
          <ProductCard
            key={index}
            productID={item.productID}
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

export default FeaturedProducts;
