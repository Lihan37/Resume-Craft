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
      <div style={{ backgroundColor: resume.style.theme }} className="  p-10">
        <h1
          style={{
            fontFamily: resume.style.personalInfo.firstName.fontFamily,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textAlign: resume.style.personalInfo.firstName.textAlign as any,
            fontWeight: resume.style.personalInfo.firstName.fontWidth,
            color: resume.style.personalInfo.firstName.color,
            fontSize: resume.style.personalInfo.firstName.size,
          }}
          className="text-xl font-semibold w-full">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        {/* <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span> */}
        <h3
          style={{
            fontFamily: resume.style.personalInfo.jobTitle.fontFamily,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textAlign: resume.style.personalInfo.jobTitle.textAlign as any,
            fontWeight: resume.style.personalInfo.jobTitle.fontWidth,
            color: resume.style.personalInfo.jobTitle.color,
            fontSize: resume.style.personalInfo.jobTitle.size,
          }}
          className=" uppercase ">
          {resume.personalInfo.jobTitle}
        </h3>
        <div className=" my-4">
          <h1 className=" font-semibold text-lg text-white">
            {resume.sectionTitles.personalInfo}
          </h1>
          <p
            style={{
              fontFamily: resume.style.personalInfo.email.fontFamily,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              textAlign: resume.style.personalInfo.email.textAlign as any,
              fontWeight: resume.style.personalInfo.email.fontWidth,
              color: resume.style.personalInfo.email.color,
              fontSize: resume.style.personalInfo.email.size,
            }}>
            {resume.personalInfo.email}
          </p>
          <p
            style={{
              fontFamily: resume.style.personalInfo.phoneNumber.fontFamily,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              textAlign: resume.style.personalInfo.phoneNumber.textAlign as any,
              fontWeight: resume.style.personalInfo.phoneNumber.fontWidth,
              color: resume.style.personalInfo.phoneNumber.color,
              fontSize: resume.style.personalInfo.phoneNumber.size,
            }}>
            {resume.personalInfo.phoneNumber}
          </p>
          <p
            style={{
              fontFamily: resume.style.personalInfo.country.fontFamily,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              textAlign: resume.style.personalInfo.country.textAlign as any,
              fontWeight: resume.style.personalInfo.country.fontWidth,
              color: resume.style.personalInfo.country.color,
              fontSize: resume.style.personalInfo.country.size,
            }}>
            {resume.personalInfo.country}
          </p>
        </div>
      </div>

      <div className="h-full bg-white "></div>
    </div>
  );
};

export default Stockholm;
