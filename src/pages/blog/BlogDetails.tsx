import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../constant";
import { Container } from "../../components/common/Container";
import { CiSearch } from "react-icons/ci";


const BlogDetails: React.FC = () => {
  
  const { id } = useParams();
  const blog = id && data.blogs.find((items) => items.id === parseInt(id))
  console.log(blog)
  const { image, title, author, authorImage, company, content} = blog;
  
  console.log(id)
  return <div>
    <Container>
      <div>
        <div className="flex items-center justify-between py-10 bg-">
          <h1 className="text-5xl font-extrabold">BLOG</h1>
          <ul className="flex items-baseline">
            <Link to="/" className="mr-3 cursor-pointer font-semibold">HOME</Link>
            <Link to="/resumes-template" className="mr-3 cursor-pointer font-semibold">RESUME</Link>
            <Link to="/blog" className="mr-3 cursor-pointer font-semibold">BLOG</Link>
            <Link to="" className="mr-3 cursor-pointer font-semibold">BLOGDETAILS</Link>
          </ul>
        </div>
        <div className="flex justify-between gap-10">
        <div className="w-10/12">
          <img src={image} alt="" />
          <h3 className="text-4xl pt-10 pb-3">{title}</h3>
          <p className="text-xl mb-10">{content}</p>
        </div>
        <div className="w-2/12">
          <input className="p-2 absolute rounded-md border-2" type="text" placeholder="Serach You" />
          <CiSearch className="relative left-40 top-2 text-2xl" />
          <h3 className="text-2xl pt-8 font-bold">Category</h3>
        </div>
        </div>
      </div>
    </Container>
    </div>;
};

export default BlogDetails;
