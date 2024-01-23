import React from "react";
import { images } from "../../constant";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container } from "../../components/common/Container";

const HeroSection: React.FC = () => {
  return (
    <Container>
      <div className="select-none md:py-16 text-center md:text-start text-c-dark relative">
        <div className="lg:w-10/12 space-y-5 md:space-y-8 ">
          <img
            className=" md:hidden"
            src={images.heroSectionMobile}
            alt="heroSectionMobile"
          />
          <div className="w-full flex justify-center md:justify-start items-center">
            <h1 className="z-50 text-lg px-6 py-1 uppercase bg-c-primary text-white font-bold w-max rounded-full">
              We can help you
            </h1>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-semibold  relative">
            Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
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
          <p className="font-mono text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  lg:pt-7 xl:pt-14">
            Introducing our Resume Builder – a user-friendly tool for today's
            job seekers looking to stand out in the competitive market. Crafted
            for simplicity and efficiency, it enables you to effortlessly create
            a professional and eye-catching resume.
          </p>
          {/* <Button>Build Your Resume</Button> */}
          <div className=" flex justify-center md:justify-start items-center gap-10">
            <button className="shadow-2xl shadow-blue-200 flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8  pl-10 pr-2 py-2 xl:py-3 rounded-full bg-c-primary text-white font-semibold tracking-widest	hover:bg-c-primary-light  text-base xl:text-lg">
              <span> GET started</span>
              <span className=" border-2 rounded-full p-2 xl:p-3 border-white">
                <FaArrowRightLong />
              </span>
            </button>

            {/* TODO: optional */}
            {/* <button className=" tracking-widest text-lg text-c-dark-light cursor-pointer font-bold uppercase font-mono">
            Learn More
          </button> */}
          </div>
        </div>
        <div className="hidden pointer-events-none lg:block absolute bottom-10 xl:bottom-20 right-0 z-0">
          <img
            className=" w-[450px] xl:w-[550px] 2xl:w-[650px]"
            src={images.heroSection}
            alt="heroSection"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
