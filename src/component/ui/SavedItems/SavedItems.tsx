import React, { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "../CartItem/CartItem";
import { FaHeart } from "react-icons/fa6";

const SavedItems = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const addedItems = [
    {
      id: 1,
      name: "Keychain",
      img: null,
      quantity: 1,
      price: "$10",
    },
    {
      id: 2,
      name: "T-Shirt",
      img: null,
      quantity: 2,
      price: "$20",
    },
    {
      id: 3,
      name: "Mug",
      img: null,
      quantity: 3,
      price: "$15",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
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
      className="relative p-1 cursor-pointer"
      onClick={handleToggle}
      ref={dropdownRef}
    >
      <FaHeart className="text-red-600 text-lg" />
      {isOpen && (
        <div className="fixed bg-white top-0 right-0 h-screen shadow-md z-[1] w-full md:w-1/4 flex flex-col gap-4">
          <div className="flex justify-between items-center w-full p-4">
            <h1 className="text-sm">Saved Items</h1>
            <button className="p-1" onClick={() => setIsOpen(false)}>
              <IoClose className="text-lg" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            {addedItems.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                name={item.name}
                img={item.img}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedItems;
