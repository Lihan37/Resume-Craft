import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleMadrid from "./MadridStyle";
export interface IMadrid {
  resume?: IResumeData;
}

const Madrid: React.ForwardRefRenderFunction<HTMLDivElement, IMadrid> = (
  { _ },ref) => {
    const style = styleMadrid.require;
    const styleCommon=styleMadrid.common;
    const personalSectionTitle =
    resume.sectionTitles.personalInfo &&
    resume.sectionTitles.personalInfo !== "Untitled" &&
    (resume.personalInfo.nationality ||
      resume.personalInfo.email ||
      resume.personalInfo.placeOfBirth ||
      resume.personalInfo.DateOfBirth ||
      resume.personalInfo.phoneNumber ||
      resume.personalInfo.address ||
      resume.personalInfo.city ||
      resume.personalInfo.postalCode ||
      resume.personalInfo.country ||
      resume.personalInfo.drivingLicense) &&
    resume.sectionTitles.personalInfo;
    const personalSummaryTitle = resume.sectionTitles.professionalSummary && resume.sectionTitles.professionalSummary !== "Untitled" && (resume.sectionTitles.professionalSummary) ;
    const educationSectionTitle = resume.sectionTitles.educations && resume.sectionTitles.educations !== "Untitled" && (resume.sectionTitles.educations) ;
    
  return (
    <div
    className="bg-blue-500"
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div 
      style={{
        ...styleCommon.container,
      }}
      
      >
        {/* header section */}
        <div style={{
            ...styleCommon.header,
            backgroundColor: style.theme,
          }}>
          {resume.avatar.url && <div style={{...styleCommon.headerDivOne}}>
            <img
                style={{ width: "100%", height: "100%" }}
                src={resume.avatar.url}
                alt="avatar"
              />
            </div>}
          <div style={{...styleCommon.headerDivTwo}}>
            {resume.personalInfo.firstName && (
              <span
                style={{
                  fontFamily: style.personalInfo.firstName.fontFamily,
                  fontSize: style.personalInfo.firstName.size,
                  fontWeight: style.personalInfo.firstName.fontWeight,
                  color: style.personalInfo.firstName.color,
                  textAlign: style.personalInfo.firstName.textAlign as "center",
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
                  textAlign: style.personalInfo.lastName.textAlign as "center",
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
                textAlign: style.personalInfo.jobTitle.textAlign as "center",

              }}>
              {resume.personalInfo.jobTitle}
            </h1>
            )}
            {resume.personalInfo.email && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>Email :</h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.email.fontFamily,
                    fontSize: style.personalInfo.email.size,
                    fontWeight: style.personalInfo.email.fontWeight,
                    color: style.personalInfo.email.color,
                    textAlign: style.personalInfo.email.textAlign as "center",
                  }}>
                  {resume.personalInfo.email}
                </h1>
              </>
            )}
            
          </div>
        </div>
        {/* body section */}
        <div style={{...styleCommon.body}}>
          {/* info div */}
          <div >
              {personalSectionTitle && (
                <h1 style={{
                  fontFamily: style.sectionTitles.personalInfoStyle.fontFamily,
                  fontSize: style.sectionTitles.personalInfoStyle.size,
                  fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
                  color: style.sectionTitles.personalInfoStyle.color,
                  textAlign: style.sectionTitles.personalInfoStyle.textAlign as "center",
                  backgroundColor: style.sectionTitles.personalInfoStyle.backgroundColor,
                  padding: style.sectionTitles.personalInfoStyle.padding,
                  // maxWidth: style.sectionTitles.personalInfoStyle.maxWidth,
                  display: style.sectionTitles.personalInfoStyle.display,
                  textTransform: style.sectionTitles.personalInfoStyle.textTransform as "uppercase",
                  marginBottom: style.sectionTitles.personalInfoStyle.marginBottom,
                
                }}>
                  {personalSectionTitle} 
                </h1>
              )}
              
              {resume.personalInfo.postalCode || resume.personalInfo.address|| resume?.personalInfo.country|| resume?.personalInfo.city && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Postal Code :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.postalCode.fontFamily,
                    fontSize: style.personalInfo.postalCode.size,
                    fontWeight: style.personalInfo.postalCode.fontWeight,
                    color: style.personalInfo.postalCode.color,
                    textAlign: style.personalInfo.postalCode.textAlign as "center",
                  }}>
                  {resume.personalInfo.postalCode},
                  {resume.personalInfo.address},
                   {resume?.personalInfo?.city}, {resume?.personalInfo?.country}
                </h1>
              </>
            )}
           
             

             {resume.personalInfo.DateOfBirth && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Date of Birth :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.DateOfBirth.fontFamily,
                    fontSize: style.personalInfo.DateOfBirth.size,
                    fontWeight: style.personalInfo.DateOfBirth.fontWeight,
                    color: style.personalInfo.DateOfBirth.color,
                    textAlign: style.personalInfo.DateOfBirth.textAlign as "center",
                  }}>
                  {resume.personalInfo.DateOfBirth}
                </h1>
              </>
            )}
            {resume.personalInfo.placeOfBirth && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Place of Birth :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.placeOfBirth.fontFamily,
                    fontSize: style.personalInfo.placeOfBirth.size,
                    fontWeight: style.personalInfo.placeOfBirth.fontWeight,
                    color: style.personalInfo.placeOfBirth.color,
                    textAlign: style.personalInfo.placeOfBirth.textAlign as "center",
                  }}>
                  {resume.personalInfo.placeOfBirth}
                </h1>
              </>
            )}
            
            {resume.personalInfo.phoneNumber && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Phone :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.phoneNumber.fontFamily,
                    fontSize: style.personalInfo.phoneNumber.size,
                    fontWeight: style.personalInfo.phoneNumber.fontWeight,
                    color: style.personalInfo.phoneNumber.color,
                    textAlign: style.personalInfo.phoneNumber.textAlign as "center",
                  }}>
                  {resume.personalInfo.phoneNumber}
                </h1>
              </>
            )}
             {resume.personalInfo.nationality && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Nationality :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.nationality.fontFamily,
                    fontSize: style.personalInfo.nationality.size,
                    fontWeight: style.personalInfo.nationality.fontWeight,
                    color: style.personalInfo.nationality.color,
                    textAlign: style.personalInfo.nationality.textAlign as "center",
                    // border:style.personalInfo.nationality.border,
                  }}>
                  {resume.personalInfo.nationality}
                </h1>
              </>
            )}
          
            {resume.personalInfo.city && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>City :</h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.city.fontFamily,
                    fontSize: style.personalInfo.city.size,
                    fontWeight: style.personalInfo.city.fontWeight,
                    color: style.personalInfo.city.color,
                    textAlign: style.personalInfo.city.textAlign as "center",
                  }}>
                  {resume.personalInfo.city}
                </h1>
              </>
            )}
            
            {resume.personalInfo.country && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Country :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.country.fontFamily,
                    fontSize: style.personalInfo.country.size,
                    fontWeight: style.personalInfo.country.fontWeight,
                    color: style.personalInfo.country.color,
                    textAlign: style.personalInfo.country.textAlign as "center",
                  }}>
                  {resume.personalInfo.country}
                </h1>
              </>
            )}
            {resume.personalInfo.drivingLicense && (
              <>
                {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>
                  Driving License :
                </h1> */}
                <h1
                  style={{
                    fontFamily: style.personalInfo.drivingLicense.fontFamily,
                    fontSize: style.personalInfo.drivingLicense.size,
                    fontWeight: style.personalInfo.drivingLicense.fontWeight,
                    color: style.personalInfo.drivingLicense.color,
                    textAlign: style.personalInfo.drivingLicense.textAlign as "center",
                  }}>
                  {resume.personalInfo.drivingLicense}
                </h1>
              </>
            )}

          </div>
          {/* profile div */}
          <div>
                  {personalSummaryTitle && (
                    <h1 style={{
                  fontFamily: style.sectionTitles.professionalSummaryStyle.fontFamily,
                  fontSize: style.sectionTitles.professionalSummaryStyle.size,
                  fontWeight: style.sectionTitles.professionalSummaryStyle.fontWeight,
                  color: style.sectionTitles.professionalSummaryStyle.color,
                  textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as "center",
                  backgroundColor: style.sectionTitles.professionalSummaryStyle.backgroundColor,
                  padding: style.sectionTitles.professionalSummaryStyle.padding,
                  // maxWidth: style.sectionTitles.personalInfoStyle.maxWidth,
                  display: style.sectionTitles.professionalSummaryStyle.display,
                  textTransform: style.sectionTitles.professionalSummaryStyle.textTransform as "uppercase",
                  marginBottom: style.sectionTitles.professionalSummaryStyle.marginBottom,
                  marginTop: style.sectionTitles.professionalSummaryStyle.marginTop,
                    }}>
                      {personalSummaryTitle}
                    </h1>
              )}
              {resume.professionalSummary && (
                <p
                  style={{
                    fontFamily: style.professionalSummary.summery.fontFamily,
                    fontSize: style.professionalSummary.summery.size,
                    fontWeight: style.professionalSummary.summery.fontWeight,
                    color: style.professionalSummary.summery.color,
                    textAlign: style.professionalSummary.summery.textAlign as "center",
                    marginTop:style.professionalSummary.summery.marginTop,
                    marginBottom:style.professionalSummary.summery.marginBottom,
                   
                  }}>
                  {resume.professionalSummary}
                </p>
              )}
          </div>
          {/* educations */}
          <div>
            {educationSectionTitle && (
              <h1 style={{
                  fontFamily: style.sectionTitles.educationsStyle.fontFamily,
                  fontSize: style.sectionTitles.educationsStyle.size,
                  fontWeight: style.sectionTitles.educationsStyle.fontWeight,
                  color: style.sectionTitles.educationsStyle.color,
                  textAlign: style.sectionTitles.educationsStyle.textAlign as "center",
                  backgroundColor: style.sectionTitles.educationsStyle.backgroundColor,
                  padding: style.sectionTitles.educationsStyle.padding,
                  // maxWidth: style.sectionTitles.personalInfoStyle.maxWidth,
                  display: style.sectionTitles.educationsStyle.display,
                  textTransform: style.sectionTitles.educationsStyle.textTransform as "uppercase",
                  marginBottom: style.sectionTitles.educationsStyle.marginBottom,

                
                }}>
                {educationSectionTitle}
              </h1>
            )}
            {resume.educations.school}

           

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Madrid);
