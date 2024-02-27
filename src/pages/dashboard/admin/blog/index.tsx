import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import { useAppDispatch } from "../../../../app/store";
import { getAllBlogs } from "../../../../services/blogs/blogApi";
import { useSelector } from "react-redux";
import { selectBlogs } from "../../../../services/blogs/blogSelector";
import createArrayUpToNumber from "../../../../utils/createArrayUpToNumber";
import AdminBlogSkeleton from "../../../../components/skeleton/AdminBlogSkeleton";

const Blogs: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { blogs, loading, total, page: PrevPage } = useSelector(selectBlogs);

  useEffect(() => {
    if (blogs.length === 0 || PrevPage !== page) {
      dispatch(getAllBlogs({ page }));
    }
  }, [page]);

  return (
    <div className="p-10  pb-20">
      <h1 className="text-4xl text-c-dark-light font-bold ">Blogs</h1>
      <div className="p-6 overflow-scroll px-0 min-h-[600px]">
        <table className="mt-4 w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Blogs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Author
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>

              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <AdminBlogSkeleton />
            ) : (
              blogs.map((item) => {
                return <SingleBlog key={item?._id} blog={item} />;
              })
            )}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center items-center ">
        <ul className="flex">
          <button
            onClick={() => {
              if (page === 1) {
                return;
              }
              setPage((prev) => prev - 1);
            }}
            disabled={page === 1}
            className={` ${
              page === 1
                ? " text-gray-500"
                : "hover:bg-c-primary hover:text-gray-200 "
            } mx-1 px-3 flex items-center py-2 bg-blue-50  rounded-lg`}>
            <span className="mx-1">previous</span>
          </button>
          {createArrayUpToNumber(Math.ceil(total / 6)).map((item) => {
            const isActive = item === page;
            return (
              <li
                onClick={() => {
                  setPage(item);
                }}
                key={item}
                className={` ${
                  isActive && "bg-c-primary text-white"
                } mx-1 cursor-pointer px-3 py-2 bg-blue-50 text-gray-700 hover:bg-c-primary hover:text-gray-200 rounded-lg`}>
                {item}
              </li>
            );
          })}

          <button
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
            disabled={total / 6 === page || blogs.length !== 6}
            className={` ${
              total / 6 === page || blogs.length !== 6
                ? " text-gray-500"
                : "hover:bg-c-primary hover:text-gray-200 "
            } mx-1 px-3 flex items-center py-2 bg-blue-50  rounded-lg`}>
            <span className="mx-1">Next</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
