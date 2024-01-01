// Dropdown.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  list: {
    link: string;
    name: string;
  }[];
}

const Dropdown: React.FC<Props> = ({ name, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-sm">
      <button onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="focus:outline-none flex items-center">
        <span className="mr-2 text-sm">{name}</span>
        <svg
          className={`fill-current h-4 w-4 inline-block transform ${isOpen ? 'rotate-180' : ''} ease-in-out duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6-1.41 1.41L10 14.83l7.41-7.42L16 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded-2xl shadow-xl w-[200px]">
          <ul className="py-2">
            {list.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block px-4 py-2 text-gray-800 hover:underline my-2"
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
