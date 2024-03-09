import React from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FcRating } from "react-icons/fc";

const PostBanner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 mt-6 my-2 p-4 grid grid-cols-5 gap-4">
        <div>
          <IoEyeOffSharp className="text-3xl" />
          <h3 className="font-semibold">No hidden charges</h3>
          <p className="text-xs">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
        <div>
          <CiDeliveryTruck className="text-3xl" />
          <h3 className="font-semibold">No hidden charges</h3>
          <p className="text-xs">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
        <div>
          <FaClock className="text-3xl" />
          <h3 className="font-semibold">No hidden charges</h3>
          <p className="text-xs">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
        <div>
          <MdOutlineDesignServices className="text-3xl" />
          <h3 className="font-semibold">No hidden charges</h3>
          <p className="text-xs">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
        <div>
          <FcRating className="text-3xl" />
          <h3 className="font-semibold">No hidden charges</h3>
          <p className="text-xs">
            All our prices are displayed upfront, no last minute surprises
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
