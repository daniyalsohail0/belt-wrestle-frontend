import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../../utils/latestProducts";

const RecommendedProducts: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center mt-8">
        <h3 className="text-2xl font-bold">Recommended For You</h3>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-1 w-full my-4">
        {products.map((item, index) => (
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

export default RecommendedProducts;
