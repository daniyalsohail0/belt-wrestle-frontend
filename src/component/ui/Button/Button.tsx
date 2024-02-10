import React from "react";

interface ButtonProps {
  handleClick: () => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  const handleAction = () => {
    handleClick();
  };

  const styles = `bg-[#379237] rounded text-white px-2 py-3 w-full font-semibold text-xs uppercase transition-transform transform hover:scale-105 focus:outline-none`;

  return (
    <button className={styles} onClick={handleAction}>
      {children}
    </button>
  );
};

export default Button;
