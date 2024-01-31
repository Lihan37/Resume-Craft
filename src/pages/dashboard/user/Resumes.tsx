import { MdOutlineDownload } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import resume1 from "../../../assets/resumes/resume1.webp";
import { FaRegCopy } from "react-icons/fa6";
import { images } from "../../../constant";

const Resumes: React.FC = () => {
  return (
    <div className=" grid grid-cols-4 gap-10">
      <div className=" flex justify-start items-start gap-5">
        <div className=" h-64 ">
          <img src={images.resume1} alt="" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Resumes;
