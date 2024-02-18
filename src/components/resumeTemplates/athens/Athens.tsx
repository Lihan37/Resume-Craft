import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleAthens from "./AthensStyle";

export interface IAthens {
  resume: IResumeData;
}

const Athens: React.ForwardRefRenderFunction<HTMLDivElement, IAthens> = (
  { _ },
  ref
) => {
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
      }}
    >
      <div
        style={{
          ...styleCommon.container,
        }}
      >
        {/* Header Section  */}
        <div
          style={{
            ...styleCommon.header,
            backgroundColor: style.theme,
          }}
        >
          {resume.avatar.url && (
            <div
              style={{
                ...styleCommon.headerDivOne,
                ...styleCommon.headerDivOneImage,
              }}
            >
              <img
                style={{
                  ...styleCommon.headerDivOneImage,
                  width: "",
                  height: "100%",
                }}
                src={resume.avatar.url}
                alt="avatar"
              />
            </div>
          )}
          <div
            style={{
              ...styleCommon.headerDivTwo,
            }}
          >
            {resume.personalInfo.firstName && (
              <span
                style={{
                  fontFamily: style.personalInfo.firstName.fontFamily,
                  fontSize: style.personalInfo.firstName.size,
                  fontWeight: style.personalInfo.firstName.fontWeight,
                  color: style.personalInfo.firstName.color,
                  textAlign: style.personalInfo.firstName.textAlign as any,
                }}
              >
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
                }}
              >
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
                }}
              >
                {resume.personalInfo.jobTitle}
              </h1>
            )}
          </div>
        </div>
        <div style={{ ...styleCommon.body }}>
          <div style={{ ...styleCommon.bodyDivOne }}>
            {personalSectionTitle && (
              <h1
                style={{
                  fontFamily: style.sectionTitles.personalInfoStyle.fontFamily,
                  fontSize: style.sectionTitles.personalInfoStyle.size,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  color: style.sectionTitles.personalInfoStyle.color,
                  textAlign: style.sectionTitles.personalInfoStyle
                    .textAlign as any,
                }}
              >
                {personalSectionTitle} :
              </h1>
            )}
            {resume.personalInfo.nationality && (
              <>
                <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Nationality :
                </h1>
                <h1
                  style={{
                    fontFamily: style.personalInfo.nationality.fontFamily,
                    fontSize: style.personalInfo.nationality.size,
                    fontWeight: style.personalInfo.nationality.fontWeight,
                    color: style.personalInfo.nationality.color,
                    textAlign: style.personalInfo.nationality.textAlign as any,
                  }}
                >
                  {resume.personalInfo.nationality}
                </h1>
              </>
            )}
            {resume.personalInfo.drivingLicense && (
              <>
                <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Driving License :
                </h1>
                <h1
                  style={{
                    fontFamily: style.personalInfo.drivingLicense.fontFamily,
                    fontSize: style.personalInfo.drivingLicense.size,
                    fontWeight: style.personalInfo.drivingLicense.fontWeight,
                    color: style.personalInfo.drivingLicense.color,
                    textAlign: style.personalInfo.drivingLicense
                      .textAlign as any,
                  }}
                >
                  {resume.personalInfo.drivingLicense}
                </h1>
              </>
            )}
            {resume.personalInfo.placeOfBirth && (
              <>
                <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Place Of Birth
                </h1>
                <h1
                  style={{
                    fontFamily: style.personalInfo.placeOfBirth.fontFamily,
                    fontSize: style.personalInfo.placeOfBirth.size,
                    fontWeight: style.personalInfo.placeOfBirth.fontWeight,
                    color: style.personalInfo.placeOfBirth.color,
                    textAlign: style.personalInfo.placeOfBirth.textAlign as any,
                  }}
                >
                  {resume.personalInfo.placeOfBirth}
                </h1>
              </>
            )}
            {resume.personalInfo.DateOfBirth && (
              <>
                <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Date Of Birth :
                </h1>
                <h1
                  style={{
                    fontFamily: style.personalInfo.DateOfBirth.fontFamily,
                    fontSize: style.personalInfo.DateOfBirth.size,
                    fontWeight: style.personalInfo.DateOfBirth.fontWeight,
                    color: style.personalInfo.DateOfBirth.color,
                    textAlign: style.personalInfo.DateOfBirth.textAlign as any,
                  }}
                >
                  {resume.personalInfo.DateOfBirth}
                </h1>
              </>
            )}
          </div>
          <div style={{ ...styleCommon.bodyDivTwo }}></div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Athens);
