import { Link } from "react-router-dom";
import { MdOutlineDownload } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import resume1 from "../../../assets/resumes/resume1.webp";
import { FaRegCopy } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Container } from "../../../components/common/Container";
import Resumes from "./Resumes";

const UserDashboard: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };
  return (
    <Container>
      <div className=" my-20">
        <div
          className="flex justify-between items-start mb-10 border-b-2 pb-2 
      text-c-dark">
          <div className=" space-y-2">
            <h1 className=" text-xl lg:text-3xl  font-bold text-gray-700">
              Resumes & Cover Letters & Portfolio
            </h1>
            <div className=" flex justify-start items-center gap-10 text-lg font-normal text-gray-500">
              <span className=" cursor-pointer">Resumes</span>
              <span className=" cursor-pointer">Cover Letters</span>
              <span className=" cursor-pointer">Portfolio</span>
            </div>
          </div>
          <Link to="/">
            <button
              type="button"
              className="bg-c-primary text-white font-mono text-base uppercase font-semibold px-5 py-2 rounded-t-lg
                   rounded-b-lg
                     hover:bg-c-primary-hover transition duration-300 ease-in-out">
              Add Resume
            </button>
          </Link>
        </div>
        {/* the templates */}
        <Resumes />
      </div>
    </Container>
  );
};

export default UserDashboard;
