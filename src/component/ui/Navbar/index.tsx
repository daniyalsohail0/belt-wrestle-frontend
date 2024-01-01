import React from "react";
import SavedItems from "../SavedItems/SavedItems";
import Cart from "../Cart/Cart";
import UserDropdown from "../UserDropdown/UserDropdown";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import PreHeader from "./PreHeader";

const Navbar: React.FC = () => {
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
    <nav className="flex flex-col justify-center items-center">
      <PreHeader />
      <div className="w-11/12 flex justify-between items-center p-2 my-2">
        <div className="flex items-center gap-6">
          <img src="https://drive.google.com/file/d/1v9tG9RdTaujEjQFcoq6bGBQ1YnlQo5Rn/view?usp=sharing" alt="none" />
        </div>
        <div>
          <ul className="flex gap-4 text-sm">
            <li>
              <Dropdown name="Collection" list={collectionDropdown} />
            </li>
            <li>
              <Dropdown name="Customized" list={customDropdown} />
            </li>
            <li>
              <Link to={`/revies`}>Reviews</Link>
            </li>
            <li>
              <Link to={`/blog`}>Blogs</Link>
            </li>
            <li>
              <Link to={`/contact-us`}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 rounded-full p-1">
          <Search />
          <SavedItems />
          <Cart />
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
