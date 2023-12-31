import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="flex gap-2 items-center transition-all duration-500 ease-in-out"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <IoSearch className={`text-lg text-gray-300 ${active ? "ml-2" : ""}`} />
      {active && (
        <input
          type="text"
          className="focus:none md:w-[200px] bg-transparent text-white text-sm transition-all duration-500 ease-in-out"
        />
      )}
    </div>
  );
};

export default Search;
