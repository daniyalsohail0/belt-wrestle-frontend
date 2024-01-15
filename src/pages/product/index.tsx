import React, { useState } from "react";
import Layout from "../../layout";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import ImageSlider from "../../component/pages/ImageCarousel/ImageSlider";
import Reviews from "../../component/pages/Reviews/Reviews";
import ProductDescription from "../../component/pages/Description/ProductDescription";
import reviewsData from "../../utils/reviewsData";
import { useDispatch } from "react-redux";
import { addItem } from "../../state/cart/cartSlice";
import { useLocation } from "react-router-dom";

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location)

  const product = location.state;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.productID,
        name: product.productName,
        price: product.productPrice,
        imageUrl: product.productImage,
        quantity: quantity,
      })
    );
  };
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="w-4/5">
          <div className="flex md:flex-row flex-col md:gap-10 gap-6 items-center">
            <div className="md:w-1/2">
              <ImageSlider />
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <h1>{product.productName}</h1>
              <span className="font-bold">Price: {product.productPrice}</span>
              <span className="text-sm">{product.productReview}</span>
              <p className="text-sm">
                {product.productDescription}
              </p>
              <div className="flex gap-2 items-center">
                {quantity === 1 ? (
                  <button disabled onClick={() => setQuantity(quantity - 1)}>
                    <AiFillMinusCircle className="text-xl text-red-400" />
                  </button>
                ) : (
                  <button onClick={() => setQuantity(quantity - 1)}>
                    <AiFillMinusCircle className="text-xl text-red-500" />
                  </button>
                )}
                <span className="font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <IoAddCircleSharp className="text-xl text-green-600" />
                </button>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-black text-white px-3 py-2 hover:scale-105 transition-transform"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {}}
                  className="flex gap-4 items-center bg-white px-3 py-2 hover:scale-105 transition-transform border-[1px] border-solid border-black"
                >
                  <FaHeart className="text-red-600" />
                  Save
                </button>
              </div>
            </div>
          </div>
          <ProductDescription />
          <div className="grid md:grid-cols-3">
            {reviewsData.map((review, index) => (
              <Reviews
                key={index}
                imageUrl={review.imageUrl}
                name={review.name}
                date={review.date}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
