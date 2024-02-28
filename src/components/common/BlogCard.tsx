import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "../../services/blogs/blogSlice";
import HTMLRenderer from "../../utils/HTMLRenderer";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="">
        <img
          src={blog.image.url}
          className="rounded-tl-2xl rounded-tr-2xl"
          alt=""
        />
        <div className="border-2 border-gray-300 rounded-bl-2xl rounded-br-2xl p-4 md:p-3 lg:p-5">
          <div className="flex gap-4 font-semibold mb-3">
            {blog.tags.map((i) => (
              <p
                key={i}
                className="bg-[#f8e9e9] px-4 md:px-3 lg:px-4 py-2 md:py-[4px] lg:py-2 rounded-xl">
                {i}
              </p>
            ))}
          </div>
          <h2 className="text-base lg:text-2xl font-bold">
            {blog.title.slice(0, 30)}
            {blog.title.length > 30 && "..."}
          </h2>
          <div className="text-base lg:text-lg text-justify my-5">
            <HTMLRenderer htmlContent={blog.content.slice(0, 60)} />
            {blog.content.length > 60 && (
              <span className="text-c-primary text-sm"> read more...</span>
            )}
          </div>
          <div className="flex gap-5">
            <img
              src={blog.user.avatar.url}
              className="w-[45px] rounded-full"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold">{blog.user.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
