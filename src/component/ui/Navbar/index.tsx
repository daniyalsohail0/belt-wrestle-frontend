import React, { useState } from "react";
import SavedItems from "../SavedItems/SavedItems";
import Cart from "../Cart/Cart";
import UserDropdown from "../UserDropdown/UserDropdown";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileDropdown from "../Dropdown/MobileDropdown";
import logo from '../../../images/branding/BWprimary logo.png'

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const collectionDropdown = [
    {
      name: "PVC Patches",
      link: "/collection/pvc-patches",
    },
    {
      name: "IR Patches",
      link: "/collection/ir-patches",
    },
    {
      name: "Embroidery Patches",
      link: "/collection/embroidery-patches",
    },
    {
      name: "Laser Cut",
      link: "/collection/laser-cut",
    },
    {
      name: "Printed",
      link: "/collection/printed",
    },
    {
      name: "Reflective",
      link: "/collection/reflective",
    },
    {
      name: "American Made PVC",
      link: "/collection/american-made-pvc",
    },
  ];

  const customDropdown = [
    {
      name: "Customized Patches",
      link: "/custom/patches",
    },
    {
      name: "Customized Keychains",
      link: "/custom/keychains",
    },
  ];

  return (
    <nav className="flex flex-col justify-center items-center z-[1] bg-white">
      <div className="w-11/12 flex justify-between items-center p-2 my-2">
        {/* Remove or add content to the following div */}
        <div className="flex items-center gap-6">
          <Link to={`/`}>
            <img src={logo} alt="logo" className="w-[175px]" />
          </Link>
          <div className="hidden md:block font-semibold pt-3">
            <ul className="flex gap-4 text-sm">
              <li>
                <Dropdown name="Patches" list={collectionDropdown} />
              </li>
              <li>
                <Dropdown name="Customized" list={customDropdown} />
              </li>
              <li>
                <Link to={`/keychains`}>Keychains</Link>
              </li>
              <li>
                <Link to={`/blogs`}>T Shirts</Link>
              </li>
              <li>
                <Link to={`/contact-us`}>Riffle Bags</Link>
              </li>
              <li>
                <Link to={`/reviews`}>Flags</Link>
              </li>
              <li>
                <Link to={`/blogs`}>Stickers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex hidden items-center gap-4">
          <SavedItems />
          <Cart />
          <UserDropdown />
        </div>
        <div className="flex items-center gap-2 md:hidden relative">
          <SavedItems />
          <Cart />
          {!toggle && (
            <HiMenuAlt4
              className="md:hidden cursor-pointer text-2xl"
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
                className="place-self-end py-2 px-4"
                onClick={() => setToggle(false)}
              >
                <AiOutlineClose className="text-xl font-bold" />
              </div>
              <div className="w-full py-2 pl-3 pr-4">
                <ul className="flex flex-col gap-4 text-lg">
                  <li>
                    <MobileDropdown name="Patches" list={collectionDropdown} />
                  </li>
                  <li>
                    <MobileDropdown name="Customized" list={customDropdown} />
                  </li>
                  <li>
                    <Link to={`/keychains`}>Keychains</Link>
                  </li>
                  <li>
                    <Link to={`/blogs`}>T Shirts</Link>
                  </li>
                  <li>
                    <Link to={`/contact-us`}>Riffle Bags</Link>
                  </li>
                  <li>
                    <Link to={`/reviews`}>Flags</Link>
                  </li>
                  <li>
                    <Link to={`/blogs`}>Stickers</Link>
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
