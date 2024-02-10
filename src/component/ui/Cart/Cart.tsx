import React, { useRef, useEffect, useCallback } from "react";
import { SlBag } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { toggleCart } from "../../../state/cartToggle/cartToggleSlice";
import { useDispatch } from "react-redux";

const Cart: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const state = useSelector((state: RootState) => state.cart);
  const toggle = useSelector((state: RootState) => state.cartToggle);
  const dispatch = useDispatch();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      dispatch(toggleCart());
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative p-1 cursor-pointer" ref={dropdownRef}>
      <button onClick={(event) => { event.stopPropagation(); dispatch(toggleCart()); }}>
        <SlBag className="text-black text-lg mt-1" />
      </button>
      {toggle.isOpen && (
        <div className="fixed bg-white top-0 right-0 min-h-screen shadow-md z-[50] w-11/12 md:w-1/4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center w-full p-4">
              <h1 className="text-sm">My Cart</h1>
              <button className="p-1" onClick={() => dispatch(toggleCart())}>
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
            <button className="bg-[#0A1D56] rounded text-white w-full p-2 m-4 text-sm">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
