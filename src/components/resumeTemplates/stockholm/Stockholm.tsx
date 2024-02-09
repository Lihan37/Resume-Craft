import React from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

export interface IStockholm {
  resume: IResumeData;
}

const Stockholm: React.FC<IStockholm> = ({ resume }) => {
  return (
    <div
      style={{
        transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}
      className="rounded-lg overflow-hidden">
      <div
        style={{ backgroundColor: resume.style.theme }}
        className=" text-white p-10">
        <h1
          style={{
            fontFamily: resume.style.personalInfo.firstName.fontFamily,
            textAlign: resume.style.personalInfo.firstName.textAlign as any,
          }}
          className=" text-xl  font-semibold ">
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

      <div className="h-full bg-white "></div>
    </div>
  );
};

export default Stockholm;
