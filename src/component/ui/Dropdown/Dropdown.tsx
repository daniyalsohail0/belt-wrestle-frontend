import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  list: {
    link: string;
    name: string;
  }[];
}

const Dropdown: React.FC<Props> = ({ name, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-sm" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none flex items-center"
      >
        <span className="mr-2 text-sm">{name}</span>
        <svg
          className={`fill-current h-4 w-4 inline-block transform ${
            isOpen ? "rotate-180" : ""
          } ease-in-out duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6-1.41 1.41L10 14.83l7.41-7.42L16 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-2xl w-[200px] mt-2">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block px-4 py-4 text-gray-800 hover:underline"
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

export default Dropdown;
