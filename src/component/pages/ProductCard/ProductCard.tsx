import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../../../state/cart/cartSlice";
import { addSavedItem } from "../../../state/savedItems/savedItemSlice";
import { Link } from "react-router-dom";

interface ProductCardProps {
  productID: number;
  productName: string;
  productImage: string;
  productPrice: string;
  productDescription: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productID,
  productName,
  productImage,
  productPrice,
  productDescription,
}) => {
  const [savedClicked, setSavedClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: productID,
        name: productName,
        price: productPrice,
        imageUrl: productImage,
        quantity: 1,
      })
    );
  };

  const image =
    productImage ||
    `https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png`;

  const handleSave = () => {
    setSavedClicked(true);
    dispatch(
      addSavedItem({
        id: productID,
        name: productName,
        price: productPrice,
        imageUrl: image,
      })
    );
  };

  const product = {
    productID,
    productName,
    productImage,
    productPrice,
    productDescription,
  };

  return (
    <div className="relative bg-white shadow-xl p-4 border-2 border-solid border-gray-100">
      <div className="relative">
        <img src={productImage} alt={productName} className="w-full" />
        <div className="absolute bottom-2 right-2">
          <button onClick={handleSave}>
            <FaHeart className={savedClicked ? "text-red-600" : "text-white"} />
          </button>
        </div>
      </div>
      <div className="p-2">
        <Link
          to={`/product/${product.productID}`}
          state={product}
        >
          <h3 className="text-sm font-semibold mb-1">{productName}</h3>
        </Link>
        <p className="text-gray-500 text-xs mb-2">{productPrice}</p>
        <p className="text-xs mb-2">{productDescription}</p>
        <div className="flex justify-between">
          <button
            className="bg-black text-white px-2 py-3 w-full font-semibold text-xs transition-transform transform hover:scale-105 focus:outline-none"
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
