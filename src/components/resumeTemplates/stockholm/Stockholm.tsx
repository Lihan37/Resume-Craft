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
      }}>
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
              fontFamily: personalInfoStyle.firstName.fontFamily,
              textAlign: personalInfoStyle.firstName.textAlign as any,
              fontWeight: personalInfoStyle.firstName.fontWeight,
              color: personalInfoStyle.firstName.color,
              fontSize: personalInfoStyle.firstName.size,
            }}
            className="text-xl font-semibold w-full">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {/* <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span> */}
          <h3
            style={{
              fontFamily: personalInfoStyle.jobTitle.fontFamily,
              textAlign: personalInfoStyle.jobTitle.textAlign as any,
              fontWeight: personalInfoStyle.jobTitle.fontWeight,
              color: personalInfoStyle.jobTitle.color,
              fontSize: personalInfoStyle.jobTitle.size,
            }}
            className=" uppercase ">
            {personalInfo.jobTitle}
          </h3>
          <div className=" my-4">
            <h1
              style={{
                fontFamily: sectionTitleStyle.personalInfoStyle.fontFamily,
                textAlign: sectionTitleStyle.personalInfoStyle.textAlign as any,
                fontWeight: sectionTitleStyle.personalInfoStyle.fontWeight,
                color: sectionTitleStyle.personalInfoStyle.color,
                fontSize: sectionTitleStyle.personalInfoStyle.size,
              }}
              className=" font-semibold text-lg text-white">
              {personalInfoSectionTitle}
            </h1>
            <p
              style={{
                fontFamily: personalInfoStyle.email.fontFamily,
                textAlign: personalInfoStyle.email.textAlign as any,
                fontWeight: personalInfoStyle.email.fontWeight,
                color: personalInfoStyle.email.color,
                fontSize: personalInfoStyle.email.size,
              }}>
              {personalInfo.email}
            </p>
            <p
              style={{
                fontFamily: personalInfoStyle.phoneNumber.fontFamily,
                textAlign: personalInfoStyle.phoneNumber.textAlign as any,
                fontWeight: personalInfoStyle.phoneNumber.fontWeight,
                color: personalInfoStyle.phoneNumber.color,
                fontSize: personalInfoStyle.phoneNumber.size,
              }}>
              {personalInfo.phoneNumber}
            </p>
            <p
              style={{
                fontFamily: personalInfoStyle.country.fontFamily,
                textAlign: personalInfoStyle.country.textAlign as any,
                fontWeight: personalInfoStyle.country.fontWeight,
                color: personalInfoStyle.country.color,
                fontSize: personalInfoStyle.country.size,
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
