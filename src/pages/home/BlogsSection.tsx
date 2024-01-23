import React from "react";
import { data } from "../../constant";
import BlogCard from "../../components/common/BlogCard";
import SectionHeader from "../../components/common/SectionHeader";
import TextGradient from "../../components/common/TextGradient";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const BlogsSection: React.FC = () => {
  return (
    <div>
      <div className=" text-center w-full">
        <SectionHeader label="blogs">
        Explore Our Regularly Updated <TextGradient>Blog</TextGradient> <br /> Posts From Here  
        </SectionHeader>
        <h3 className="font-semibold mt-8 text-sm md:text-xl text-c-dark-light">
          Explore a Wealth of Knowledge and Insight in Our Regularly Updated{" "}
          Blog Posts – Your <br /> Source for Informative, Inspiring, and Timely
          Content
        </h3>
      </div>
      <div className="grid gap-5 lg:gap-8 grid-cols-1 md:grid-cols-3 justify-between my-20">
        {data.blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to="/blog">
          <Button>See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsSection;
