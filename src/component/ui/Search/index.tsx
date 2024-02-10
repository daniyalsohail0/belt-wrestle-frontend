import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex gap-3 items-center rounded border-[1px] border-solid border-[#EBEBED] py-2 my-2">
      <CiSearch className="ml-2" />
      <input
        type="text"
        value={input}
        placeholder="Search"
        onChange={handleChange}
        className="focus:outline-none focus:border-non bg-transparent text-sm w-full"
      />
    </div>
  );
};

export default Search;
