// Dropdown.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  list: {
    link: string;
    name: string;
  }[];
}

const MobileDropdown: React.FC<Props> = ({ name, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full">
      <button
        onClick={handleToggle}
        className="focus:outline-none flex justify-between items-center w-full"
      >
        <span className="mr-2 text-lg">{name}</span>
        <svg
          className={`fill-current h-5 w-5 inline-block transform ${
            isOpen ? "rotate-180" : ""
          } ease-in-out duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6-1.41 1.41L10 14.83l7.41-7.42L16 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-1">
          <ul className="py-1">
            {list.map((item, index) => (
              <li key={index} className="flex items-center">
                <Link
                  to={item.link}
                  className="block px-2 py-3 text-gray-600 hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
