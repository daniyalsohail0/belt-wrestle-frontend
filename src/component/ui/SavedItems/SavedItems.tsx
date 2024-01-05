import React, { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import SavedItem from "../SavedItem/SavedItem";
import { useDispatch } from "react-redux";
import { clearSavedItems } from "../../../state/savedItems/savedItemSlice";

const SavedItems: React.FC = () => {
  const state = useSelector((state: RootState) => state.savedItems);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

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

  const handleClearSavedItems = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearSavedItems());
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
        <div className="fixed bg-white top-0 right-0 h-screen shadow-md z-[1] w-full md:w-1/4 flex flex-col justify-between gap-4">
          <div>
            <div className="flex justify-between items-center w-full p-4">
              <h1 className="text-lg">Saved Items</h1>
              <button onClick={() => setIsOpen(false)}>
                <IoClose className="text-lg" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              {state.items.length === 0 ? (
                <>Your saved items is empty</>
              ) : (
                state.items.map((item, index) => (
                  <SavedItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.imageUrl}
                    price={item.price}
                  />
                ))
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-black text-white w-full p-2 m-4 text-sm"
              onClick={handleClearSavedItems}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedItems;
