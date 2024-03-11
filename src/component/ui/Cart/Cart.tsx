import React, { useRef, useEffect, useCallback } from "react";
import { SlBag } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { toggleCart } from "../../../state/cartToggle/cartToggleSlice";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const Cart: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cart = useSelector((state: RootState) => state.cart);
  const toggle = useSelector((state: RootState) => state.cartToggle);
  const dispatch = useDispatch();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).classList.contains("cart-toggle-button")
      ) {
        dispatch(toggleCart());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleStripePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51Oqev2Jt3qytHQNKncRTiT57POkwRtlWAM5rbhqomOYskX7a4xMiX2ppFjpfVsRIgTnrMxhYBeQJ3KBAU3MiR9DM00kmZSZXrd"
      );

      const body = {
        products: cart.items,
        totalAmount: cart.totalPrice,
      };

      const headers = { "Content-Type": "application/json" };

      const response = await fetch(
        `http://localhost:8080/api/v1/stripe-checkout`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to initiate Stripe session");
      }

      const session = await response.json();

      if (!session || !session.id) {
        throw new Error("Invalid response from server");
      }

      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result && result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Stripe Payment Error:", error);
    }
  };

  return (
    <div className="relative p-1 cursor-pointer" ref={dropdownRef}>
      <button
        className="cart-toggle-button"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(toggleCart());
        }}
      >
        <SlBag className="text-gray-500 text-lg mt-1" />
      </button>
      {toggle.isOpen && (
        <div className="fixed bg-white text-black top-0 right-0 min-h-screen shadow-md z-[50] w-11/12 md:w-1/4 flex flex-col justify-between items-center">
          <div className="w-full">
            <div className="flex justify-between items-center w-full p-4">
              <h1 className="text-sm">My Cart</h1>
              <button className="p-1" onClick={() => dispatch(toggleCart())}>
                <IoClose className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              {cart.items.length === 0 ? (
                <>Your cart is empty</>
              ) : (
                cart.items.map((item, index) => (
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

          <div className="flex flex-col justify-center items-center w-11/12">
            <div className="w-full flex justify-between gap-4">
              <span className="underline">Subtotal:</span>
              <span className="text-gray-600 font-bold">£{cart.totalPrice}</span>
            </div>
            <button onClick={handleStripePayment} className="bg-black rounded text-white w-full p-2 m-4 text-sm">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
