import React, { useState } from "react";
import Layout from "../../layout";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import ImageSlider from "../../component/pages/ImageCarousel/ImageSlider";
import Reviews from "../../component/pages/Reviews/Reviews";
import ProductDescription from "../../component/pages/Description/ProductDescription";

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="w-4/5">
          <div className="flex md:flex-row flex-col md:gap-10 gap-6 items-center">
            <div className="md:w-1/2">
              <ImageSlider />
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <h1>Product Name</h1>
              <span className="font-bold">Price: $199</span>
              <span className="text-sm">Rating: 4/5</span>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
                porro corporis aliquam commodi fuga quis minima possimus enim!
                Aperiam laboriosam error explicabo. Saepe aut vitae asperiores
                eaque exercitationem vel aperiam dolor est nam sapiente iste
                quis voluptate, fugit expedita voluptatum quod eveniet rerum
                dolores, doloremque iure. Assumenda tenetur incidunt quibusdam.
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
              <div>
                <button className="bg-black text-white px-3 py-2 hover:scale-105 transition-transform">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <ProductDescription />
          <Reviews />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
