import React from "react";
import { Container } from "../../components/common/Container";
import { images } from "../../constant";
import { FaArrowRightLong } from "react-icons/fa6";

const Action = () => {
  return (
    <div className=" w-full py-32 bg-[#282b8f]">
      <Container>
        <div className=" flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-28">
          <div className=" w-full space-y-4 2xl:px-10">
            <h1 className=" uppercase text-yellow-500 font-semibold font-mono text-sm lg:text-xl">
              Start building your career
            </h1>
            <h2 className=" font-semibold text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">
              Professional resumes for effective job interviews
            </h2>
            <h4 className=" text-sm lg:text-base font-mono text-white">
              A great job application leads to a good interview. An amazing
              resume is what makes it all possible. Start off strong with the
              hiring manager by creating a positive professional image. A job
              interview can be much easier if they have a favorable view of your
              resume and cover letter.
            </h4>
            <div className=" flex justify-center md:justify-start items-center">
              <button className="shadow-2xl shadow-blue-700 flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8  pl-10 pr-2 py-2 xl:py-3 rounded-full bg-c-primary text-white font-semibold tracking-widest	hover:bg-c-primary-light  text-base xl:text-lg">
                <span> GET started</span>
                <span className=" border-2 rounded-full p-2 xl:p-3 border-white">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
          <div className=" h-[450px] lg:h-[500px] xl:h-[550px] w-full">
            <div className="relative">
              <img
                className=" w-60 lg:w-72 xl:w-80 absolute top-0 right-0"
                src={images.resume1}
                alt="resume1"
              />
              <img
                className=" w-60 lg:w-72 xl:w-80 absolute top-16 right-16"
                src={images.resume4}
                alt="resume1"
              />
              <img
                className=" w-60 lg:w-72 xl:w-80 absolute top-32 right-32"
                src={images.resume6}
                alt="resume1"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Action;
