/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Page,
  View,
  Document,
  Image,
  Font,
  Text,
  Link,
} from "@react-pdf/renderer";

import {
  AdventPro,
  Nunito,
  NunitoSans,
  OpenSans,
  Palanquin,
  PlayfairDisplay,
  Poppins,
  Roboto,
} from "../../../utils/font";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

Font.register({
  family: "Advent Pro",
  fonts: AdventPro,
});

Font.register({
  family: "Roboto",
  fonts: Roboto,
});

Font.register({
  family: "Poppins",
  fonts: Poppins,
});

Font.register({
  family: "Nunito",
  fonts: Nunito,
});

Font.register({
  family: "Nunito Sans",
  fonts: NunitoSans,
});

Font.register({
  family: "Open Sans",
  fonts: OpenSans,
});

Font.register({
  family: "Palanquin",
  fonts: Palanquin,
});

Font.register({
  family: "Playfair Display",
  fonts: PlayfairDisplay,
});

export interface IAthens {
  resume: IResumeData;
}

const AthensPDF2: React.FC<IAthens> = ({ resume }) => {
  const style = resume.style;
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
    <Document>
      <Page
        style={{
          padding: "0px 0px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <View
          style={{
            paddingTop: "40px",
            paddingLeft: "40px",
            paddingRight: "20px",
            width: "100%",
          }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              // justifyItems: "start",
              // justifyContent: "start",
              alignItems: "center",
            }}>
            {resume.avatar.url && (
              <Image
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                src={resume.avatar.url}
              />
            )}
            <View>
              <View>
                <Text
                  style={{
                    ...style.personalInfo.firstName,
                    textAlign: style.personalInfo.firstName.textAlign as any,
                  }}>
                  {resume.personalInfo.firstName}
                </Text>
                <Text
                  style={{
                    ...style.personalInfo.lastName,
                    textAlign: style.personalInfo.lastName.textAlign as any,
                  }}>
                  {resume.personalInfo.lastName}
                </Text>
              </View>
              <Text
                style={{
                  ...style.personalInfo.jobTitle,
                  textAlign: style.personalInfo.jobTitle.textAlign as any,
                }}>
                {resume.personalInfo.jobTitle}
              </Text>
            </View>
          </View>

          {professionalSummarySectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.professionalSummaryStyle,
                textAlign: style.sectionTitles.professionalSummaryStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {professionalSummarySectionTitle}
            </Text>
          )}
          {resume.professionalSummary && (
            <Text
              style={{
                ...style.professionalSummary.summery,
                textAlign: style.professionalSummary.summery.textAlign as any,
              }}>
              {resume.professionalSummary}
            </Text>
          )}
          {workExperienceSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.workExperienceStyle,
                textAlign: style.sectionTitles.workExperienceStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {workExperienceSectionTitle}
            </Text>
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
                <View
                  style={{ marginBottom: !marginBottom ? "8px" : "0px" }}
                  key={item._id}>
                  <Text>
                    {item.jobTitle && (
                      <Text
                        style={{
                          ...style.workExperience.jobTitle,
                          textAlign: style.workExperience.jobTitle
                            .textAlign as any,
                        }}>
                        {item.jobTitle},
                      </Text>
                    )}
                    {item.employer && (
                      <Text
                        style={{
                          ...style.workExperience.employer,
                          textAlign: style.workExperience.employer
                            .textAlign as any,
                        }}>
                        {item.employer},
                      </Text>
                    )}
                    {item.city && (
                      <Text
                        style={{
                          ...style.workExperience.city,
                          textAlign: style.workExperience.city.textAlign as any,
                        }}>
                        {item.city}
                      </Text>
                    )}
                  </Text>
                  <Text>
                    <Text
                      style={{
                        ...style.workExperience.startMontYear,
                        textAlign: style.workExperience.startMontYear
                          .textAlign as any,
                      }}>
                      {item.startMontYear}
                    </Text>
                    {item.startMontYear && item.endMontYear && " - "}
                    <Text
                      style={{
                        ...style.workExperience.endMontYear,
                        textAlign: style.workExperience.endMontYear
                          .textAlign as any,
                      }}>
                      {item.endMontYear}
                    </Text>
                  </Text>
                  {item.description && (
                    <Text
                      style={{
                        ...style.workExperience.description,
                        textAlign: style.workExperience.description
                          .textAlign as any,
                      }}>
                      {item.description}
                    </Text>
                  )}
                </View>
              )
            );
          })}
          {educationsSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.educationsStyle,
                textAlign: style.sectionTitles.educationsStyle.textAlign as any,
                marginTop: "7px",
              }}>
              {educationsSectionTitle}
            </Text>
          )}
          {resume.educations.map((item) => {
            return (
              (item.city ||
                item.description ||
                item.school ||
                item.degree ||
                item.startMontYear ||
                item.endMontYear) && (
                <View key={item._id}>
                  <Text>
                    {item.degree && (
                      <Text
                        style={{
                          ...style.educations.degree,
                          textAlign: style.educations.degree.textAlign as any,
                        }}>
                        {item.degree},
                      </Text>
                    )}
                    {item.school && (
                      <Text
                        style={{
                          ...style.educations.school,
                          textAlign: style.educations.school.textAlign as any,
                        }}>
                        {item.school},
                      </Text>
                    )}
                    {item.city && (
                      <Text
                        style={{
                          ...style.educations.city,
                          textAlign: style.educations.city.textAlign as any,
                        }}>
                        {item.city}
                      </Text>
                    )}
                  </Text>
                  <Text>
                    <Text
                      style={{
                        ...style.educations.startMontYear,
                        textAlign: style.educations.startMontYear
                          .textAlign as any,
                      }}>
                      {item.startMontYear}
                    </Text>
                    {item.startMontYear && item.endMontYear && " - "}
                    <Text
                      style={{
                        ...style.educations.endMontYear,
                        textAlign: style.educations.endMontYear
                          .textAlign as any,
                      }}>
                      {item.endMontYear}
                    </Text>
                  </Text>

                  {item.description && (
                    <Text
                      style={{
                        ...style.educations.description,
                        textAlign: style.educations.description
                          .textAlign as any,
                      }}>
                      {item.description}
                    </Text>
                  )}
                </View>
              )
            );
          })}
          {referencesSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.referencesStyle,
                textAlign: style.sectionTitles.referencesStyle.textAlign as any,
                marginTop: "7px",
              }}>
              {referencesSectionTitle}
            </Text>
          )}
          {resume.references.map((item) => {
            return (
              <View key={item._id}>
                <Text>
                  {item.name && (
                    <Text
                      style={{
                        ...style.references.name,
                        textAlign: style.references.name.textAlign as any,
                      }}>
                      {item.name},
                    </Text>
                  )}
                  {item.company && (
                    <Text
                      style={{
                        ...style.references.company,
                        textAlign: style.references.company.textAlign as any,
                      }}>
                      {item.company}
                    </Text>
                  )}
                </Text>
                <Text>
                  {item.email && (
                    <Text
                      style={{
                        ...style.references.email,
                        textAlign: style.references.email.textAlign as any,
                      }}>
                      {item.email}
                    </Text>
                  )}
                  {item.phone && item.email && "  |  "}
                  {item.phone && (
                    <Text
                      style={{
                        ...style.references.phone,
                        textAlign: style.references.phone.textAlign as any,
                      }}>
                      {item.phone}
                    </Text>
                  )}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            minHeight: resume?.size.height,
            maxHeight: "100%",
            paddingRight: "40px",
            paddingTop: "40px",
            paddingLeft: "25px",
            width: "230px",
            backgroundColor: "#082A4D",
          }}>
          {personalInfoSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.personalInfoStyle,
                textAlign: style.sectionTitles.personalInfoStyle
                  .textAlign as any,
                marginTop: "7px",
              }}>
              {personalInfoSectionTitle}
            </Text>
          )}

          <Text style={{ display: "flex", flexWrap: "wrap" }}>
            {resume.personalInfo.address && (
              <Text
                style={{
                  ...style.personalInfo.address,
                  textAlign: style.personalInfo.address.textAlign as any,
                }}>
                {resume.personalInfo.address} ,
              </Text>
            )}
            {resume.personalInfo.city && (
              <Text
                style={{
                  ...style.personalInfo.city,
                  textAlign: style.personalInfo.city.textAlign as any,
                }}>
                {resume.personalInfo.city} ,
              </Text>
            )}
            {resume.personalInfo.postalCode && (
              <Text
                style={{
                  ...style.personalInfo.postalCode,
                  textAlign: style.personalInfo.postalCode.textAlign as any,
                }}>
                {resume.personalInfo.postalCode} ,
              </Text>
            )}
            {resume.personalInfo.country && (
              <Text
                style={{
                  ...style.personalInfo.country,
                  textAlign: style.personalInfo.country.textAlign as any,
                }}>
                {resume.personalInfo.country}
              </Text>
            )}
          </Text>
          {resume.personalInfo.email && (
            <Text>
              <Link
                style={{
                  ...style.personalInfo.email,
                  textAlign: style.personalInfo.email.textAlign as any,
                }}
                href={`mailto:${resume.personalInfo.email}`}>
                {resume.personalInfo.email}
              </Link>
            </Text>
          )}
          {resume.personalInfo.phoneNumber && (
            <Text
              style={{
                ...style.personalInfo.phoneNumber,
                textAlign: style.personalInfo.phoneNumber.textAlign as any,
              }}>
              {resume.personalInfo.phoneNumber}
            </Text>
          )}

          {resume.personalInfo.nationality && (
            <>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "12px",
                }}>
                Nationality :
              </Text>
              <Text
                style={{
                  ...style.personalInfo.nationality,
                  textAlign: style.personalInfo.nationality.textAlign as any,
                }}>
                {resume.personalInfo.nationality}
              </Text>
            </>
          )}

          {resume.personalInfo.placeOfBirth && (
            <>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "12px",
                }}>
                Place Of Birth :
              </Text>
              <Text
                style={{
                  ...style.personalInfo.placeOfBirth,
                  textAlign: style.personalInfo.placeOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.placeOfBirth}
              </Text>
            </>
          )}
          {resume.personalInfo.DateOfBirth && (
            <>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "12px",
                }}>
                Date Of Birth :
              </Text>
              <Text
                style={{
                  ...style.personalInfo.DateOfBirth,
                  textAlign: style.personalInfo.DateOfBirth.textAlign as any,
                }}>
                {resume.personalInfo.DateOfBirth}
              </Text>
            </>
          )}
          {resume.personalInfo.drivingLicense && (
            <>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito Sans",
                  fontWeight: 600,
                  fontSize: "12px",
                }}>
                Driving License :
              </Text>
              <Text
                style={{
                  ...style.personalInfo.drivingLicense,
                  textAlign: style.personalInfo.drivingLicense.textAlign as any,
                }}>
                {resume.personalInfo.drivingLicense}
              </Text>
            </>
          )}
          {skillSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.skillsStyle,
                textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                marginTop: "5px",
              }}>
              {skillSectionTitle} :
            </Text>
          )}
          {resume.skills.map((item) => {
            return (
              item.label && (
                <View style={{ marginBottom: "6px" }} key={item._id}>
                  <Text
                    style={{
                      ...style.skills.label,
                      textAlign: style.skills.label.textAlign as any,
                    }}>
                    {item.label}
                  </Text>
                  {!skillLevelHide && (
                    <View
                      style={{
                        width: "100%",
                        height: "3px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px",
                        marginTop: "4px",
                        backgroundColor: "#888",
                      }}>
                      <View
                        style={{
                          width: `${item.level}%`,
                          backgroundColor: "#FFFFFF",
                          height: "100%",
                        }}></View>
                    </View>
                  )}
                </View>
              )
            );
          })}
          {socialProfilesSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.socialProfilesStyle,
                textAlign: style.sectionTitles.socialProfilesStyle
                  .textAlign as any,
                marginTop: "5px",
              }}>
              {socialProfilesSectionTitle} :
            </Text>
          )}
          {resume.socialProfiles.map((item) => {
            return (
              item.label && (
                <Link
                  key={item._id}
                  style={{
                    ...style.socialProfiles.label,
                    textAlign: style.socialProfiles.label.textAlign as any,
                  }}
                  href={item.link}>
                  {item.label}
                </Link>
              )
            );
          })}

          {languageSectionTitle && (
            <Text
              style={{
                ...style.sectionTitles.languagesStyle,
                textAlign: style.sectionTitles.languagesStyle.textAlign as any,
                marginTop: "5px",
              }}>
              {languageSectionTitle} :
            </Text>
          )}
          {resume.languages.map((item) => {
            return (
              item.language && (
                <View key={item._id}>
                  <Text
                    style={{
                      ...style.languages.language,
                      textAlign: style.languages.language.textAlign as any,
                    }}>
                    {item.language}
                  </Text>
                  <Text
                    style={{
                      ...style.languages.level,
                      textAlign: style.languages.level.textAlign as any,
                    }}>
                    {item.level}
                  </Text>
                </View>
              )
            );
          })}
        </View>
      </Page>
      ;
    </Document>
  );
};

export default AthensPDF2;
