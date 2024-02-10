import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../../../state/cart/cartSlice";
import { addSavedItem } from "../../../state/savedItems/savedItemSlice";
import { Link } from "react-router-dom";
import { toggleCart } from "../../../state/cartToggle/cartToggleSlice";
import LoadingBar from "react-top-loading-bar";
import Button from "../../ui/Button/Button";

interface ProductCardProps {
  productID: string;
  productName: string;
  productSubtitle: string;
  productImage: string;
  productPrice: string;
  productDescription: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productID,
  productName,
  productSubtitle,
  productImage,
  productPrice,
  productDescription,
}) => {
  const [savedClicked, setSavedClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<number>(0);
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    setLoading(30); // Start loading animation

    // Simulate an asynchronous operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dispatch the action to add to cart
    dispatch(
      addItem({
        id: productID,
        name: productName,
        price: productPrice,
        imageUrl: productImage,
        quantity: 1,
      })
    );

    setLoading(100); // Complete loading animation
    // Toggle the cart
    dispatch(toggleCart());
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
    productSubtitle,
    productImage,
    productPrice,
    productDescription,
  };

  return (
    <div className="bg-white p-4 rounded-md md:m-4 m-1 border-[1px] border-gray-200">
      <div className="flex justify-center items-center">
        <img src={productImage} alt={productName} className="md:w-[250px] w-[190px] h-[200px]" />
      </div>
      <div className="flex flex-col justify-between gap-2 h-[150px]">
        <div className="pt-3 flex justify-between items-center">
          <Link to={`/product/${product.productID}`} state={product}>
            <h3 className="text-sm font-semibold mb-1">{productName}</h3>
          </Link>
          <button onClick={handleSave}>
            <FaHeart
              className={savedClicked ? "text-red-600" : "text-gray-300"}
            />
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-2 font-bold">{productPrice}</p>
        <div className="flex justify-between mt-auto">
          <Button handleClick={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
      <LoadingBar color="#379237" progress={loading} height={7} />
    </div>
  );
};

export default ProductCard;
