/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

export interface IStockholm {
  resume: IResumeData;
}

const Stockholm: React.ForwardRefRenderFunction<HTMLDivElement, IStockholm> = (
  { resume },
  ref
) => {
  const sectionTitleStyle = resume.style.sectionTitles;
  const personalInfo = resume.personalInfo;
  const personalInfoSectionTitle =
    (personalInfo.email || personalInfo.phoneNumber || personalInfo.country) &&
    resume.sectionTitles.personalInfo;
  const personalInfoStyle = resume.style.personalInfo;

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
      className="rounded overflow-hidden">
      <div
        style={{
          backgroundColor: resume.style.theme,
          display: "flex",
          padding: "30px",
          gap: "30px",
        }}>
        {resume.avatar.url && (
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              src={resume.avatar.url}
              alt="avatar"
            />
          </div>
        )}
        <div>
          <h1
            style={{
              ...personalInfoStyle.firstName,
              textAlign: personalInfoStyle.firstName.textAlign as any,
            }}
            className="text-xl font-semibold w-full">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {/* <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span> */}
          <h3
            style={{
              ...personalInfoStyle.jobTitle,
              textAlign: personalInfoStyle.jobTitle.textAlign as any,
            }}
            className=" uppercase ">
            {personalInfo.jobTitle}
          </h3>
          <div className=" my-4">
            <h1
              style={{
                ...sectionTitleStyle.personalInfoStyle,
                textAlign: sectionTitleStyle.personalInfoStyle.textAlign as any,
              }}
              className=" font-semibold text-lg text-white">
              {personalInfoSectionTitle}
            </h1>
            <p
              style={{
                ...personalInfoStyle.email,
                textAlign: personalInfoStyle.email.textAlign as any,
              }}>
              {personalInfo.email}
            </p>
            <p
              style={{
                ...personalInfoStyle.phoneNumber,
                textAlign: personalInfoStyle.phoneNumber.textAlign as any,
              }}>
              {personalInfo.phoneNumber}
            </p>
            <p
              style={{
                ...personalInfoStyle.country,
                textAlign: personalInfoStyle.country.textAlign as any,
              }}>
              {personalInfo.country}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full bg-white "></div>
    </div>
  );
};

export default forwardRef(Stockholm);
