import React from "react";
import SavedItems from "../SavedItems/SavedItems";
import Cart from "../Cart/Cart";
import UserDropdown from "../UserDropdown/UserDropdown";
import Search from "../Search/Search";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="w-11/12 flex justify-between items-center p-2">
        <div className="flex items-center gap-6">
          <div>Keychains</div>
          <div>
            <ul className="flex gap-4 text-sm">
              <li>Home</li>
              <li>Pins</li>
              <li>More Products</li>
              <li>Gallery</li>
              <li>Support</li>
              <li>Contact us</li>
            </ul>
          </div>
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
