import React from "react";
import { Container } from "../common/Container";

const BlogDetailsSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <Container>
        <div className="max-w-screen-xl mx-auto mt-12">
          <div className="bg-gray-200 h-96 rounded-md"></div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-[45px] h-[45px] rounded-full bg-gray-200"></div>
                <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="text-3xl font-bold my-5 bg-gray-200 h-12 rounded"></div>
          <div className="text-xl my-5 text-justify">
            <div className="bg-gray-200 h-5 w-full mb-3 rounded"></div>
            <div className="bg-gray-200 h-5 w-full mb-3 rounded"></div>
            <div className="bg-gray-200 h-5 w-full mb-3 rounded"></div>
            <div className="bg-gray-200 h-5 w-3/4 mb-3 rounded"></div>
            <div className="bg-gray-200 h-5 w-1/2 mb-3 rounded"></div>
            <div className="bg-gray-200 h-5 w-2/3 rounded"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailsSkeleton;
