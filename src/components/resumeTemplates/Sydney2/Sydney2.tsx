/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import useDisplay from "../../../hooks/useDisplay";
import styleSydney2 from "./Sydney2Style";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";

export interface ISydney2 {
  resume: IResumeData;
}

const Sydney2: React.ForwardRefRenderFunction<HTMLDivElement, ISydney2> = (
  { resume },
  ref
) => {
  const style = resume.style;
  const styleCommon = styleSydney2.common;
  const personalInfo = resume?.personalInfo;
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
          parseFloat(resume.size.height.slice(0, -2)) > 792 ? "bottom" : "",
        transition: "transform 0.5s",
        backgroundColor: "#ffff",
      }}>
      <div style={styleCommon.container}>
        <div
          style={{
            ...styleCommon.header,
            alignItems: "center",
            padding: "10px",
          }}>
          {resume.avatar.url && (
            <img style={styleCommon.Image} src={resume.avatar.url} alt="" />
          )}
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
        <div style={{ ...styleCommon.header, flexDirection: "row-reverse" }}>
          <div style={styleCommon.headerDivTwo}>
            <div>
              <div style={styleCommon.headerIcon}>
                {professionalSummarySectionTitle && (
                  <h1
                    style={{
                      ...style.sectionTitles.professionalSummaryStyle,
                      textAlign: style.sectionTitles.professionalSummaryStyle
                        .textAlign as any,
                    }}>
                    {professionalSummarySectionTitle}
                  </h1>
                )}
              </div>
              {resume.professionalSummary && (
                <p
                  style={{
                    ...style.professionalSummary.summery,
                    textAlign: style.professionalSummary.summery
                      .textAlign as any,
                  }}>
                  {resume.professionalSummary}
                </p>
              )}
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                {workExperienceSectionTitle && (
                  <h1
                    style={{
                      ...style.sectionTitles.workExperienceStyle,
                      textAlign: style.sectionTitles.workExperienceStyle
                        .textAlign as any,
                      marginTop: "5px",
                    }}>
                    {workExperienceSectionTitle}
                  </h1>
                )}
              </div>

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
                      style={{ marginBottom: !marginBottom ? "5px" : "0px" }}
                      key={item._id}>
                      <h1 style={{ lineHeight: "13px" }}>
                        {item.jobTitle && (
                          <span
                            style={{
                              ...style.workExperience.jobTitle,
                              textAlign: style.workExperience.jobTitle
                                .textAlign as any,
                            }}>
                            {item.jobTitle},{" "}
                          </span>
                        )}
                        {item.employer && (
                          <span
                            style={{
                              ...style.workExperience.employer,
                              textAlign: style.workExperience.employer
                                .textAlign as any,
                            }}>
                            {item.employer},{" "}
                          </span>
                        )}
                        {item.city && (
                          <span
                            style={{
                              ...style.workExperience.city,
                              textAlign: style.workExperience.city
                                .textAlign as any,
                            }}>
                            {item.city}{" "}
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
                        </span>{" "}
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
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                {educationsSectionTitle && (
                  <h1
                    style={{
                      ...style.sectionTitles.educationsStyle,
                      textAlign: style.sectionTitles.educationsStyle
                        .textAlign as any,
                      marginTop: "5px",
                    }}>
                    {educationsSectionTitle}
                  </h1>
                )}
              </div>

              {resume.educations.map((item) => {
                return (
                  (item.city ||
                    item.description ||
                    item.school ||
                    item.degree ||
                    item.startMontYear ||
                    item.endMontYear) && (
                    <div key={item._id}>
                      <h1 style={{ lineHeight: "13px" }}>
                        {item.degree && (
                          <span
                            style={{
                              ...style.educations.degree,
                              textAlign: style.educations.degree
                                .textAlign as any,
                            }}>
                            {item.degree},{" "}
                          </span>
                        )}
                        {item.school && (
                          <span
                            style={{
                              ...style.educations.school,
                              textAlign: style.educations.school
                                .textAlign as any,
                            }}>
                            {item.school},{" "}
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
                        </span>{" "}
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
            </div>
            <div>
              <div style={styleCommon.headerIcon}>
                {referencesSectionTitle && (
                  <h1
                    style={{
                      ...style.sectionTitles.referencesStyle,
                      textAlign: style.sectionTitles.referencesStyle
                        .textAlign as any,
                      marginTop: "5px",
                    }}>
                    {referencesSectionTitle}
                  </h1>
                )}
              </div>

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
                          {item.name},{" "}
                        </span>
                      )}
                      {item.company && (
                        <span
                          style={{
                            ...style.references.company,
                            textAlign: style.references.company
                              .textAlign as any,
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
          </div>
          <div style={styleCommon.headerDivOne}>
            <div>
              {personalInfoSectionTitle && (
                <h1
                  style={{
                    ...style.sectionTitles.personalInfoStyle,
                    textAlign: style.sectionTitles.personalInfoStyle
                      .textAlign as any,
                  }}>
                  {personalInfoSectionTitle}
                </h1>
              )}
              <div>
                {resume.personalInfo.address && (
                  <h1 style={styleCommon.personalInfoLabel}>Address</h1>
                )}
                <h1 style={{ lineHeight: "13px" }}>
                  {resume.personalInfo.address && (
                    <span
                      style={{
                        ...style.personalInfo.address,
                        textAlign: style.personalInfo.address.textAlign as any,
                      }}>
                      {" "}
                      {resume.personalInfo.address},
                    </span>
                  )}
                  {resume.personalInfo.city && (
                    <span
                      style={{
                        ...style.personalInfo.city,
                        textAlign: style.personalInfo.city.textAlign as any,
                      }}>
                      {" "}
                      {resume.personalInfo.city},
                    </span>
                  )}
                  {resume.personalInfo.postalCode && (
                    <span
                      style={{
                        ...style.personalInfo.postalCode,
                        textAlign: style.personalInfo.postalCode
                          .textAlign as any,
                      }}>
                      {" "}
                      {resume.personalInfo.postalCode},
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
                </h1>
                {resume.personalInfo.email && (
                  <div>
                    <h1 style={styleCommon.personalInfoLabel}>Email</h1>
                    <p
                      style={{
                        ...style.personalInfo.email,
                        textAlign: style.personalInfo.email.textAlign as any,
                      }}>
                      <a href={`mailto:${resume.personalInfo.email}`}>
                        {resume.personalInfo.email}
                      </a>
                    </p>
                  </div>
                )}
                {personalInfo.nationality && (
                  <>
                    <h1 style={styleCommon.personalInfoLabel}>Nationality</h1>
                    <p
                      style={{
                        ...style.personalInfo.nationality,
                        textAlign: style.personalInfo.nationality
                          .textAlign as any,
                      }}>
                      {personalInfo.nationality}
                    </p>
                  </>
                )}
                {personalInfo.drivingLicense && (
                  <>
                    <h1 style={styleCommon.personalInfoLabel}>
                      DrivingLicense
                    </h1>
                    <p
                      style={{
                        ...style.personalInfo.drivingLicense,
                        textAlign: style.personalInfo.drivingLicense
                          .textAlign as any,
                      }}>
                      {personalInfo.drivingLicense}
                    </p>
                  </>
                )}
                {personalInfo.placeOfBirth && (
                  <>
                    <h1 style={styleCommon.personalInfoLabel}>
                      Place Of Birth
                    </h1>
                    <p
                      style={{
                        ...style.personalInfo.placeOfBirth,
                        textAlign: style.personalInfo.placeOfBirth
                          .textAlign as any,
                      }}>
                      {personalInfo.placeOfBirth}
                    </p>
                  </>
                )}
                {personalInfo.DateOfBirth && (
                  <>
                    <h1 style={styleCommon.personalInfoLabel}>Date Of Birth</h1>
                    <p
                      style={{
                        ...style.personalInfo.DateOfBirth,
                        textAlign: style.personalInfo.DateOfBirth
                          .textAlign as any,
                      }}>
                      {personalInfo.DateOfBirth}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div>
              {skillSectionTitle && (
                <h1
                  style={{
                    ...style.sectionTitles.skillsStyle,
                    textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                    marginTop: "5px",
                  }}>
                  {skillSectionTitle}
                </h1>
              )}
              <div>
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
                          <h1 style={styleCommon.skillsLevelContainer}>
                            {createArrayUpToNumber(item.level / 20).map((i) => (
                              <span
                                key={i}
                                style={styleCommon.skillsLevel}></span>
                            ))}
                          </h1>
                        )}
                      </div>
                    )
                  );
                })}
              </div>
            </div>
            <div>
              {languageSectionTitle && (
                <h1
                  style={{
                    ...style.sectionTitles.languagesStyle,
                    textAlign: style.sectionTitles.languagesStyle
                      .textAlign as any,
                    marginTop: "5px",
                  }}>
                  {languageSectionTitle}
                </h1>
              )}
              {resume.languages.map((item) => {
                return (
                  item.language && (
                    <div key={item._id} style={{ lineHeight: "13px" }}>
                      <span
                        style={{
                          ...style.languages.language,
                          textAlign: style.languages.language.textAlign as any,
                        }}>
                        {item.language}
                      </span>{" "}
                      {item.level && (
                        <span
                          style={{
                            ...style.languages.level,
                            textAlign: style.languages.level.textAlign as any,
                          }}>
                          ( {item.level})
                        </span>
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
                  {socialProfilesSectionTitle}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Sydney2);
