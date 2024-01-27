import React from "react";
import { images } from "../../../constant";

const ResumeTemplates: React.FC = () => {
  return (
    <div className=" px-5 flex justify-center items-center flex-col gap-3 my-10 mt-5">
      {resumeTemplate.map((item, i) => (
        <div
          key={i}
          className=" cursor-pointer shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplates;

const resumeTemplate = [
  images.resume1,
  images.resume4,
  images.resume2,
  images.resume3,
  images.resume4,
  images.resume2,
  images.resume5,
  images.resume2,
  images.resume6,
];
