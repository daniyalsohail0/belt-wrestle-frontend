import React, { useState } from "react";
import PreHeader from "./PreHeader";
import { IoMenuSharp, IoBagOutline, IoHeartOutline } from "react-icons/io5";
import NavContent from "./NavContent";

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
      <nav className="flex justify-between">
        <div>
          <h2>Belt Wrestle</h2>
        </div>
        <div className="flex gap-2 px-2">
          <button>
            <IoHeartOutline className="text-2xl text-black" />
          </button>
          <button>
            <IoBagOutline className="text-2xl text-black" />
          </button>
          {!navToggle ? (
            <button onClick={handleNavOpen} className="hidden">
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
