import React, { useState, useRef, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const addedItems = [
    {
      name: "Keychain",
      img: null,
      quantity: 1,
      price: "$10",
    },
    {
      name: "T-Shirt",
      img: null,
      quantity: 2,
      price: "$20",
    },
    {
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
      <FaCartShopping className="text-gray-300" />
      {isOpen && (
        <div className="fixed bg-white top-0 right-0 h-screen shadow-md z-[1] w-full md:w-1/4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center w-full p-4">
              <h1 className="text-sm">My Cart</h1>
              <button className="p-1" onClick={() => setIsOpen(false)}>
                <IoClose className="text-lg" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              {addedItems.map((item, index) => (
                <CartItem
                  key={index}
                  name={item.name}
                  img={item.img}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-black text-white w-full p-2 m-4 text-sm">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
