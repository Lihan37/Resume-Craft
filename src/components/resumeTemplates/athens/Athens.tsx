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
    resume?.sectionTitles.personalInfo &&
    resume.sectionTitles.personalInfo !== "Untitled" &&
    (resume.personalInfo.postalCode ||
      resume.personalInfo.placeOfBirth ||
      resume.personalInfo.DateOfBirth ||
      resume.personalInfo.drivingLicense) &&
    resume.sectionTitles.personalInfo;
  console.log(resume?.avatar.url);

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
        {/* Header Section start */}

        {/* <div style={{ ...styleCommon.header }}>
          <div
            style={{
              ...styleCommon.header,
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
                    fontSize: style.personalInfo.firstName.fontSize,
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
                    fontSize: style.personalInfo.lastName.fontSize,
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
                    fontSize: style.personalInfo.jobTitle.fontSize,
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
          <div
            style={{ ...styleCommon.sideBar, backgroundColor: style.theme }}
          ></div>
        </div> */}
        {/* header section end  */}

        <div style={{ ...styleCommon.body }}>
          {/* left side bar section  */}

          <div style={{ ...styleCommon.bodyDivTwo }}>
            <div style={{...styleCommon.body}}>
              <div>
                {resume?.avatar.url && (
                  <div
                    style={{
                      ...styleCommon.headerDivOneImage,
                    }}
                  >
                    <img
                      style={{
                        ...styleCommon.headerDivOneImage,
                        width: "",
                        height: "100%",
                      }}
                      src={resume?.avatar.url}
                      alt="avatar"
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  ...styleCommon.headerDivTwo,
                }}
              >
                {resume.personalInfo.firstName && (
                  <span
                    style={{
                      fontFamily: style.personalInfo.firstName.fontFamily,
                      fontSize: style.personalInfo.firstName.fontSize,
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
                      fontSize: style.personalInfo.lastName.fontSize,
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
                      fontSize: style.personalInfo.jobTitle.fontSize,
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
            <h1 style={{}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              atque itaque quisquam, dolor dolorum tempore nostrum vitae facere
              pariatur delectus cupiditate, aliquid hic aut magni ducimus autem?
              Rem, sit? Est!
            </h1>
          </div>
          {/* right side bar secrion */}

          <div
            style={{ ...styleCommon.bodyDivOne, backgroundColor: style.theme }}
          >
            <div style={{ ...styleCommon.children }}>
              <h1
                style={{
                  fontFamily: style.personalInfo.jobTitle.fontFamily,
                  fontSize: style.personalInfo.jobTitle.fontSize,
                  fontWeight: style.personalInfo.jobTitle.fontWeight,
                  color: style.personalInfo.jobTitle.color,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}
              >
                Details
              </h1>

              {resume.personalInfo.postalCode && (
                <>
                  <p style={{ ...styleCommon.personalInfoLabel }}>
                    {resume.personalInfo.postalCode}
                  </p>
                  <p
                    style={{
                      fontFamily: style.personalInfo.nationality.fontFamily,
                      fontSize: style.personalInfo.nationality.fontSize,
                      fontWeight: style.personalInfo.nationality.fontWeight,
                      color: style.personalInfo.nationality.color,
                      textAlign: style.personalInfo.nationality
                        .textAlign as any,
                    }}
                  >
                    {resume.personalInfo.postalCode}
                  </p>
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
                      fontSize: style.personalInfo.drivingLicense.fontSize,
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
                      fontSize: style.personalInfo.placeOfBirth.fontSize,
                      fontWeight: style.personalInfo.placeOfBirth.fontWeight,
                      color: style.personalInfo.placeOfBirth.color,
                      textAlign: style.personalInfo.placeOfBirth
                        .textAlign as any,
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
                      fontSize: style.personalInfo.DateOfBirth.fontSize,
                      fontWeight: style.personalInfo.DateOfBirth.fontWeight,
                      color: style.personalInfo.DateOfBirth.color,
                      textAlign: style.personalInfo.DateOfBirth
                        .textAlign as any,
                    }}
                  >
                    {resume.personalInfo.DateOfBirth}
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Athens);
