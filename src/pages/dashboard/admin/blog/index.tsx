import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/common/Pagination";
import { data } from "../../../../constant";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaEye, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Blogs: React.FC = () => {
  return (
    <div className=" w-full px-5 py-10">
      <div className="flex justify-between ">
        <p className="text-4xl text-c-dark-light font-bold ">Blogs</p>
        <Link to="/admin/create-blog" className="flex gap-2 items-center">
          <p className="text-xl font-semibold">Create </p>
          <MdOutlineCreateNewFolder className="mt-1" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full font-semibold my-12 p-12">
          <thead className=" md:semibold lg:font-bold">
            <tr>
              <th className="md:px-2 lg:px-5 py-3 border-b-2 border-c-primary bg-blue-200 text-left md:text-sm lg:text-base  text-c-dark uppercase ">
                Title
              </th>
              <th className=" md:px-2 lg:px-5 py-3 border-b-2 border-c-primary bg-blue-200 text-left md:text-sm lg:text-base  text-c-dark uppercase ">
                <p className="flex items-center ">
                  Created
                  <span className="flex md:hidden lg:flex items-center ">
                    <BiUpArrowAlt /> <BiDownArrowAlt />
                  </span>
                </p>
              </th>
              <th className=" md:px-2 lg:px-5 py-3 border-b-2 border-c-primary bg-blue-200 text-left md:text-sm lg:text-base  text-c-dark uppercase ">
                <p className="flex items-center">
                  Views
                  <span className="flex md:hidden lg:flex items-center ">
                    <BiUpArrowAlt /> <BiDownArrowAlt />
                  </span>
                </p>
              </th>
              <th className="md:px-2 lg:px-5 py-3 border-b-2 border-c-primary bg-blue-200 text-left md:text-sm lg:text-base  text-c-dark uppercase ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-5 py-5 border-b border-c-primary bg-white text-sm">
                  {blog.title}
                </td>
                <td className="px-5 py-5 border-b border-c-primary bg-white text-sm ">
                  {blog.date}
                </td>

                <td className="px-5 py-5 border-b border-c-primary bg-white text-sm">
                  {blog.view}
                </td>
                <td className="flex gap-2 px-5 py-5 border-b border-c-primary bg-white text-sm">
                  <button className="text-white hover:text-c-primary bg-c-primary hover:bg-white border-2 border-c-primary p-3 rounded-full">
                    <FaEye />
                  </button>
                  <button className="text-white hover:text-green-500 bg-green-500 hover:bg-white border-2 border-green-500 p-3 rounded-full">
                    <FaEdit />
                  </button>
                  <button className="text-white hover:text-red-500 bg-red-500 hover:bg-white border-2 border-red-500 p-3 rounded-full">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Blogs;
