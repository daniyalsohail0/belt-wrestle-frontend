import React from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  id: number;
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
    <div>
      <img src={imageUrl} alt="blog" />
      <h3>{title}</h3>
      <p>
        <i>{description}</i>
      </p>
      <div className="px-4 py-3 bg-black text-white scale-105 duration-200 transition-transform">
        <Link to={blogUrl}>Read more</Link>
      </div>
    </div>
  );
};

export default BlogCard;
