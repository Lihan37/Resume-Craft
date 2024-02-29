import React from "react";

const BlogsSkeleton: React.FC = () => {
  return (
    <>
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </>
  );
};

export default BlogsSkeleton;

export const SingleBlog = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-64 rounded-tl-2xl rounded-tr-2xl"></div>
      <div className="border-2 border-gray-300 rounded-bl-2xl rounded-br-2xl p-4 md:p-3 lg:p-5">
        <div className="flex gap-4 mb-3">
          <div className="bg-gray-200 w-16 h-8 rounded-xl"></div>
          <div className="bg-gray-200 w-16 h-8 rounded-xl"></div>
          <div className="bg-gray-200 w-16 h-8 rounded-xl"></div>
        </div>
        <div className="text-base lg:text-2xl font-bold bg-gray-200 h-8 rounded-xl"></div>
        <div className="text-base lg:text-lg text-justify my-5">
          <div className="bg-gray-200 h-4 w-4/5 mb-3 rounded"></div>
          <div className="bg-gray-200 h-4 w-4/6 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 rounded"></div>
        </div>
        <div className="flex gap-5">
          <div className="bg-gray-200 w-9 h-9 rounded-full"></div>
          <div>
            <div className="bg-gray-200 h-6 w-24 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
