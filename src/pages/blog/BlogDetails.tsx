import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../constant";
import useTitleSet from "../../hooks/useTitleSet";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const blog = id && data.blogs.find((items) => items.id === parseInt(id));
  useTitleSet("Blog Details");

  return (
    blog && (
      <div className="max-w-screen-xl mx-auto mt-12">
        <img src={blog.image} alt="" className=" w-full rounded-md" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <img
                src={blog.authorImage}
                className="w-[45px] rounded-full"
                alt=""
              />
              <p className="text-xl my-8">
                by <span className="font-semibold">{blog.author}</span>
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <MdOutlineCalendarMonth className="text-2xl" />
              <p className="text-xl my-8">{blog.date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <FaEye className="text-2xl" />
            <p className="text-xl my-8">{blog.view}</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold my-5">{blog.title}</h1>
        <p className="text-xl my-5 text-justify">{blog.content}</p>
      </div>
    )
  );
};

export default BlogDetails;
