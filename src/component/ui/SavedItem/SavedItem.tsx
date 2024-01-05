import React from "react";
import { useDispatch } from "react-redux";
import { removeSavedItem } from "../../../state/savedItems/savedItemSlice";
import { MdDelete } from "react-icons/md";

interface Props {
  id: number;
  name: string;
  image: string;
  price: string;
}

const SavedItem: React.FC<Props> = ({ id, name, image, price }) => {
  const dispatch = useDispatch()

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeSavedItem(id))
  }

  return (
    <div className="flex w-5/6 gap-3 items-center shadow-lg rounded">
      <div>
        {image ? (
          <img src={image} alt="item" width={100} height={100} />
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
        <div>
          <button onClick={handleRemove} className="p-2"><MdDelete className="text-red-500" /></button>
        </div>
      </div>
    </div>
  );
};

export default SavedItem;
