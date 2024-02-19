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
  const personalInfo = resume.personalInfo;
  const personalInfoSectionTitle =
    (personalInfo.email || personalInfo.phoneNumber || personalInfo.country) &&
    resume.sectionTitles.personalInfo;

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
          <h1>
            <span
              style={{
                ...resume.style.personalInfo.firstName,
                textAlign: resume.style.personalInfo.firstName.textAlign as any,
              }}>
              {personalInfo.firstName}
            </span>{" "}
            <span
              style={{
                ...resume.style.personalInfo.lastName,
                textAlign: resume.style.personalInfo.lastName.textAlign as any,
              }}>
              {personalInfo.lastName}
            </span>
          </h1>
          {/* <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span> */}
          <h3
            style={{
              ...resume.style.personalInfo.jobTitle,
              textAlign: resume.style.personalInfo.jobTitle.textAlign as any,
            }}>
            {personalInfo.jobTitle}
          </h3>
          <div>
            <h1
              style={{
                ...resume.style.sectionTitles.personalInfoStyle,
                textAlign: resume.style.sectionTitles.personalInfoStyle
                  .textAlign as any,
              }}>
              {personalInfoSectionTitle}
            </h1>
            <p
              style={{
                ...resume.style.personalInfo.email,
                textAlign: resume.style.personalInfo.email.textAlign as any,
              }}>
              {personalInfo.email}
            </p>
            <p
              style={{
                ...resume.style.personalInfo.phoneNumber,
                textAlign: resume.style.personalInfo.phoneNumber
                  .textAlign as any,
              }}>
              {personalInfo.phoneNumber}
            </p>
            <p
              style={{
                ...resume.style.personalInfo.country,
                textAlign: resume.style.personalInfo.country.textAlign as any,
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
