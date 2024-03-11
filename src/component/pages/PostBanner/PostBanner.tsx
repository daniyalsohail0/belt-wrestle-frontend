import React from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FcRating } from "react-icons/fc";

const PostBanner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 mt-6 my-2 p-4 grid md:grid-cols-5 grid-cols-2 gap-4">
        <div>
          <IoEyeOffSharp className="text-3xl" />
          <h3 className="font-semibold py-2">No hidden charges</h3>
          <p className="text-xs py-1">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
        <div>
          <CiDeliveryTruck className="text-3xl" />
          <h3 className="font-semibold py-2">Free Delivery</h3>
          <p className="text-xs py-1">
            On all orders over 100 GBP, cheaper delivery for other products.
          </p>
        </div>
        <div>
          <FaClock className="text-3xl" />
          <h3 className="font-semibold py-2">On Time</h3>
          <p className="text-xs py-1">
            Have a deadline? Let us know and we promise to deliver on time.
          </p>
        </div>
        <div>
          <MdOutlineDesignServices className="text-3xl" />
          <h3 className="font-semibold py-2">Free Design</h3>
          <p className="text-xs py-1">
            All orders receive a design visual (Terms and Condition apply).
          </p>
        </div>
        <div>
          <FcRating className="text-3xl" />
          <h3 className="font-semibold py-2">5 Star Rated</h3>
          <p className="text-xs py-1">
            Over a thousand 5 star reviews, we must be doing something right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
