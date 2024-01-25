import React from "react";
import useTitleSet from "../../hooks/useTitleSet";
// import { images } from "../../constant";
import { data } from "../../constant";
import { Container } from "../../components/common/Container";
import BlogCard from "../../components/common/BlogCard";
import { IoArrowForward } from "react-icons/io5";
import Pagination from "../../components/common/Pagination";

const Blog: React.FC = () => {
  useTitleSet("Blogs");

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
          <div className="grid gap-8 md:gap-5 lg:gap-8 grid-cols-1 md:grid-cols-3 justify-between my-10">
            {data.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
