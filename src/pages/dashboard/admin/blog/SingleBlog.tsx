import React from "react";
import { IBlog } from "../../../../services/blogs/blogSlice";
import formatDateToDayMonth from "../../../../utils/formatDateToDayMonth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../app/store";
import Swal from "sweetalert2";
import { deleteBlog } from "../../../../services/blogs/blogApi";
import { useSelector } from "react-redux";
import { selectBlogs } from "../../../../services/blogs/blogSelector";

interface ISingleBlog {
  blog: IBlog;
}

const SingleBlog: React.FC<ISingleBlog> = ({ blog }) => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { error } = useSelector(selectBlogs);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await appDispatch(deleteBlog(blog._id));

        if (error !== null) {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            title: "Deleted!",
            text: "Your history has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              {blog.title.slice(0, 40)}
              {blog.title.length > 40 && ".."}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
              Create date: {formatDateToDayMonth(blog.createdAt)}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={blog.user.avatar.url}
            alt="John Michael"
            className="inline-block relative object-cover object-center  w-9 h-9 rounded-md"
          />
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              {blog.user.name}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
              {blog.user.email}
            </p>
          </div>
        </div>
      </td>

      <td className="p-4 border-b border-blue-gray-50">
        <button
          onClick={() => {
            navigate(`/blog/${blog._id}`);
          }}
          className="relative hover:text-c-primary duration-300 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            navigate(`/admin/blog-update/${blog._id}`);
          }}
          className="relative hover:text-c-primary duration-300 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={handleDelete}
          className="relative hover:text-red-500 duration-300 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SingleBlog;
