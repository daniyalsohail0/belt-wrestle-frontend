import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  handleClick: () => void;
  name: string;
  url: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  handleClick,
  name,
  url,
}) => {
  const handleAction = () => {
    handleClick();
  };
  return (
    <button
      onClick={handleAction}
      className="bg-stone-400 text-black flex justify-center items-center gap-3 px-6 py-3 font-semibold text-sm rounded transition-transform transform hover:scale-105 focus:outline-none"
    >
      <Link to={url}>View more</Link>
      <IoIosArrowDroprightCircle className="text-stone-800" />
    </button>
  );
};

export default ActionButton;
