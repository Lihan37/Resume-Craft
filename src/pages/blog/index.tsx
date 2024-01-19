import React from "react";
import useTitleSet from "../../hooks/useTitleSet";
import { data } from "../../constant";

const Blog: React.FC = () => {
  useTitleSet("Blog");

  return (
    <div className="blog-container p-4">
      <h1 className="text-4xl text-center font-bold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md shadow-c-primary-light mb-5">
            <img
              src="https://i.ibb.co/XSMZTtD/successful-computer-gadget-digital-close.jpg"
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">By {blog.author}</span> |{" "}
                {blog.date}
              </p>
              <p className="text-gray-800">
                {blog.content.split(" ").slice(0, 20).join(" ")}...{" "}
                <a href="#" className="text-c-primary">
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
