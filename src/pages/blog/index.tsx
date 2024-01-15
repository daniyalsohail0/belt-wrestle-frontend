import React from "react";
import Layout from "../../layout";
import blogs from "../../utils/blogs";
import BlogCard from "../../component/pages/BlogCard/BlogCard";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 my-5">
          <h1 className="text-center text-3xl my-8">Blogs</h1>
          <div className="md:flex items-center hidden bg-gray-50 shadow-xl">
            <div className="w-1/2">
              <img
                src={`https://wildcatbelts.com/wp-content/uploads/2021/05/home-photo03.jpg`}
                alt="Blog"
                className="w-full h-[400px]"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between h-[400px] p-6">
              <div>
                <h3 className="text-3xl font-bold px-2 pt-2">
                  Meet Bob, The Career Pinship Award winner.
                </h3>
                <p className="text-sm px-2">
                  <i>
                    Discover the intricate details and craftsmanship behind the
                    world's most iconic wrestling belts.
                  </i>
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">June 29, 2023 • 6 Months ago</p>
                <button className="px-2 py-3 bg-black text-white transition-transform transform hover:scale-105 focus:outline-none duration-200 w-full mt-auto bottom-0 text-sm">
                  <Link to="/blog/id">Read more</Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-4">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                imageUrl={blog.blogImage}
                blogUrl={blog.link}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
