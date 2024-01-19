import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-c-primary text-white px-8 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-lg font-semibold">Build Your Perfect Resume</p>
          <p className="mt-2">Create a professional resume with ease.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 text-2xl">
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
