import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/common/Container";
import { CiSearch } from "react-icons/ci";

const BlogDetails: React.FC = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="flex items-center justify-between py-10 bg-">
            <h1 className="text-5xl font-extrabold">BLOG</h1>
            <ul className="flex items-baseline">
              <Link to="/" className="mr-3 cursor-pointer font-semibold">
                HOME
              </Link>
              <Link
                to="/resumes-template"
                className="mr-3 cursor-pointer font-semibold">
                RESUME
              </Link>
              <Link to="/blog" className="mr-3 cursor-pointer font-semibold">
                BLOG
              </Link>
              <Link to="" className="mr-3 cursor-pointer font-semibold">
                BLOGDETAILS
              </Link>
            </ul>
          </div>
          <div className="flex justify-between gap-10">
            <div className="w-10/12">
              <img src="https://i.ibb.co/b1Vq9RJ/1.jpg" alt="" />
              <h3 className="text-4xl pt-10 pb-3">
                Crafting the Perfect Resume: Essential Steps
              </h3>
              <p className="text-xl mb-10">
                Crafting a stellar resume involves essential steps. Learn how to
                showcase your professional experience effectively, tailor your
                content to the job, and grab employers' attention. This
                comprehensive guide will help you craft a winning resume that
                stands out in the competitive job market. Crafting a stellar
                resume involves essential steps. Learn how to showcase your
                professional experience effectively, tailor your content to the
                job, and grab employers' attention. This comprehensive guide
                will help you craft a winning resume that stands out in the
                competitive job market. Crafting a stellar resume involves
                essential steps. Learn how to showcase your professional
                experience effectively, tailor your content to the job, and grab
                employers' attention. This comprehensive guide will help you
                craft a winning resume that stands out in the competitive job
                market.
              </p>
            </div>
            <div className="w-2/12">
              <input
                className="p-2 absolute rounded-md border-2"
                type="text"
                placeholder="Serach You"
              />
              <CiSearch className="relative left-40 top-2 text-2xl" />
              <h3 className="text-2xl pt-8 font-bold">Category</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
