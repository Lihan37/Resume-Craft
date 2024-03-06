import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "../../services/blogs/blogSlice";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="">
        <img
          src={blog.image.url}
          className="rounded-tl-2xl rounded-tr-2xl lg:h-48 xl:h-64 w-full"
          alt=""
        />
        <div className=" p-4 border-2 border-gray-300 rounded-bl-2xl rounded-br-2xl ">
          <div className="flex gap-4 font-semibold">
            {blog.tags.map((i) => (
              <p key={i} className="bg-[#f8e9e9] text-xs py-1 px-2 rounded-xl">
                {i}
              </p>
            ))}
          </div>
          <h2 className="text-base lg:text-xl xl:text-2xl font-bold">
            {blog.title.slice(0, 30)}
            {blog.title.length > 30 && "..."}
          </h2>

          <div className="flex gap-5 items-center">
            <img
              src={blog.user.avatar.url}
              className="w-10 rounded-full"
              alt=""
            />
            <h3 className="text-base font-semibold">{blog.user.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
