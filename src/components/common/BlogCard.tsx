import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: {
    id: number | string;
    image: string;
    title: string;
    author: string;
    authorImage: string;
    company: string;
    content: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { id, image, title, author, authorImage, company, content} = blog;
  
  return (
    <Link  to={`/blog/${id}`} >
      <div className="">
        <img src={image} className="rounded-tl-2xl rounded-tr-2xl" alt="" />
        <div className="border-2 border-gray-300 rounded-bl-2xl rounded-br-2xl p-4 md:p-3 lg:p-5">
          <div className="flex gap-4 font-semibold mb-3">
            <p className="bg-[#f8e9e9] px-4 md:px-3 lg:px-4 py-2 md:py-[4px] lg:py-2 rounded-xl">
              News
            </p>
            <p className="bg-[#c8e6f5] px-4 md:px-3 lg:px-4 py-2 md:py-[4px] lg:py-2 rounded-xl">
              Inspiration
            </p>
          </div>
          <h2 className="text-base lg:text-2xl font-bold">{title}</h2>
          <p className="text-base lg:text-lg text-justify my-5">
            {content.slice(0, 90)}{" "}
            <span className="text-c-primary text-sm"> read more...</span>
          </p>
          <div className="flex gap-5">
            <img src={authorImage} className="w-[45px] rounded-full" alt="" />
            <div>
              <h3 className="text-base font-semibold">{author}</h3>
              <p className="text-sm">{company}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
