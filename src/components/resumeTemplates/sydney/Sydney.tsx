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
  
  return (
    <div className="mx-auto"
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div style={styleCommon.container}>
        <div style={styleCommon.header}>
          <img style={styleCommon.Image} src="https://i.ibb.co/MpZjhN1/Screen-Shot-20231026001002.png" alt="" />
          <div>
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
        <div style={styleCommon.header}>
          <div style={styleCommon.headerDivTwo}>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/rfthK7T/profile-user.png" alt="" />
                <h2  style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }} >Profile</h2>
              </div>
              <p>{resume.professionalSummary}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/3MQtzRg/portfolio.png" alt="" />
                <h2 style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }} >Employment History</h2>
              </div>

              <p>{resume.workExperience.map((workExperience, index) => (
                <div key={index}>
                  <h3 style={{
                  fontSize: style.sectionTitles.professionalSummaryStyle.fontSize,
                  fontWeight: style.sectionTitles.professionalSummaryStyle.fontWeight,
                  paddingTop: style.sectionTitles.professionalSummaryStyle.paddingTop,
                  textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as any,
                }}>{workExperience.employer}</h3>
                  <p style={styleCommon.proTitle}>{workExperience.jobTitle}</p>
                  <p style={styleCommon.proDate} >{workExperience.startMontYear} - {workExperience.endMontYear}</p>
                  <p>{workExperience.description}</p>
                </div>
              ))}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/v3s3Y7z/mortarboard.png" alt="" />
                <h2 style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }} >Education</h2>
              </div>

              <p>{resume.educations.map((edu, index) => (
                <div key={index}>
                  <h3 style={{
                  fontSize: style.sectionTitles.professionalSummaryStyle.fontSize,
                  fontWeight: style.sectionTitles.professionalSummaryStyle.fontWeight,
                  paddingTop: style.sectionTitles.professionalSummaryStyle.paddingTop,
                  textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as any,
                }}>{edu.school}, {edu.city}</h3>
                  <p style={styleCommon.proTitle}>{edu.degree}</p>
                  <p style={styleCommon.proDate} >{edu.startMontYear} - {edu.endMontYear}</p>
                  {/* <p>{workExperience.description}</p> */}
                </div>
              ))}</p>
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                <img style={styleCommon.icon} src="https://i.ibb.co/Dkf2QTy/refer.png" alt="" />
                <h2 style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }} >References</h2>
              </div>

              <p>{resume.references.map((ref, index) => (
                <div key={index}>
                  <h3 style={{
                  fontSize: style.sectionTitles.professionalSummaryStyle.fontSize,
                  fontWeight: style.sectionTitles.professionalSummaryStyle.fontWeight,
                  paddingTop: style.sectionTitles.professionalSummaryStyle.paddingTop,
                  textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as any,
                }}>{ref.name}</h3>
                  <p style={styleCommon.proTitle}>{ref.company}</p>
                  <p style={styleCommon.proDate} >{ref.phone}</p>
                  <p style={styleCommon.proDate} >{ref.email}</p>
                  {/* <p>{workExperience.description}</p> */}
                </div>
              ))}</p>
            </div>
          </div>
          <div style={styleCommon.headerDivOne}>
            <div>
              <h2 style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }}>Details</h2>
              <p> {resume.personalInfo.address && (
                <span
                  style={{
                    fontFamily: style.personalInfo.address.fontFamily,
                    
                    fontWeight: style.personalInfo.address.fontWeight,
                    color: style.personalInfo.address.color,
                    textAlign: style.personalInfo.address.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.address}
                </span>
              )}
                {resume.personalInfo.city && (
                  <span
                    style={{
                      fontFamily: style.personalInfo.city.fontFamily,
                      
                      fontWeight: style.personalInfo.city.fontWeight,
                      color: style.personalInfo.city.color,
                      textAlign: style.personalInfo.city.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.city}
                  </span>
                )}
                {resume.personalInfo.country && (
                  <span
                    style={{
                      fontFamily: style.personalInfo.country.fontFamily,
                    
                      fontWeight: style.personalInfo.country.fontWeight,
                      color: style.personalInfo.country.color,
                      textAlign: style.personalInfo.country.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.country}
                  </span>
                )}

                {resume.personalInfo.postalCode && (
                  <span
                    style={{
                      fontFamily: style.personalInfo.postalCode.fontFamily,
                      
                      fontWeight: style.personalInfo.postalCode.fontWeight,
                      color: style.personalInfo.postalCode.color,
                      textAlign: style.personalInfo.postalCode.textAlign as any,
                    }}>
                    {" "}
                    {resume.personalInfo.postalCode}
                  </span>
                )}
                {resume.personalInfo.email && (
                  <h1
                    style={{
                      fontFamily: style.personalInfo.email.fontFamily,
                     
                      fontWeight: style.personalInfo.email.fontWeight,
                      color: style.personalInfo.email.color,
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
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }}>Skill</h2>
              <div>
                {resume.skills.map((skill, index) => (
                  <div key={index}>
                    <h3 style={{
                  fontSize: style.sectionTitles.professionalSummaryStyle.fontSize,
                  fontWeight: style.sectionTitles.professionalSummaryStyle.fontWeight,
                  paddingTop: style.sectionTitles.professionalSummaryStyle.paddingTop,
                  textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as any,
                }}>{skill.label}</h3>
                   <div style={{...styleCommon.bar, width: `${skill.level}%` }}>
                     
                   </div>
                  </div>
                ))}
              </div>

            </div>
            <div>
            <h2 style={{
                  fontSize: style.sectionTitles.personalInfoStyle.fontSize,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
                }}>Language</h2>
            
            </div>
          </div>
        </div>
      </div>
      <PDFViewer width={1000} height={1300}>
        <SydneyPDF></SydneyPDF>
      </PDFViewer>
    </div>
  );
};

export default forwardRef(Sydney);
