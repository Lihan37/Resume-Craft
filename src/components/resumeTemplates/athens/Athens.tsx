/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleAthens from "./AthensStyle";
import useDisplay from "../../../hooks/useDisplay";

export interface IAthens {
  resume: IResumeData;
}

const Athens: React.ForwardRefRenderFunction<HTMLDivElement, IAthens> = (
  { _ },
  ref
) => {
  const style = resume?.style;
  const styleCommon = styleAthens.common;
  const [windowWidth] = useDisplay();

  const personalInfoSectionTitle =
    resume?.sectionTitles.personalInfo &&
    resume.sectionTitles.personalInfo !== "Untitled" &&
    (resume.personalInfo.drivingLicense ||
      resume.personalInfo.nationality ||
      resume.personalInfo.DateOfBirth ||
      resume.personalInfo.placeOfBirth)
      ? resume.sectionTitles.personalInfo
      : null;

  const skillSectionTitle =
    resume?.sectionTitles.skills &&
    resume.sectionTitles.skills !== "Untitled" &&
    resume.skills.find((item) => item.label)
      ? resume.sectionTitles.skills
      : null;

  const languageSectionTitle =
    resume?.sectionTitles.languages &&
    resume.sectionTitles.languages !== "Untitled" &&
    resume.languages.find((item) => item.language)
      ? resume.sectionTitles.languages
      : null;

  const socialProfilesSectionTitle =
    resume?.sectionTitles.socialProfiles &&
    resume.sectionTitles.socialProfiles !== "Untitled" &&
    resume.socialProfiles.find((item) => item.label)
      ? resume.sectionTitles.socialProfiles
      : null;

  const professionalSummarySectionTitle =
    resume?.sectionTitles.professionalSummary &&
    resume.sectionTitles.professionalSummary !== "Untitled" &&
    resume.professionalSummary
      ? resume.sectionTitles.professionalSummary
      : null;

  const workExperienceSectionTitle =
    resume?.sectionTitles.workExperience &&
    resume.sectionTitles.workExperience !== "Untitled" &&
    resume.workExperience.find(
      (item) =>
        item.city ||
        item.description ||
        item.employer ||
        item.jobTitle ||
        item.startMontYear ||
        item.endMontYear
    )
      ? resume.sectionTitles.workExperience
      : null;

  const educationsSectionTitle =
    resume?.sectionTitles.educations &&
    resume.sectionTitles.educations !== "Untitled" &&
    resume.educations.find(
      (item) =>
        item.city ||
        item.description ||
        item.school ||
        item.degree ||
        item.startMontYear ||
        item.endMontYear
    )
      ? resume.sectionTitles.educations
      : null;

  const referencesSectionTitle =
    resume?.sectionTitles.references &&
    resume.sectionTitles.references !== "Untitled" &&
    resume.references.find(
      (item) => item.name || item.company || item.email || item.phone
    )
      ? resume.sectionTitles.references
      : null;
  const skillLevelHide = resume.style.skillLevel;

  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${windowWidth < 768 ? 0.6 : resume.zoom})`,
        minHeight: resume?.size.height,
        maxHeight: resume?.size.height,
        minWidth: resume?.size.width,
        maxWidth: resume?.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
        backgroundColor: "#ffff",
      }}>
      <div style={{ ...styleCommon.container }}>
        <div
          style={{
            paddingTop: "40px",
            paddingLeft: "40px",
            paddingRight: "20px",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyItems: "start",
              justifyContent: "start",
              alignItems: "center",
            }}>
            {resume.avatar.url && (
              <img
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                src={resume.avatar.url}
                alt="avatar"
              />
            )}
            <div>
              <div>
                <span
                  style={{
                    ...style.personalInfo.firstName,
                    textAlign: style.personalInfo.firstName.textAlign as any,
                  }}>
                  {resume.personalInfo.firstName}
                </span>
                <span
                  style={{
                    ...style.personalInfo.lastName,
                    textAlign: style.personalInfo.lastName.textAlign as any,
                  }}>
                  {resume.personalInfo.lastName}
                </span>
              </div>
              <h1
                style={{
                  ...style.personalInfo.jobTitle,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}>
                {resume.personalInfo.jobTitle}
              </h1>
            </div>
          </div>

          {professionalSummarySectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.professionalSummaryStyle,
                textAlign: style.sectionTitles.professionalSummaryStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {professionalSummarySectionTitle}
            </h1>
          )}
          {resume.professionalSummary && (
            <p
              style={{
                ...style.professionalSummary.summery,
                textAlign: style.professionalSummary.summery.textAlign as any,
              }}>
              {resume.professionalSummary}
            </p>
          )}
          {workExperienceSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.workExperienceStyle,
                textAlign: style.sectionTitles.workExperienceStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {workExperienceSectionTitle}
            </h1>
          )}
          {resume.workExperience.map((item, i) => {
            const marginBottom = resume.workExperience.length === i + 1;
            return (
              (item.city ||
                item.description ||
                item.employer ||
                item.jobTitle ||
                item.startMontYear ||
                item.endMontYear) && (
                <div
                  style={{ marginBottom: !marginBottom ? "8px" : "0px" }}
                  key={item._id}>
                  <h1 style={{ lineHeight: "12px" }}>
                    {item.jobTitle && (
                      <span
                        style={{
                          ...style.workExperience.jobTitle,
                          textAlign: style.workExperience.jobTitle
                            .textAlign as any,
                        }}>
                        {item.jobTitle},
                      </span>
                    )}
                    {item.employer && (
                      <span
                        style={{
                          ...style.workExperience.employer,
                          textAlign: style.workExperience.employer
                            .textAlign as any,
                        }}>
                        {item.employer},
                      </span>
                    )}
                    {item.city && (
                      <span
                        style={{
                          ...style.workExperience.city,
                          textAlign: style.workExperience.city.textAlign as any,
                        }}>
                        {item.city}
                      </span>
                    )}
                  </h1>
                  <h1>
                    <span
                      style={{
                        ...style.workExperience.startMontYear,
                        textAlign: style.workExperience.startMontYear
                          .textAlign as any,
                      }}>
                      {item.startMontYear}
                    </span>
                    {item.startMontYear && item.endMontYear && " - "}
                    <span
                      style={{
                        ...style.workExperience.endMontYear,
                        textAlign: style.workExperience.endMontYear
                          .textAlign as any,
                      }}>
                      {item.endMontYear}
                    </span>
                  </h1>
                  {item.description && (
                    <p
                      style={{
                        ...style.workExperience.description,
                        textAlign: style.workExperience.description
                          .textAlign as any,
                      }}>
                      {item.description}
                    </p>
                  )}
                </div>
              )
            );
          })}
          {educationsSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.educationsStyle,
                textAlign: style.sectionTitles.educationsStyle.textAlign as any,
                marginTop: "7px",
              }}>
              {educationsSectionTitle}
            </h1>
          )}
          {resume.educations.map((item) => {
            return (
              (item.city ||
                item.description ||
                item.school ||
                item.degree ||
                item.startMontYear ||
                item.endMontYear) && (
                <div key={item._id}>
                  <h1 style={{ lineHeight: "12px" }}>
                    {item.degree && (
                      <span
                        style={{
                          ...style.educations.degree,
                          textAlign: style.educations.degree.textAlign as any,
                        }}>
                        {item.degree},
                      </span>
                    )}
                    {item.school && (
                      <span
                        style={{
                          ...style.educations.school,
                          textAlign: style.educations.school.textAlign as any,
                        }}>
                        {item.school},
                      </span>
                    )}
                    {item.city && (
                      <span
                        style={{
                          ...style.educations.city,
                          textAlign: style.educations.city.textAlign as any,
                        }}>
                        {item.city}
                      </span>
                    )}
                  </h1>
                  <h1>
                    <span
                      style={{
                        ...style.educations.startMontYear,
                        textAlign: style.educations.startMontYear
                          .textAlign as any,
                      }}>
                      {item.startMontYear}
                    </span>
                    {item.startMontYear && item.endMontYear && " - "}
                    <span
                      style={{
                        ...style.educations.endMontYear,
                        textAlign: style.educations.endMontYear
                          .textAlign as any,
                      }}>
                      {item.endMontYear}
                    </span>
                  </h1>

                  {item.description && (
                    <p
                      style={{
                        ...style.educations.description,
                        textAlign: style.educations.description
                          .textAlign as any,
                      }}>
                      {item.description}
                    </p>
                  )}
                </div>
              )
            );
          })}
          {referencesSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.referencesStyle,
                textAlign: style.sectionTitles.referencesStyle.textAlign as any,
                marginTop: "7px",
              }}>
              {referencesSectionTitle}
            </h1>
          )}
          {resume.references.map((item) => {
            return (
              <div key={item._id}>
                <h1 style={{ lineHeight: "12px" }}>
                  {item.name && (
                    <span
                      style={{
                        ...style.references.name,
                        textAlign: style.references.name.textAlign as any,
                      }}>
                      {item.name},
                    </span>
                  )}
                  {item.company && (
                    <span
                      style={{
                        ...style.references.company,
                        textAlign: style.references.company.textAlign as any,
                      }}>
                      {item.company}
                    </span>
                  )}
                </h1>
                <h1>
                  {item.email && (
                    <span
                      style={{
                        ...style.references.email,
                        textAlign: style.references.email.textAlign as any,
                      }}>
                      {item.email}
                    </span>
                  )}
                  {item.phone && item.email && "  |  "}
                  {item.phone && (
                    <span
                      style={{
                        ...style.references.phone,
                        textAlign: style.references.phone.textAlign as any,
                      }}>
                      {item.phone}
                    </span>
                  )}
                </h1>
              </div>
            );
          })}
        </div>
        <div
          style={{
            minHeight: resume?.size.height,
            maxHeight: resume?.size.height,
            paddingRight: "40px",
            paddingTop: "40px",
            paddingLeft: "40px",
            width: "230px",
            backgroundColor: "#082A4D",
          }}>
          {personalInfoSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.personalInfoStyle,
                textAlign: style.sectionTitles.personalInfoStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {personalInfoSectionTitle}
            </h1>
          )}

          <p style={{ display: "flex", flexWrap: "wrap" }}>
            {resume.personalInfo.address && (
              <span
                style={{
                  ...style.personalInfo.address,
                  textAlign: style.personalInfo.address.textAlign as any,
                }}>
                {resume.personalInfo.address} ,
              </span>
            )}
            {resume.personalInfo.city && (
              <span
                style={{
                  ...style.personalInfo.city,
                  textAlign: style.personalInfo.city.textAlign as any,
                }}>
                {resume.personalInfo.city} ,
              </span>
            )}
            {resume.personalInfo.postalCode && (
              <span
                style={{
                  ...style.personalInfo.postalCode,
                  textAlign: style.personalInfo.postalCode.textAlign as any,
                }}>
                {resume.personalInfo.postalCode} ,
              </span>
            )}
            {resume.personalInfo.country && (
              <span
                style={{
                  ...style.personalInfo.country,
                  textAlign: style.personalInfo.country.textAlign as any,
                }}>
                {resume.personalInfo.country}
              </span>
            )}
          </p>
          {resume.personalInfo.email && (
            <p
              style={{
                ...style.personalInfo.email,
                textAlign: style.personalInfo.email.textAlign as any,
              }}>
              <a href={`mailto:${resume.personalInfo.email}`}>
                {resume.personalInfo.email}
              </a>
            </p>
          )}
          {resume.personalInfo.phoneNumber && (
            <p
              style={{
                ...style.personalInfo.phoneNumber,
                textAlign: style.personalInfo.phoneNumber.textAlign as any,
              }}>
              {resume.personalInfo.phoneNumber}
            </p>
          )}

          {resume.personalInfo.nationality && (
            <>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "14px",
                }}>
                Nationality :
              </h1>
              <p
                style={{
                  ...style.personalInfo.nationality,
                  textAlign: style.personalInfo.nationality.textAlign as any,
                }}>
                {resume.personalInfo.nationality}
              </p>
            </>
          )}

          {resume.personalInfo.placeOfBirth && (
            <>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "14px",
                }}>
                Place Of Birth :
              </h1>
              <p
                style={{
                  ...style.personalInfo.placeOfBirth,
                  textAlign: style.personalInfo.placeOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.placeOfBirth}
              </p>
            </>
          )}
          {resume.personalInfo.DateOfBirth && (
            <>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "14px",
                }}>
                Date Of Birth :
              </h1>
              <p
                style={{
                  ...style.personalInfo.DateOfBirth,
                  textAlign: style.personalInfo.DateOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.DateOfBirth}
              </p>
            </>
          )}
          {resume.personalInfo.drivingLicense && (
            <>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "14px",
                }}>
                Driving License :
              </h1>
              <p
                style={{
                  ...style.personalInfo.drivingLicense,
                  textAlign: style.personalInfo.drivingLicense.textAlign as any,
                }}>
                {resume.personalInfo.drivingLicense}
              </p>
            </>
          )}
          {skillSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.skillsStyle,
                textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                marginTop: "5px",
              }}>
              {skillSectionTitle} :
            </h1>
          )}
          {resume.skills.map((item) => {
            return (
              item.label && (
                <div style={{ marginBottom: "6px" }} key={item._id}>
                  <h1
                    style={{
                      ...style.skills.label,
                      textAlign: style.skills.label.textAlign as any,
                      lineHeight: skillLevelHide ? "12px" : "18px",
                    }}>
                    {item.label}
                  </h1>
                  {!skillLevelHide && (
                    <h1
                      style={{
                        width: "100%",
                        height: "3px",
                        display: "flex",
                        gap: "2px",
                        marginTop: "4px",
                      }}>
                      <span
                        style={{
                          width: `${item.level}%`,
                          backgroundColor: "#FFFFFF",
                          height: "100%",
                        }}></span>
                    </h1>
                  )}
                </div>
              )
            );
          })}
          {socialProfilesSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.socialProfilesStyle,
                textAlign: style.sectionTitles.socialProfilesStyle
                  .textAlign as any,
                marginTop: "5px",
              }}>
              {socialProfilesSectionTitle} :
            </h1>
          )}
          {resume.socialProfiles.map((item) => {
            return (
              item.label && (
                <a
                  key={item._id}
                  style={{
                    ...style.socialProfiles.label,
                    textAlign: style.socialProfiles.label.textAlign as any,
                    display: "block",
                  }}
                  href={item.link}
                  target="_blank">
                  {item.label}
                </a>
              )
            );
          })}

          {languageSectionTitle && (
            <h1
              style={{
                ...style.sectionTitles.languagesStyle,
                textAlign: style.sectionTitles.languagesStyle.textAlign as any,
                marginTop: "5px",
              }}>
              {languageSectionTitle} :
            </h1>
          )}
          {resume.languages.map((item) => {
            return (
              item.language && (
                <div key={item._id}>
                  <span
                    style={{
                      ...style.languages.language,
                      textAlign: style.languages.language.textAlign as any,
                    }}>
                    {item.language}
                  </span>
                  <span
                    style={{
                      ...style.languages.level,
                      textAlign: style.languages.level.textAlign as any,
                    }}>
                    {item.level}
                  </span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Athens);
