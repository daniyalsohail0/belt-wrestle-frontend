import React, { useState } from "react";
import Layout from "../../layout";
import Search from "../../component/ui/Search";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import products from "../../utils/products";
import ProductCard from "../../component/pages/ProductCard/ProductCard";

const PVCPatches: React.FC = () => {
  const [filter, setFilter] = useState<boolean>(false);

  const handleFilterOpen = () => {
    setFilter(!filter);
  };

  console.log(products.length)

  const handleFilter = () => {
    console.log(`Filter clicked`);
  };
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-11/12">
          <h1 className="text-center text-2xl font-bold">PVC Patches</h1>
          <div className="flex justify-between items-center w-full">
            <div className="relative inline-block text-sm">
              <button
                className="relative flex gap-2 items-center rounded border-[1px] border-solid border-gray-500 py-2 px-2"
                onClick={handleFilterOpen}
              >
                <IoFilterSharp />
                <span>Filter</span>
                <IoIosArrowDown />
              </button>
              {filter && (
                <div className="absolute bg-white rounded shadow-xl w-[150px] mt-2 z-[10]">
                  <ul>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`featured`}
                    >
                      Featured
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`a-z`}
                    >
                      Alphabetically, A-Z
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`z-a`}
                    >
                      Alphabetically, Z-A
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`low`}
                    >
                      Price, low to high
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`high`}
                    >
                      Price, high to low
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`old`}
                    >
                      Date, old to new
                    </li>
                    <li
                      className="px-2 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleFilter}
                      value={`new`}
                    >
                      Date, new to old
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Search />
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-1">
            {products.map((item, index) => (
              <ProductCard
                key={index}
                productID={item.productID}
                productName={item.productName}
                productSubtitle={item.productSubtitle}
                productImage={item.productImage}
                productPrice={item.productPrice}
                productDescription={item.productDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PVCPatches;
