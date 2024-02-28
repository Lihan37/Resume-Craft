import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

export interface IToronto {
  resume: IResumeData;
}

const Toronto: React.ForwardRefRenderFunction<HTMLDivElement, IToronto> = (
  { resume },
  ref
) => {
  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}
      className="flex justify-start items-start rounded-lg overflow-hidden">
      <div
        style={{ backgroundColor: resume.style.theme }}
        className=" w-4/12 h-full  text-white p-10 ">
        <h1
          style={{ fontFamily: "Serif" }}
          className=" text-xl text-center font-semibold ">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span>
        <h3 className=" uppercase text-xs font-semibold text-center text-gray-200">
          {resume.personalInfo.jobTitle}
        </h3>
        <div className=" my-4">
          <h1 className=" font-semibold text-lg">Details</h1>
          <p></p>
        </div>
      </div>
      <div className=" w-8/12 h-full bg-white "></div>
    </div>
  );
};

export default forwardRef(Toronto);
