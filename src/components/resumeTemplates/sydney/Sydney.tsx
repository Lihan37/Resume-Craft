/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

import styleSydney from "./SydneyStyle";
import { resume } from "../resume";
import { PDFViewer } from "@react-pdf/renderer";
import SydneyPDF from "./SydneyPDF";

export interface ISydney {
  resume: IResumeData;
}

const Sydney: React.ForwardRefRenderFunction<HTMLDivElement, ISydney> = (
  { },
  ref
) => {
  const style = styleSydney.require;
  const styleCommon = styleSydney.common;
  // const personalSectionTitle =
  //   resume.sectionTitles.personalInfo &&
  //   resume.sectionTitles.personalInfo !== "Untitled" &&
  //   (resume.personalInfo.nationality ||
  //     resume.personalInfo.email ||
  //     resume.personalInfo.placeOfBirth ||
  //     resume.personalInfo.DateOfBirth ||
  //     resume.personalInfo.phoneNumber ||
  //     resume.personalInfo.address ||
  //     resume.personalInfo.city ||
  //     resume.personalInfo.postalCode ||
  //     resume.personalInfo.country ||
  //     resume.personalInfo.drivingLicense) &&
  //   resume.sectionTitles.personalInfo;
  // const personalSummaryTitle =
  //   resume.sectionTitles.professionalSummary &&
  //   resume.sectionTitles.professionalSummary !== "Untitled" &&
  //   resume.sectionTitles.professionalSummary;

  // const educationSectionTitle =
  //   resume.sectionTitles.educations &&
  //   resume.sectionTitles.educations !== "Untitled" &&
  //   resume.educations.length > 0 &&
  //   resume.educations.find(
  //     (item) => item.city || item.degree || item.description || item.school
  //   ) &&
  //   resume.sectionTitles.educations;
  return (
    <div className="mx-auto"
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.fontSize.height,
        width: resume.fontSize.width,
        transformOrigin:
          parseFloat(resume.fontSize.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div style={styleCommon.container}>
        <div style={styleCommon.header}>
          <img style={styleCommon.Image} src="https://i.ibb.co/MpZjhN1/Screen-Shot-20231026001002.png" alt="" />
          <div>
            {resume.personalInfo.firstName && (
              <span
                style={{
                  ...style.personalInfo.firstName,
                  textAlign: style.personalInfo.firstName.textAlign as any,
                }}>
                {resume.personalInfo.firstName}
              </span>
            )}
            {resume.personalInfo.lastName && (
              <span
                style={{
                  ...style.personalInfo.lastName,
                  textAlign: style.personalInfo.lastName.textAlign as any,
                }}>
                {" "}
                {resume.personalInfo.lastName}
              </span>
            )}
            {resume.personalInfo.jobTitle && (
              <h1
                style={{
                  ...style.personalInfo.jobTitle,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}>
                {resume.personalInfo.jobTitle}
              </h1>
            )}
          </div>
        </div>
        <div style={styleCommon.header}>
          <div style={styleCommon.headerDivTwo}>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/rfthK7T/profile-user.png" alt="" />
                <h2 style={{
                  ...style.sectionTitles.personalInfoStyle,
                  marginTop: '5px',
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }} >{resume.sectionTitles.professionalSummary}</h2>
              </div>
              <p style={{
                ...style.professionalSummary.summery,
                textAlign: style.professionalSummary.summery.textAlign as any,
              }}>{resume.professionalSummary}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/3MQtzRg/portfolio.png" alt="" />
                <h2 style={{
                  ...style.sectionTitles.workExperienceStyle,
                  marginTop: '5px',
                  textAlign: style.sectionTitles.workExperienceStyle.textAlign as any,
                }} >{resume.sectionTitles.workExperience}</h2>
              </div>

              <p>{resume.workExperience.map((workExperience, index) => (
                <div key={index}>
                  <h3 style={{
                    ...style.workExperience.jobTitle,
                    textAlign: style.workExperience.jobTitle.textAlign as any,
                  }}>{workExperience.employer}</h3>
                  <p style={{
                    ...style.workExperience.employer,
                    textAlign: style.workExperience.employer.textAlign as any
                  }}>{workExperience.jobTitle}</p>
                  <p style={{
                    ...style.workExperience.startMontYear,
                    textAlign: style.workExperience.startMontYear.textAlign as any
                  }}>{workExperience.startMontYear} - {workExperience.endMontYear}</p>
                  <p style={{
                    ...style.workExperience.description,
                    textAlign: style.workExperience.description.textAlign as any
                  }}>{workExperience.description}</p>
                </div>
              ))}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/v3s3Y7z/mortarboard.png" alt="" />
                <h2 style={{
                  ...style.sectionTitles.educationsStyle,
                  textAlign: style.sectionTitles.educationsStyle.textAlign as any,
                  marginTop: '5px',
                }} >{resume.sectionTitles.educations}</h2>
              </div>

              <p>{resume.educations.map((edu, index) => (
                <div key={index}>
                  <h3 style={{
                    ...style.educations.school,
                    textAlign: style.educations.school.textAlign as any,
                  }} >{edu.school}, <span style={{
                    ...style.educations.city,
                    textAlign: style.educations.city.textAlign as any,
                  }}>{edu.city}</span> </h3>
                  <p style={{
                    ...style.educations.degree,
                    textAlign: style.educations.degree.textAlign as any,
                  }}>{edu.degree}</p>
                  <p style={{
                    ...style.educations.startMontYear,
                    textAlign: style.educations.startMontYear.textAlign as any,
                  }} >{edu.startMontYear} - {edu.endMontYear}</p>
                  {/* <p>{workExperience.description}</p> */}
                </div>
              ))}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/Dkf2QTy/refer.png" alt="" />
                <h2 style={{
                  ...style.sectionTitles.referencesStyle,
                  marginTop: '5px',
                  textAlign: style.sectionTitles.referencesStyle.textAlign as any,
                }}>{resume.sectionTitles.references}</h2>
              </div>

              <p>{resume.references.map((ref, index) => (
                <div key={index}>
                  <h3 style={{
                    ...style.references.name,
                    textAlign: style.references.name.textAlign as any,
                  }}>{ref.name}</h3>
                  <p style={{
                    ...style.references.company,
                    textAlign: style.references.company.textAlign as any,
                  }}>{ref.company}</p>
                  <p style={{
                    ...style.references.phone,
                    textAlign: style.references.phone.textAlign as any,
                  }}>{ref.phone}</p>
                  <p style={{
                    ...style.references.email,
                    textAlign: style.references.email.textAlign as any,
                  }}>{ref.email}</p>
                  {/* <p>{workExperience.description}</p> */}
                </div>
              ))}</p>
            </div>
          </div>
          <div style={styleCommon.headerDivOne}>
            <div>
              <h2 style={{
                ...style.sectionTitles.personalInfoStyle,
                textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                marginTop: '5px',
              }}>{resume.sectionTitles.personalInfo}</h2>
              <p> {resume.personalInfo.address && (
                <span
                  style={{
                    ...style.personalInfo.address,
                    textAlign: style.personalInfo.address.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.address}
                </span>
              )}
                {resume.personalInfo.city && (
                  <span
                    style={{
                      ...style.personalInfo.city,
                      textAlign: style.personalInfo.city.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.city}
                  </span>
                )}
                {resume.personalInfo.country && (
                  <span
                    style={{
                      ...style.personalInfo.country,
                      textAlign: style.personalInfo.country.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.country}
                  </span>
                )}

                {resume.personalInfo.postalCode && (
                  <span
                    style={{
                      ...style.personalInfo.postalCode,
                      textAlign: style.personalInfo.postalCode.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.postalCode}
                  </span>
                )}
                {resume.personalInfo.email && (
                  <h1
                    style={{
                      ...style.personalInfo.email,
                      textAlign: style.personalInfo.email.textAlign as any,
                    }}>
                    <a href={`mailto:${resume.personalInfo.email}`}>
                      {resume.personalInfo.email}
                    </a>
                  </h1>
                )}</p>
            </div>
            <div>
              <h2 style={{
                ...style.sectionTitles.skillsStyle,

                textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                marginTop: '5px',
              }}>{resume.sectionTitles.skills}</h2>
              <div>
                {resume.skills.map((skill, index) => (
                  <div key={index}>
                    <h3 style={{
                      ...style.skills.label,
                      textAlign: style.skills.label.textAlign as any,
                    }}>{skill.label}</h3>
                    <div style={{ ...styleCommon.bar, width: `${skill.level}%` }}>

                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div>
              <h2 style={{
                ...style.sectionTitles.languagesStyle,
                marginTop: '5px',
                textAlign: style.sectionTitles.languagesStyle.textAlign as any,
              }}>{resume.sectionTitles.languages}</h2>
              {resume.languages.map((lan, index) => (
                <div key={index}>
                  <p style={{
                    ...style.languages.language,
                    textAlign: style.languages.language.textAlign as any,
                  }}>{lan.language}</p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
      <PDFViewer width={1000} height={1300}>
        <SydneyPDF></SydneyPDF>
      </PDFViewer>
    </div >
  );
};

export default forwardRef(Sydney);