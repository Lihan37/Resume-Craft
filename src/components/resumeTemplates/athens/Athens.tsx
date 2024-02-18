import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleAthens from "./AthensStyle";

export interface IAthens {
  resume: IResumeData;
}

const Athens: React.ForwardRefRenderFunction<HTMLDivElement, IAthens> = ({ _ }, ref) => {
  const style = styleAthens.require;
  const styleCommon = styleAthens.common;
  const personalSectionTitle =
    resume.sectionTitles.personalInfo &&
    resume.sectionTitles.personalInfo !== "Untitled" &&
    (resume.personalInfo.nationality ||
      resume.personalInfo.placeOfBirth ||
      resume.personalInfo.DateOfBirth ||
      resume.personalInfo.drivingLicense) &&
    resume.sectionTitles.personalInfo;

  return (
    <div
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div style={{
          ...styleCommon.container,
        }}>
          {/* Header Section  */}
        <div
          style={{
            ...styleCommon.header,
            backgroundColor: style.theme,
          }}>
          {resume.avatar.url && (
            <div
              style={{
                ...styleCommon.headerDivOne,
                ...styleCommon.headerDivOneImage
              }} >
              <img
                style={{ ...styleCommon.headerDivOneImage, width: "",  height: "100%",
                
              }}
                src={resume.avatar.url}
                alt="avatar"
              />
            </div>
          )}
          <div
            style={{
              ...styleCommon.headerDivTwo,
            }}>
            {resume.personalInfo.firstName && (
              <span
                style={{
                  fontFamily: style.personalInfo.firstName.fontFamily,
                  fontSize: style.personalInfo.firstName.size,
                  fontWeight: style.personalInfo.firstName.fontWeight,
                  color: style.personalInfo.firstName.color,
                  textAlign: style.personalInfo.firstName.textAlign as any,
                }}>
                {resume.personalInfo.firstName}
              </span>
            )}
            {resume.personalInfo.lastName && (
              <span
                style={{
                  fontFamily: style.personalInfo.lastName.fontFamily,
                  fontSize: style.personalInfo.lastName.size,
                  fontWeight: style.personalInfo.lastName.fontWeight,
                  color: style.personalInfo.lastName.color,
                  textAlign: style.personalInfo.lastName.textAlign as any,
                }}>
                {" "}
                {resume.personalInfo.lastName}
              </span>
            )}
            {resume.personalInfo.jobTitle && (
              <h1
                style={{
                  fontFamily: style.personalInfo.jobTitle.fontFamily,
                  fontSize: style.personalInfo.jobTitle.size,
                  fontWeight: style.personalInfo.jobTitle.fontWeight,
                  color: style.personalInfo.jobTitle.color,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}>
                {resume.personalInfo.jobTitle}
              </h1>
            )}
            
          </div>
        </div>
        </div>
    </div>
  );
};

export default forwardRef(Athens);
