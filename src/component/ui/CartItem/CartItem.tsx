import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";

interface CartItemProps {
  name: string;
  price: string;
  quantity: number;
  img: string | null;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, img }) => {
  const [count, setCount] = useState<number>(quantity);

  const handleCountInc = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCount(count + 1);
  };

  const handleCountDec = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCount(count - 1);
  };
  return (
    <div className="flex w-5/6 gap-3 items-center shadow-lg rounded">
      <div>
        {img ? (
          <img src={img} alt="item" width={100} height={100} />
        ) : (
          <img src={`https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png`} alt="default" width={100} height={100} />
        )}
      </div>
      <div className="flex justify-between w-full">
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-gray-800 text-xs">{price}</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center gap-2 p-2">
            <button onClick={handleCountInc}>
              <IoAddCircleSharp className="text-gray-400 text-lg" />
            </button>
            <p>{count}</p>
            <button onClick={handleCountDec}>
              <AiFillMinusCircle className="text-gray-400 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
