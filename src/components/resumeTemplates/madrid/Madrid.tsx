/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleMadrid from "./MadridStyle";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
// import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
export interface IMadrid {
  resume?: IResumeData;
}

const Madrid: React.ForwardRefRenderFunction<HTMLDivElement> = ({ _ }, ref) => {
  const style = styleMadrid.require;
  const styleCommon = styleMadrid.common;
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
  const personalSummaryTitle =
    resume.sectionTitles.professionalSummary &&
    resume.sectionTitles.professionalSummary !== "Untitled" &&
    resume.sectionTitles.professionalSummary;

  const educationSectionTitle =
    resume.sectionTitles.educations &&
    resume.sectionTitles.educations !== "Untitled" &&
    resume.educations.length > 0 &&
    resume.educations.find(
      (item) => item.city || item.degree || item.description || item.school
    ) &&
    resume.sectionTitles.educations;

  const skillsSectionTitle =
    resume.sectionTitles.skills &&
    resume.sectionTitles.skills !== "Untitled" &&
    resume.skills.length > 0 &&
    resume.skills.find((item) => item.label || item.level) &&
    resume.sectionTitles.skills;
  const languagesSectionTitle =
    resume.sectionTitles.languages &&
    resume.sectionTitles.languages !== "Untitled" &&
    resume.languages.length > 0 &&
    resume.languages.find((item) => item.language || item.level) &&
    resume.sectionTitles.languages;
  const socialSectionTitle =
    resume.sectionTitles.socialProfiles &&
    resume.sectionTitles.socialProfiles !== "Untitled" &&
    resume.socialProfiles.length > 0 &&
    resume.socialProfiles.find((item) => item.label || item.link) &&
    resume.sectionTitles.socialProfiles;

  return (
    <div
      // className="bg-blue-500"
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.fontSize.height,
        width: resume.fontSize.width,
        transformOrigin:
          parseFloat(resume.fontSize.height.slice(0, -2)) > 1190.14
            ? "bottom"
            : "",
        transition: "transform 0.5s",
      }}>
      <div
        style={{
          ...styleCommon.container,
        }}>
        {/* header section */}
        <div
          style={{
            ...styleCommon.header,
            backgroundColor: style.theme,
          }}>
          {resume.avatar.url && (
            <div style={{ ...styleCommon.headerDivOne }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={resume.avatar.url}
                alt="avatar"
              />
            </div>
          )}
          <div style={{ ...styleCommon.headerDivTwo }}>
            {resume.personalInfo.firstName && (
              <span
                style={{
                  fontFamily: style.personalInfo.firstName.fontFamily,
                  fontSize: style.personalInfo.firstName.fontSize,
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
                  fontSize: style.personalInfo.lastName.fontSize,
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
                  fontSize: style.personalInfo.jobTitle.fontSize,
                  fontWeight: style.personalInfo.jobTitle.fontWeight,
                  color: style.personalInfo.jobTitle.color,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}>
                {resume.personalInfo.jobTitle}
              </h1>
            )}
            {resume.personalInfo.email && (
              <>
                <h1
                  style={{
                    fontFamily: style.personalInfo.email.fontFamily,
                    fontSize: style.personalInfo.email.fontSize,
                    fontWeight: style.personalInfo.email.fontWeight,
                    color: style.personalInfo.email.color,
                    textAlign: style.personalInfo.email.textAlign as any,
                  }}>
                  {resume.personalInfo.email}
                </h1>
              </>
            )}
          </div>
        </div>
        {/* body section */}
        <div style={{ ...styleCommon.body }}>
          {/* info div */}
          <div>
            {personalSectionTitle && (
              <h1
                style={{
                  ...styleCommon.commonMarginTop,
                  ...style.sectionTitles.personalInfoStyle,
                  textAlign: style.sectionTitles.personalInfoStyle
                    .textAlign as any,
                }}>
                <span style={{ ...styleCommon.sectionTitle }}>
                  {personalSectionTitle}
                </span>
              </h1>
            )}

            {(resume.personalInfo.postalCode ||
              resume.personalInfo.address ||
              resume?.personalInfo.country ||
              resume?.personalInfo.city) && (
              <h1>
                {resume.personalInfo.postalCode && (
                  <span
                    style={{
                      ...style.personalInfo.postalCode,
                      textAlign: style.personalInfo.postalCode.textAlign as any,
                    }}>
                    {resume.personalInfo.postalCode},
                  </span>
                )}
                {resume.personalInfo.address && (
                  <span
                    style={{
                      ...style.personalInfo.address,
                      textAlign: style.personalInfo.address.textAlign as any,
                    }}>
                    {resume.personalInfo.address},
                  </span>
                )}
                {resume.personalInfo.city && (
                  <span
                    style={{
                      ...style.personalInfo.city,
                      textAlign: style.personalInfo.city.textAlign as any,
                    }}>
                    {resume.personalInfo.city},
                  </span>
                )}
                {resume.personalInfo.country && (
                  <span
                    style={{
                      ...style.personalInfo.country,
                      textAlign: style.personalInfo.city.textAlign as any,
                    }}>
                    {resume.personalInfo.country}
                  </span>
                )}
              </h1>
            )}

            {resume.personalInfo.DateOfBirth && (
              <h1
                style={{
                  ...style.personalInfo.DateOfBirth,
                  textAlign: style.personalInfo.DateOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.DateOfBirth}
              </h1>
            )}
            {resume.personalInfo.placeOfBirth && (
              <h1
                style={{
                  ...style.personalInfo.placeOfBirth,
                  textAlign: style.personalInfo.placeOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.placeOfBirth}
              </h1>
            )}

            {resume.personalInfo.phoneNumber && (
              <h1
                style={{
                  ...style.personalInfo.phoneNumber,
                  textAlign: style.personalInfo.phoneNumber.textAlign as any,
                }}>
                {resume.personalInfo.phoneNumber}
              </h1>
            )}
            {resume.personalInfo.nationality && (
              <h1
                style={{
                  ...style.personalInfo.nationality,
                  textAlign: style.personalInfo.nationality.textAlign as any,
                }}>
                {resume.personalInfo.nationality}
              </h1>
            )}

            {resume.personalInfo.drivingLicense && (
              <h1
                style={{
                  ...style.personalInfo.drivingLicense,
                  textAlign: style.personalInfo.drivingLicense.textAlign as any,
                }}>
                {resume.personalInfo.drivingLicense}
              </h1>
            )}
          </div>

          {/* profile div */}
          <div>
            {personalSummaryTitle && (
              <h1
                style={{
                  ...styleCommon.commonMarginTop,
                  ...style.sectionTitles.professionalSummaryStyle,
                  textAlign: style.sectionTitles.professionalSummaryStyle
                    .textAlign as any,
                }}>
                <span style={{ ...styleCommon.sectionTitle }}>
                  {personalSummaryTitle}
                </span>
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
          </div>

          {/* educations */}
          <div>
            {educationSectionTitle && (
              <h1
                style={{
                  ...styleCommon.commonMarginTop,
                  ...style.sectionTitles.educationsStyle,
                  textAlign: style.sectionTitles.educationsStyle
                    .textAlign as any,
                }}>
                <span style={{ ...styleCommon.sectionTitle }}>
                  {educationSectionTitle}
                </span>
              </h1>
            )}

            {resume.educations.map((item, i) => (
              <div key={i}>
                {item.school && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.school,
                        textAlign: style.educations.school.textAlign as any,
                      }}>
                      School Name :
                    </span>
                    {item.school}
                  </h1>
                )}
                {item.degree && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.degree,
                        textAlign: style.educations.degree.textAlign as any,
                      }}>
                      Degree :
                    </span>
                    {item.degree}
                  </h1>
                )}
                {item.city && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.city,
                        textAlign: style.educations.city.textAlign as any,
                      }}>
                      City :
                    </span>
                    {item.city}
                  </h1>
                )}
                {item.startMontYear && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.startMontYear,
                        textAlign: style.educations.startMontYear
                          .textAlign as any,
                      }}>
                      Start Date :
                    </span>
                    {item.startMontYear}
                  </h1>
                )}
                {item.endMontYear && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.MontYear,
                        textAlign: style.educations.MontYear.textAlign as any,
                      }}>
                      End Date :
                    </span>
                    {item.endMontYear}
                  </h1>
                )}
                {item.description && (
                  <h1>
                    <span
                      style={{
                        ...style.educations.description,
                        textAlign: style.educations.description
                          .textAlign as any,
                      }}>
                      Description :
                    </span>
                    {item.description}
                  </h1>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* skills */}
        <div>
          {skillsSectionTitle && (
            <h1
              style={{
                ...styleCommon.commonMarginTop,
                ...style.sectionTitles.skillsStyle,
                textAlign: style.sectionTitles.skillsStyle.textAlign as any,
              }}>
              <span style={{ ...styleCommon.sectionTitle }}>
                {skillsSectionTitle}
              </span>
            </h1>
          )}
          <div>
            {resume.skills.map((item, i) => (
              <div key={i}>
                {item.label && (
                  <h1>
                    <span
                      style={{
                        ...style.skills.label,
                        textAlign: style.skills.label.textAlign as any,
                      }}>
                      Skill :
                    </span>
                    {item.label}
                  </h1>
                )}
                {item.level && (
                  <h1>
                    <span
                      style={{
                        ...style.skills.level,
                        textAlign: style.skills.level.textAlign as any,
                      }}>
                      Level :
                    </span>
                    <div style={{ ...styleCommon.skills }}>
                      {createArrayUpToNumber(item.level / 20).map((i) => (
                        <div
                          key={i}
                          style={{ ...styleCommon.skillsLevel }}></div>
                      ))}
                    </div>
                  </h1>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* languages */}
        <div>
          {languagesSectionTitle && (
            <h1
              // className="mt-4"
              style={{
                ...styleCommon.commonMarginTop,
                ...style.sectionTitles.languagesStyle,
                textAlign: style.sectionTitles.languagesStyle.textAlign as any,
              }}>
              <span style={{ ...styleCommon.sectionTitle }}>
                {languagesSectionTitle}
              </span>
            </h1>
          )}
          <div>
            {resume.languages.map((item, i) => (
              <div key={i}>
                {item.language && (
                  <h1>
                    <span
                      style={{
                        ...style.languages.language,
                        textAlign: style.languages.language.textAlign as any,
                      }}>
                      Language :
                    </span>
                    {item.language}
                  </h1>
                )}
                {item.level && (
                  <h1>
                    <span
                      style={{
                        ...style.languages.level,
                        textAlign: style.languages.level.textAlign as any,
                      }}>
                      Level :
                    </span>
                    <div style={{ ...styleCommon.skills }}>
                      {createArrayUpToNumber(parseInt(item.level)).map((i) => (
                        <div
                          key={i}
                          style={{ ...styleCommon.skillsLevel }}></div>
                      ))}
                    </div>
                  </h1>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* social */}
        <div>
          {socialSectionTitle && (
            <h1
              style={{
                ...styleCommon.commonMarginTop,
                ...style.sectionTitles.socialProfilesStyle,
                textAlign: style.sectionTitles.socialProfilesStyle
                  .textAlign as any,
              }}>
              <span style={{ ...styleCommon.sectionTitle }}>
                {socialSectionTitle}
              </span>
            </h1>
          )}
          <div>
            {resume.socialProfiles.map((item, i) => (
              <div key={i}>
                {item.label && (
                  <h1>
                    <span
                      style={{
                        ...style.languages.language,
                        textAlign: style.languages.language.textAlign as any,
                      }}>
                      Label :
                    </span>
                    {item.label}
                  </h1>
                )}
                {item.link && (
                  <h1>
                    <span
                      style={{
                        ...style.languages.level,
                        textAlign: style.languages.level.textAlign as any,
                      }}>
                      Link :
                    </span>
                    {item.link}
                  </h1>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Madrid);
