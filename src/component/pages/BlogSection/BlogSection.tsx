import React from "react";
import blogs from "../../../utils/placeholderBlogs";
import BlogCard from "../BlogCard/BlogCard";

const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4">
      <h1>Blogs</h1>
      <p className="text-sm text-gray-500">
        <i>Read more about our champions!</i>
      </p>
      <div className="w-11/12 grid md:grid-cols-4 grid-cols-1 gap-4">
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
    </div>
  );
};

export default BlogSection;
