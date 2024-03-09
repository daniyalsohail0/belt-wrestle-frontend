import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  productID: string;
  productName: string;
  productSubtitle: string;
  productImage: string;
  productPrice: number;
  productDescription: string;
}

const CustomProductCard: React.FC<ProductCardProps> = ({
  productID,
  productName,
  productSubtitle,
  productImage,
  productPrice,
  productDescription,
}) => {
  const product = {
    productID,
    productName,
    productSubtitle,
    productImage,
    productPrice,
    productDescription,
  };

  return (
    <Link
      to={`/custom-products/${product.productID}`}
      className="bg-white py-4 px-0 rounded-md hover:underline"
    >
      <div className="flex justify-center items-center">
        <img src={productImage} alt={productName} className="w-full h-auto" />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="pt-3">
          <h3 className="text-sm font-semibold mb-1 uppercase">
            {productName}
          </h3>
          <p className="text-sm font-bold">£{productPrice} GBP</p>
        </div>
      </div>
    </Link>
  );
};

export default CustomProductCard;
