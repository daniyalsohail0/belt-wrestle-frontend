import React, { useState } from "react";
import SavedItems from "../SavedItems/SavedItems";
import Cart from "../Cart/Cart";
import UserDropdown from "../UserDropdown/UserDropdown";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import PreHeader from "./PreHeader";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileDropdown from "../Dropdown/MobileDropdown";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const collectionDropdown = [
    {
      name: "AEW Belts",
      link: "/aew-belts",
    },
    {
      name: "CNC Belts",
      link: "/cnc-belts",
    },
    {
      name: "WWE Belts",
      link: "/wwe-belts",
    },
    {
      name: "IWGP Belts",
      link: "/iwgp-belts",
    },
    {
      name: "Boxing Belts",
      link: "/iwgp-belts",
    },
    {
      name: "UFC Belts",
      link: "/ufc-belts",
    },
  ];

  const customDropdown = [
    {
      name: "Customized Belts",
      link: "/customized-belts",
    },
    {
      name: "Gifts",
      link: "/gifts",
    },
  ];

  return (
    <nav className="sticky top-0 flex flex-col justify-center items-center z-[1] bg-white">
      <PreHeader />
      <div className="w-11/12 flex justify-between items-center p-2 my-2">
        {/* Remove or add content to the following div */}
        <div className="flex items-center gap-6">
          <Link to={`/`}>
            <img
              src={require("../../../images/belt.png")}
              alt="logo"
              className="w-1/4 md:w-[200px]"
            />
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-4 text-sm">
              <li>
                <Dropdown name="Collection" list={collectionDropdown} />
              </li>
              <li>
                <Dropdown name="Customized" list={customDropdown} />
              </li>
              <li>
                <Link to={`/reviews`}>Reviews</Link>
              </li>
              <li>
                <Link to={`/blogs`}>Blogs</Link>
              </li>
              <li>
                <Link to={`/contact-us`}>Contact us</Link>
              </li>
              <li>
                <Link to={`/faqs`}>Faqs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex hidden items-center gap-3 bg-gray-800 rounded-full p-1">
          <Search />
          <SavedItems />
          <Cart />
          <UserDropdown />
        </div>
        <div className="flex md:hidden relative">
          {!toggle && (
            <HiMenuAlt4
              fontSize={28}
              className="md:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <AiOutlineClose
              fontSize={28}
              className="md:hidden cursor-pointer"
              onClick={() => setToggle(false)}
            />
          )}
          {toggle && (
            <div
              className="z-10 fixed -top-0 -right-2 p-3 w-[80vw] h-screen shadow-2xl md:hidden list-none
      flex flex-col justify-start items-start bg-white animate-slide-in"
            >
              <div
                className="place-self-end p-2"
                onClick={() => setToggle(false)}
              >
                <AiOutlineClose />
              </div>
              <div className="w-full p-2">
                <ul className="flex flex-col gap-4 text-lg">
                  <li>
                    <MobileDropdown
                      name="Collection"
                      list={collectionDropdown}
                    />
                  </li>
                  <li>
                    <MobileDropdown name="Customized" list={customDropdown} />
                  </li>
                  <li>
                    <Link to={`/reviews`} className="text-black font-semibold">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to={`/blog`} className="text-black font-semibold">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/contact-us`}
                      className="text-black font-semibold"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-11/12 mt-auto">
                <button className="bg-black p-2 m-2 text-white w-full">
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
