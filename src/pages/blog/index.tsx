import React, { useEffect, useState } from "react";
import useTitleSet from "../../hooks/useTitleSet";
import { Container } from "../../components/common/Container";
import BlogCard from "../../components/common/BlogCard";
import { IoArrowForward } from "react-icons/io5";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { selectBlogs } from "../../services/blogs/blogSelector";
import { getAllBlogs } from "../../services/blogs/blogApi";
import createArrayUpToNumber from "../../utils/createArrayUpToNumber";
import BlogsSkeleton from "../../components/skeleton/BlogsSkeleton";

const Blog: React.FC = () => {
  useTitleSet("Blogs");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { blogs, loading, total, page: PrevPage } = useSelector(selectBlogs);

  useEffect(() => {
    if (blogs.length === 0 || PrevPage !== page) {
      dispatch(getAllBlogs({ page }));
    }
  }, [page]);

  return (
    <Container>
      <div className="pt-12 mb-16 lg:mb-24">
        <div className="flex gap-8 lg:gap-16 flex-col-reverse md:flex-row justify-between items-center mb-12 lg:mb-32">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-c-dark ">
              Unlock Your Potential with Expert Resume Tips & Strategies
            </h2>
            <p className="text-c-dark text-justify my-4 lg:my-10">
              Welcome to our blog, where we provide expert guidance and
              invaluable insights to help you elevate your resume game. Dive
              into our collection of articles, packed with insider tips, proven
              strategies, and industry best practices, all designed to empower
              you in crafting resumes that not only showcase your skills and
              experiences but also resonate with potential employers.
            </p>
            <div className="md:w-[90%] lg:w-[90%] flex lg:gap-5  justify-between border border-gray-600 bg-white py-1 lg:py-2 my-4 rounded-full">
              <input
                type="text"
                name=""
                id=""
                className=" px-4 py-2 mr-0 md:mr-2 lg:mb-0 outline-none bg-transparent"
                placeholder="ENTER YOUR EMAIL"
              />
              <button className="text-white bg-c-primary h-10 w-10 flex justify-center items-center text-xl p-1 rounded-full mr-4">
                <IoArrowForward />
              </button>
            </div>
          </div>
          <div className="flex-1">
            {/* <img src={images.resume1} alt="" className=" shadow-2xl" /> */}
            <img
              src="https://img1.wsimg.com/isteam/ip/31019c8a-901a-4552-bf21-a1f856556e56/stock.jpg/:/rs=w:1280"
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-8">
            Latest Posts
          </h1>
          <div className="grid gap-8 md:gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-10">
            {loading ? (
              <BlogsSkeleton />
            ) : (
              blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
              ))
            )}
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
      </div>
    </Container>
  );
};

export default Blog;
