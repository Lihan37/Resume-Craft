import React from "react";
import { useParams } from "react-router";
import { data } from "../../constant";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const blog = id && data.blogs.find((item) => item.id === parseInt(id));

  return <div className=" ">{blog && blog?.title}</div>;
};

export default BlogDetails;
