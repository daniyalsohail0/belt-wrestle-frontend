import React, { useState } from "react";
import PreHeader from "./PreHeader";
import { IoMenuSharp, IoBagOutline, IoHeartOutline } from "react-icons/io5";
import NavContent from "./NavContent";
import Search from "../Search";

const Navbar: React.FC = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const handleNavOpen = () => {
    setNavToggle(true);
  };

  const handleNavClose = () => {
    setNavToggle(false);
  };

  return (
    <header>
      <PreHeader />
      <nav className="flex justify-between items-center">
        <div>
          <h2>Belt Wrestle</h2>
        </div>
        <div>
          <ul className="flex gap-2 p-2">
            <li>New & Featured</li>
            <li>Customized</li>
            <li>Categories</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex gap-2 px-2">
          <Search />
          <button>
            <IoHeartOutline className="text-2xl text-black" />
          </button>
          <button>
            <IoBagOutline className="text-2xl text-black" />
          </button>
          {!navToggle ? (
            <button onClick={handleNavOpen} className="block md:hidden">
              <IoMenuSharp className="text-2xl text-black" />
            </button>
          ) : (
            <NavContent handleNavClose={handleNavClose} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
