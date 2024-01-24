import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import SectionHeader from "../../../components/common/SectionHeader";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container } from "../../../components/common/Container";

const ResumesTemplates: React.FC = () => {
  useTitleSet("Resume Templates");

  return (
    <Container>
      <div className=" w-full">
        <div className="lg:flex lg:flex-row flex flex-col-reverse justify-between items-center bg-blue-50 ">
          <div className="flex-1">
            <SectionHeader>
              {" "}
              <p className="font-bold text-left">
                Explore our comprehensive collection of Resume
              </p>
            </SectionHeader>
            <p className="font-mono text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  lg:pt-7 xl:pt-14">
              Accompanied by detailed writing guides to help you craft a winning
              resume tailored to your industry and career level. Whether you're
              a seasoned professional seeking to advance in your career or a
              recent graduate entering the workforce, our diverse range of
              resume examples covers various job roles and industries.
            </p>
            <div className=" flex justify-center md:justify-start items-center gap-10 pt-5">
              <button className="shadow-2xl shadow-blue-200 flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8  pl-10 pr-2 py-2 xl:py-3 rounded-full bg-c-primary text-white font-semibold tracking-widest	hover:bg-c-primary-light  text-base xl:text-lg">
                <span> Create Resume</span>
                <span className=" border-2 rounded-full p-2 xl:p-3 border-white">
                  <FaArrowRightLong />
                </span>
              </button>

              {/* TODO: optional */}
              {/* <button className=" tracking-widest text-lg text-c-dark-light cursor-pointer font-bold uppercase font-mono">
            Learn More
          </button> */}
            </div>
            <div></div>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co/gzkTCzs/Untitled-design-6-removebg-preview.png"
              alt=""
            />
          </div>
        </div>

        <div className="pt-10 flex justify-center ">
          <input
            className="p-2 rounded-xl w-1/3 border-2 border-cyan-600"
            placeholder="Type Your Job Title"
            list="select"
          />

          <datalist className="bg-white text-black" id="select">
            <option value="Architect" />
            <option value="Civil Engineer" />
            <option value="Teacher" />
            <option value="IT & Networking" />
            <option value="Business analyst" />
          </datalist>
        </div>
      </div>
    </Container>
  );
};

export default ResumesTemplates;

// https://resume.io/resume-examples
