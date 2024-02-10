import React from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  id: string;
  title: string;
  description: string;
  blogUrl: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogProps> = ({
  id,
  title,
  description,
  blogUrl,
  imageUrl,
}) => {
  return (
    <div className="relative bg-white shadow-xl p-4 border-2 border-solid border-gray-100 flex flex-col rounded">
      <img src={imageUrl} alt="blog" className="w-full object-cover" />
      <h3 className="text-xl font-bold px-2 py-2">{title}</h3>
      <p className="text-xs px-2 py-2">
        <i>{description}</i>
      </p>
      <button className="px-2 py-3 bg-black rounded text-white transition-transform transform hover:scale-105 focus:outline-none duration-200 w-full mt-auto bottom-0 text-sm">
        <Link to={blogUrl}>Read more</Link>
      </button>
    </div>
  );
};

export default BlogCard;
