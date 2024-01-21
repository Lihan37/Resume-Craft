import React from "react";
import { images } from "../../constant";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  return (
    <div className="select-none md:py-16 xl:py-24 text-c-dark relative">
      <div className="lg:w-10/12 space-y-5 md:space-y-8 ">
        <img
          className=" md:hidden"
          src={images.heroSectionMobile}
          alt="heroSectionMobile"
        />
        <h1 className="z-50 text-lg px-6 py-1 uppercase bg-c-primary font-bold w-max rounded-full">
          We can help you
        </h1>
        <h1 className="text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold  relative">
          Free{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aed5d0] to-[#dccc9b]">
            Resume
          </span>{" "}
          Builder <br className=" hidden lg:block" /> for modern job
          <br className=" hidden lg:block" />
          seekers
          <div className=" pointer-events-none absolute hidden lg:block -bottom-20 lg:-bottom-10 xl:-bottom-16 ">
            <img
              className=" w-full"
              src={images.heroSectionLine}
              alt="heroSectionLine"
            />
          </div>
        </h1>
        <p className="text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  lg:pt-7 xl:pt-14">
          Introducing our Resume Builder – a user-friendly tool for today's job
          seekers looking to stand out in the competitive market. Crafted for
          simplicity and efficiency, it enables you to effortlessly create a
          professional and eye-catching resume.
        </p>
        {/* <Button>Build Your Resume</Button> */}
        <div className=" flex justify-start items-center gap-10">
          <button className="flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8  pl-10 pr-2 py-2 xl:py-3 rounded-full bg-c-dark text-white font-semibold tracking-widest	 text-base xl:text-lg">
            <span> GET started</span>
            <span className=" border-2 rounded-full p-2 xl:p-3 border-c-primary">
              <FaArrowRightLong />
            </span>
          </button>

          {/* TODO: optional */}
          {/* <button className=" tracking-widest text-lg text-c-dark-light cursor-pointer font-bold uppercase font-mono">
            Learn More
          </button> */}
        </div>
      </div>
      <div className="hidden pointer-events-none lg:block absolute bottom-10 xl:bottom-28 2xl:bottom-10 right-0 z-0">
        <img
          className=" w-[450px] xl:w-[550px] 2xl:w-[650px]"
          src={images.heroSection}
          alt="heroSection"
        />
      </div>
    </div>
  );
};

export default HeroSection;
