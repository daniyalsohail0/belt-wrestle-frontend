import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaPinterestSquare, FaYoutube } from "react-icons/fa";

const PreHeader: React.FC = () => {
  return (
    <div className="bg-stone-50 md:flex justify-between items-center bg-gray-100 text-xs p-2 w-full hidden">
      <div className="flex gap-2">
        <FaFacebook className="text-blue-700 text-sm hover:scale-125 transform transition-transform duration-200 ease-in-out" />
        <FaInstagram className="text-purple-700 text-sm hover:scale-125 transform transition-transform duration-200 ease-in-out" />
        <FaTwitter className="text-sky-700 text-sm hover:scale-125 transform transition-transform duration-200 ease-in-out" />
        <FaPinterestSquare className="text-red-700 text-sm hover:scale-125 transform transition-transform duration-200 ease-in-out" />
        <FaYoutube className="text-red-800 text-sm hover:scale-125 transform transition-transform duration-200 ease-in-out" />
      </div>
      <div>
        <ul className="flex gap-1">
          <li className="underline cursor-pointer">Affiliate Program</li>
          <li>|</li>
          <li className="underline cursor-pointer">Help</li>
          <li>|</li>
          <li className="underline cursor-pointer">Join Us</li>
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;
