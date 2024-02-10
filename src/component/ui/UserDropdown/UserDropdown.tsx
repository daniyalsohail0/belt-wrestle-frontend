import React, { useState, useRef, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-gray-700 rounded-full p-2 cursor-pointer"
      onClick={handleToggle}
      ref={dropdownRef}
    >
      <AiOutlineUser className="text-white" />
      {isOpen && (
        <div className="px-2 py-4 absolute bg-white w-[180px] shadow-xl z-[1] rounded-2xl right-16">
          <ul className="flex flex-col gap-3 p-2 text-sm">
            <li className="hover:underline">Orders</li>
            <li className="hover:underline">Support</li>
            <li className="hover:underline">Log in</li>
            <li className="hover:underline">Sign up</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
