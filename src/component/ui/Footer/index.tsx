import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/belt.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center">
        <div className="md:flex w-11/12 md:p-8 py-4 md:gap-4">
          <div>
            <img src={logo} alt="edspareLogo" width={180} />
            <p className="p-2 text-sm">
              Smarter Learning, Brighter Tomorrow: EdSpare - Where AI Shapes
              Education.
            </p>
            <div className="flex gap-2 p-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 w-3/4 p-2">
            <div>
              <p className="py-3 font-semibold">Pages</p>
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="py-3 font-semibold">Company</p>
              <ul>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/mission-vision">Mission & Vision</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="py-3 font-semibold">Resources</p>
              <ul>
                <li>Blogs</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-11/12 md:flex justify-between items-center md:py-3 md:px-4 py-2 text-xs">
          <div>
            <span className="text-xs">
              Copyright © 2023 Hyper Infinity Systems LTD. - All Rights
              Reserved.
            </span>
          </div>
          <div>
            <ul className="md:flex hidden gap-4">
              <li>
                <Link to="/privacy-policy">Security & Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-condition">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Notice</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
