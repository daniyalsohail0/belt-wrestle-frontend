import React, { useState, useRef, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const state = useSelector((state: RootState) => state.cart);

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
              {state.items.length === 0 ? (
                <>Your cart is empty</>
              ) : (
                state.items.map((item, index) => (
                  <CartItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    img={item.imageUrl}
                    quantity={item.quantity}
                    price={item.price}
                  />
                ))
              )}
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
