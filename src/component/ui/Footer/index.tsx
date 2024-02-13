import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaPinterestSquare, FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../../images/branding/BWprimary logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="flex justify-center items-center">
        <div className="md:flex w-11/12 md:p-8 py-4 md:gap-4">
          <div>
          <img
              src={logo}
              alt="logo"
              className={`w-40 filter invert`}
            />
            <br />
            <p className="text-sm py-2">
              Wear the legacy, feel the prestige – our WWE and UFC belts embody
              the essence of true champions.
            </p>
            <div className="flex gap-2 items-center my-1 py-1">
              <IoLocationSharp className="text-xl" />
              <span className="text-sm font-semibold">
                Mirror Works, 12 Marshgate Ln, London E15 2NH
              </span>
            </div>
            <div className="flex gap-2 items-center my-1 py-1">
              <IoCall className="text-xl" />
              <span className="text-sm font-semibold">
                +44 7467 100 942
              </span>
            </div>
            <div className="flex gap-2 items-center my-1 py-1">
              <MdEmail className="text-xl" />
              <span className="text-sm font-semibold">
                info@beltwrestle.com
              </span>
            </div>
            <br />
            <div className="flex gap-2 p-2">
              <FaFacebook className="text-blue-700 text-2xl hover:scale-125 transform transition-transform duration-200 ease-in-out" />
              <FaInstagram className="text-purple-700 text-2xl hover:scale-125 transform transition-transform duration-200 ease-in-out" />
              <FaTwitter className="text-sky-700 text-2xl hover:scale-125 transform transition-transform duration-200 ease-in-out" />
              <FaPinterestSquare className="text-red-700 text-2xl hover:scale-125 transform transition-transform duration-200 ease-in-out" />
              <FaYoutube className="text-red-800 text-2xl hover:scale-125 transform transition-transform duration-200 ease-in-out" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 w-3/4 p-2">
            <div>
              <p className="py-3 font-semibold">Pages</p>
              <ul>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/products">Products</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="py-3 font-semibold">Company</p>
              <ul>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/team">Team</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/mission-vision">Mission & Vision</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/policies/refund-policy">Refund Policy</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/policies/shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="py-3 font-semibold">Resources</p>
              <ul>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="py-2 text-sm hover:underline">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-900 text-white">
        <div className="w-11/12 md:flex justify-between items-center md:py-3 md:px-4 py-2 text-xs">
          <div>
            <span className="text-xs">
              Copyright © 2023 | Belt Wrestle LTD. - All Rights
              Reserved.
            </span>
          </div>
          <div>
            <ul className="md:flex hidden gap-4">
              <li>
                <Link to="/policies/privacy-policy">
                  Security & Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms-condition">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/policies/cookie-policy">Cookie Notice</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
