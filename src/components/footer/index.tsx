import React from "react";
import Logo from "../common/Logo";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Button from "../common/Button";
import { Container } from "../common/Container";

const Footer: React.FC = () => {
  const dateTime = new Date().getFullYear();

  return (
    <footer className=" py-10 bg-gradient-to-r  from-[#e2ebe8] to-[#f1eedd] rounded-tl-[5rem] rounded-tr-[5rem]">
      <Container>
        <div className="flex gap-10 flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="bg-c-primary rounded-full p-3 hover:bg-c-primary-light transition duration-300">
              <FaFacebookF className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-c-primary rounded-full p-3 hover:bg-c-primary-light transition duration-300">
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-c-primary rounded-full p-3 hover:bg-c-primary-light transition duration-300">
              <FaLinkedinIn className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-c-primary rounded-full p-3 hover:bg-c-primary-light transition duration-300">
              <FaTwitter className="text-xl text-white" />
            </a>
          </div>
        </div>
        <hr className="h-[3px] bg-gray-400 my-12" />
        <div className="flex gap-20 flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold">Stay Updates</h2>
            <p className="text-gray-600 my-3 ">
              Join our newsletter to stay up to date on features and <br />{" "}
              releases
            </p>
            <div className="my-4">
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-600 p-2 mr-0 md:mr-2 mb-2 lg:mb-0 rounded-lg"
                placeholder="Enter your email"
              />
              <Button>Subscribe</Button>
            </div>
            <p>
              <small className="text-gray-600">
                By subscribing you agree to with our Privacy Policy and provide
                consent <br /> to receive updates from our company
              </small>
            </p>
          </div>
          <div className="grid gap-20 grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="font-bold">Resume</h3>
              <div className="flex flex-col text-gray-600 mt-6 space-y-3">
                <a href="">Create Resume</a>
                <a href="">Resume Example</a>
                <a href="">Resume Templates</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <div className="flex flex-col text-gray-600 mt-6 space-y-3">
                <a href="">Resume Help</a>
                <a href="">Job Interview</a>
                <a href="">Career</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Our Company</h3>
              <div className="flex flex-col text-gray-600 mt-6 space-y-3">
                <a href="">About Us</a>
                <a href="">Pricing</a>
                <a href="">Sitemap</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Support</h3>
              <div className="flex flex-col text-gray-600 mt-6 space-y-3">
                <a href="">Help Center</a>
                <a href="">FAQ</a>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[3px] bg-gray-400 my-8" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className=" text-gray-600 py-5">
            &copy; Copyright {dateTime}. Resume Craft
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-base underline font-semibold">
              Privacy Policy
            </a>
            <a href="#" className="text-base underline font-semibold">
              Terms of Service
            </a>
            <a href="#" className="text-base underline font-semibold">
              Cookies Settings
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
