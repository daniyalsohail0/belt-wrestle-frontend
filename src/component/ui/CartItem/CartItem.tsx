import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../../state/cart/cartSlice";
import { MdDelete } from "react-icons/md";

interface CartItemProps {
  id: string;
  name: string;
  price: string;
  quantity: number;
  img: string | null;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  img,
}) => {
  const [count, setCount] = useState<number>(quantity);
  const dispatch = useDispatch();

  const imageUrl =
    img ||
    "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

  const handleCountInc = (event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedCount = count + 1;
    setCount(updatedCount);
    dispatch(
      updateQuantity({
        id: id,
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity: count,
      })
    );
  };

  const handleCountDec = (event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedCount = count - 1;
    setCount(updatedCount);
    dispatch(
      updateQuantity({
        id: id,
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity: count,
      })
    );
  };

  const hanldeRemoveItem = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(
      removeItem({
        id: id,
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity: count,
      })
    );
  };

  return (
    <div className="flex w-5/6 gap-3 items-center shadow-lg rounded">
      <div>
        {img ? (
          <img src={img} alt="item" width={100} height={100} />
        ) : (
          <img
            src={`https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png`}
            alt="default"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex justify-between w-full">
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-gray-800 text-xs">{price}</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center gap-2 p-2">
            {count === 1 ? (
              <button onClick={hanldeRemoveItem}>
                <MdDelete className="text-red-400 text-md" />
              </button>
            ) : (
              <button onClick={handleCountDec}>
                <AiFillMinusCircle className="text-red-400 text-md" />
              </button>
            )}
            <span>{count}</span>
            <button onClick={handleCountInc}>
              <IoAddCircleSharp className="text-green-600 text-md" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
