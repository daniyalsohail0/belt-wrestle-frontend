import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

interface ProductCardProps {
  productName: string;
  productImage: string;
  productPrice: string;
  productDescription: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productImage,
  productPrice,
  productDescription,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [savedClicked, setSavedClicked] = useState<boolean>(false);

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${productName} to cart`);
  };

  const handleSave = () => {
    // Implement your save logic here
    setSavedClicked(!savedClicked);
  };

  return (
    <div
      className="relative bg-white shadow-xl p-4 border-2 border-solid border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={productImage}
          alt={productName}
          className="w-full"
        />
        {isHovered && (
          <div className="absolute bottom-2 right-2">
            <button onClick={handleSave}>
              <FaHeart
                className={savedClicked ? "text-red-600" : "text-white"}
              />
            </button>
          </div>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold mb-1">{productName}</h3>
        <p className="text-gray-500 text-xs mb-2">{productPrice}</p>
        <p className="text-xs mb-2">{productDescription}</p>
        <div className="flex justify-between">
          <button
            className="bg-black text-white p-2 w-full font-semibold text-xs transition-transform transform hover:scale-105 focus:outline-none"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
