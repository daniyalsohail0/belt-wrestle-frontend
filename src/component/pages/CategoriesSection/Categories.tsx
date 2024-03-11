import React from "react";
import { Link } from "react-router-dom";
import categories from "./CategoriesData";

const Categories: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <div className="my-4 grid md:grid-cols-4 grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="hover:underline">
              <img src={category.image} className="w-[400px]" alt="category" />
              <p className="py-2 text-md tracking-wide">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
