import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../constant";
import { Container } from "../../components/common/Container";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import { FaFacebook, FaRegEye, FaTwitter, FaYoutube } from "react-icons/fa6";


const BlogDetails: React.FC = () => {

  const { id } = useParams();
  const blog = id && data.blogs.find((items) => items.id === parseInt(id));

  return blog && <div className="">
    <Container>
      <div className="flex justify-between gap-10">
        <div className="pb-16 rounded-md pl-2 w-10/12">
          <h1 className="text-3xl font-bold pt-9">{blog.title}</h1>
          <ul className="flex items-baseline pt-3 mb-5">
            <li className="mr-20 font-semibold flex gap-1 items-center">22K VIEWS <FaRegEye />
            </li>
            <li className="mr-20 font-semibold flex gap-1 items-center"><CiCalendarDate /> <Date></Date>
            </li>
          </ul>


          <img src={blog.image} alt="" className="h-[70vh] w-full rounded-md" />
          <ul className="flex items-baseline pt-20 pb-6">
            <li className="mr-20 font-semibold w-12 flex items-center gap-3 h-1 text-3xl">Fllower<img src={blog.authorImage} className="rounded-full border-emerald-200 border-2" alt="" /></li>
          </ul>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-2/12 pt-1">
            <Link to="fecebook" className="text-xl text-blue-600 hover:text-blue-400"><FaFacebook /></Link>
            <Link to="fecebook" className="text-xl text-blue-600 hover:text-blue-400"><FaTwitter /></Link>
            <Link to="fecebook" className="text-xl text-blue-600 hover:text-red-400"><FaYoutube /></Link>
          </div>
          <p className="text-xl my-8">Enhancing Professional Visibility: A Journey Through My Career and Expertise
            Introduction:
            Welcome to my blog! Here, I embark on a journey to share insights into my professional experiences, skills, and expertise. As a seasoned professional dedicated to continuous growth, I invite you to explore the various facets of my career through this digital narrative.

            Content Overview:

            Career Milestones:
            In this series, I delve into the significant milestones that have shaped my career. From my early days to present endeavors, I recount the challenges, successes, and lessons learned along the way.

            Expertise Deep Dive:
            Gain an in-depth understanding of my core competencies. Each post in this section focuses on a specific skill set, providing real-world examples and showcasing how these skills have contributed to my professional achievements.

            Project Showcases:
            Explore a portfolio of key projects that highlight my problem-solving abilities and innovative approaches. Detailed case studies offer a behind-the-scenes look at the challenges faced, strategies employed, and outcomes achieved.

            Career Lessons and Advice:
            Drawing from my experiences, I share valuable insights, lessons, and advice for professionals at various stages of their careers. Whether you're just starting or seeking to advance, these posts aim to inspire and guide.

            Industry Trends and Thought Leadership:
            Stay abreast of the latest trends and insights within my industry. I offer commentary on emerging technologies, market shifts, and thought-provoking ideas that shape the landscape in which I operate.

            Why Follow My Blog?
            By following my blog, you'll gain a comprehensive view of my professional journey and expertise. Whether you're a fellow professional, aspiring to enter the field, or simply interested in industry insights, this blog serves as a resource hub for valuable information and inspiration.

            Stay Connected:
            Connect with me on social media for real-time updates on new blog posts, industry discussions, and more. Let's engage in meaningful conversations and build a community focused on professional growth and excellence.

            Dive into the articles, share your thoughts in the comments, and join me on this exciting exploration of careers, skills, and the ever-evolving world of work.

            Feel free to customize this description according to your actual experiences, skills, and the specific focus of your resume website.
          </p>

        </div>
        <div className="w-2/12">
          <div className="mt-9">
            <input className="p-2 absolute rounded-md border-2" type="text" placeholder="Serach You" />
            <CiSearch className="relative left-40 top-2 text-2xl" />
            <div className="p-5">
              <h3 className="text-2xl pt-8 font-bold ">Category</h3>
              <h3 className="pt-4 font-medium text-slate-500 pl-1">Aplly Resume</h3>
              <hr className="h-[2px] bg-gray-400 my-2 pl-10" />
              <h3 className="pt-2 font-medium text-slate-500 pl-1">Aplly Cover Later</h3>
              <hr className="h-[2px] bg-gray-400 my-2 pl-10" />
              <h3 className="pt-2 font-medium text-slate-500 pl-1">Aplly CV</h3>
              <hr className="h-[2px] bg-gray-400 my-2 pl-10" />
              <h3 className="pt-2 font-medium text-slate-500 pl-1">Aplly resume</h3>
              <hr className="h-[2px] bg-gray-400 my-2 pl-10" />
            </div>
          </div>
          <div className="mt-20 grid lg:grid-cols-2 gap-1">
            <img src={data.blogs[0].image} alt="" />
            <img src={data.blogs[1].image} alt="" />
            <img src={data.blogs[3].image} alt="" />
            <img src={data.blogs[4].image} alt="" />
          </div>
        </div>
      </div>
    </Container>
  </div>;
};

export default BlogDetails;
