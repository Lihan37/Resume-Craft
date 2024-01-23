import React from "react";
import SectionHeader from "../../../components/common/SectionHeader";
import TextGradient from "../../../components/common/TextGradient";
import Slider from "./Slider";
import ShowStarRating from "../../../components/common/ShowStarRating";
import { AiFillStar } from "react-icons/ai";

const Testimonials: React.FC = () => {
  return (
    <div className="my-20 text-c-dark">
      <SectionHeader label="Testimonials">
        Reviewed By The <TextGradient>Community</TextGradient>{" "}
        <br className="hidden md:block" /> Trusted By Professionals
      </SectionHeader>

      <div className=" my-16">
        <div className="flex flex-col gap-5 md:flex-row justify-between items-start ">
          <div className="w-full md:w-3/12 text-center flex justify-start items-center flex-col gap-2">
            <h1 className=" font-semibold text-2xl">4.5 out of 5</h1>
            <ShowStarRating
              rating={4}
              activeColor="#00b67a"
              deActiveColor="#b8becc"
            />
            <div className="flex justify-start items-center text-2xl font-bold mt-5">
              <AiFillStar className=" text-5xl text-[#00b67a]" />
              <span>Trustpilot</span>
            </div>
            <h3 className=" text-sm text-c-dark-light">
              based on 45,541 reviews
            </h3>
          </div>
          <div className="w-full md:w-9/12">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
