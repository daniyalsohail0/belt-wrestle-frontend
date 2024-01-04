import React from "react";
import blogs from "../../../utils/placeholderBlogs";
import BlogCard from "../BlogCard/BlogCard";
import { IoArrowForwardOutline } from "react-icons/io5";

const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4">
      <h1>Blogs</h1>
      <p className="text-sm text-gray-500">
        <i>Read more about our champions!</i>
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-11/12 m-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            blogUrl={blog.blogUrl}
          />
        ))}
      </div>
      <br />
      <button className="bg-black text-white px-4 py-3 flex gap-2 items-center font-semibold text-sm transition-transform transform hover:scale-105 focus:outline-none">
        <span>View More</span>
        <IoArrowForwardOutline />
      </button>
    </div>
  );
};

export default BlogSection;
