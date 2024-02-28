/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Text,
  Link,
} from "@react-pdf/renderer";
import styleVienna from "./ViennaStyle";

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
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
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

export interface IVienna {
  resume: IResumeData;
}

const ViennaPDF: React.FC<IVienna> = ({ resume }) => {
  const style = resume.style;
  const styleCommon = styleVienna.common;
  const skillLevelHide = resume.style.skillLevel;

  const styles = StyleSheet.create({
    container: styleVienna.common.container,
    header: {
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      padding: "0px 24px 0px 0px",
      backgroundColor: style.theme,
    },
    headerDivOne: { width: "213.3px" },
    headerDivTwo: {
      width: "100%",
      padding: !resume.avatar.url ? "10px 40px 10px 40px" : "10px 0px 0px 0px",
    },

    body: {
      display: "flex",
      gap: "15px",
      padding: "15px 40px 0px 40px",
      flexDirection: "row",
    },
    bodyDivOne: { width: "150px" },
    bodyDivTwo: { width: "100%" },

    textFlex: {
      display: "flex",
      flexDirection: "row",
      gap: "2px",
      alignItems: "center",
      alignContent: "center",
    },
    personalInfoAddressCityPostalCode: {
      display: "flex",
      flexDirection: "row",
      gap: "2px",
      lineHeight: 1.5,
    },
    personalInfoFirstName: {
      ...style.personalInfo.firstName,
      textAlign: style.personalInfo.firstName.textAlign as any,
    },
    personalInfoLastName: {
      ...style.personalInfo.lastName,
      textAlign: style.personalInfo.lastName.textAlign as any,
    },
    personalInfoJobTitle: {
      ...style.personalInfo.jobTitle,
      textAlign: style.personalInfo.jobTitle.textAlign as any,
      lineHeight: 1.5,
    },

    personalInfoAddress: {
      ...style.personalInfo.address,
      textAlign: style.personalInfo.address.textAlign as any,
    },
    personalInfoCity: {
      ...style.personalInfo.city,
      textAlign: style.personalInfo.city.textAlign as any,
    },
    personalInfoPostalCode: {
      ...style.personalInfo.postalCode,
      textAlign: style.personalInfo.postalCode.textAlign as any,
    },
    personalInfoCountry: {
      ...style.personalInfo.country,
      textAlign: style.personalInfo.country.textAlign as any,
    },

    personalInfoPhoneNumber: {
      ...style.personalInfo.phoneNumber,
      textAlign: style.personalInfo.phoneNumber.textAlign as any,
      marginTop: "2px",
    },
    personalInfoEmail: {
      ...style.personalInfo.email,
      textAlign: style.personalInfo.email.textAlign as any,
      ...styleCommon.personalInfoEmail,
    },
    personalInfoStyle: {
      ...style.sectionTitles.personalInfoStyle,
      textAlign: style.sectionTitles.personalInfoStyle.textAlign as any,
      marginBottom: "6px",
    },

    personalInfoLabel: {
      color: "#002B18",
      fontFamily: "Nunito Sans",
      fontWeight: 600,
      fontSize: "12px",
      marginBottom: "4px",
    },
    personalInfoNationality: {
      ...style.personalInfo.nationality,
      textAlign: style.personalInfo.nationality.textAlign as any,
      marginBottom: "4px",
    },
    personalInfoDrivingLicense: {
      ...style.personalInfo.drivingLicense,
      textAlign: style.personalInfo.drivingLicense.textAlign as any,
      marginBottom: "4px",
    },
    personalInfoPlaceOfBirth: {
      ...style.personalInfo.placeOfBirth,
      textAlign: style.personalInfo.placeOfBirth.textAlign as any,
      marginBottom: "4px",
    },
    personalInfoDateOfBirth: {
      ...style.personalInfo.DateOfBirth,
      textAlign: style.personalInfo.DateOfBirth.textAlign as any,
      marginBottom: "4px",
    },
    skillSectionTitle: {
      ...style.sectionTitles.skillsStyle,
      textAlign: style.sectionTitles.skillsStyle.textAlign as any,
      marginTop: "5px",
      marginBottom: "4px",
    },
    skillsItems: {
      marginBottom: "4px",
    },
    skillsLabel: {
      ...style.skills.label,
      textAlign: style.skills.label.textAlign as any,
      // marginBottom: "4px",
    },
    skillsLevelContainer: {
      width: "100%",
      backgroundColor: "#d1d1d1",
      height: "3px",
      display: "flex",
      flexDirection: "row",
      gap: "2px",
      marginTop: "4px",
    },
    skillsLevel: {
      width: `20%`,
      backgroundColor: "#3a3139",
      height: "100%",
    },
    languageSectionTitle: {
      ...style.sectionTitles.languagesStyle,
      textAlign: style.sectionTitles.languagesStyle.textAlign as any,
      marginTop: "5px",
      marginBottom: "6px",
    },
    languagesLanguage: {
      ...style.languages.language,
      textAlign: style.languages.language.textAlign as any,
      marginBottom: "4px",
    },
    languagesLevel: {
      ...style.languages.level,
      textAlign: style.languages.level.textAlign as any,
      marginBottom: "4px",
    },
    socialProfilesSectionTitle: {
      ...style.sectionTitles.socialProfilesStyle,
      textAlign: style.sectionTitles.socialProfilesStyle.textAlign as any,
      marginTop: "5px",
      marginBottom: "6px",
    },
    socialProfilesLabel: {
      ...style.socialProfiles.label,
      textAlign: style.socialProfiles.label.textAlign as any,
      marginBottom: "4px",
    },
    professionalSummarySectionTitle: {
      ...style.sectionTitles.professionalSummaryStyle,
      textAlign: style.sectionTitles.professionalSummaryStyle.textAlign as any,
      marginBottom: "6px",
    },
    professionalSummarySummery: {
      ...style.professionalSummary.summery,
      textAlign: style.professionalSummary.summery.textAlign as any,
      lineHeight: 1.5,
    },
    workExperienceStyle: {
      ...style.sectionTitles.workExperienceStyle,
      textAlign: style.sectionTitles.workExperienceStyle.textAlign as any,
      marginTop: "5px",
      marginBottom: "6px",
    },
    workExperienceJobTitle: {
      ...style.workExperience.jobTitle,
      textAlign: style.workExperience.jobTitle.textAlign as any,
      marginBottom: "4px",
    },
    workExperienceEmployer: {
      ...style.workExperience.employer,
      textAlign: style.workExperience.employer.textAlign as any,
      marginBottom: "4px",
    },
    workExperienceCity: {
      ...style.workExperience.city,
      textAlign: style.workExperience.city.textAlign as any,
      marginBottom: "4px",
    },
    workExperienceStartMontYear: {
      ...style.workExperience.startMontYear,
      textAlign: style.workExperience.startMontYear.textAlign as any,
    },
    workExperienceEndMontYear: {
      ...style.workExperience.endMontYear,
      textAlign: style.workExperience.endMontYear.textAlign as any,
    },
    workExperienceDescription: {
      ...style.workExperience.description,
      textAlign: style.workExperience.description.textAlign as any,
      lineHeight: 1.5,
      marginTop: "-12px",
    },
    educationsStyle: {
      ...style.sectionTitles.educationsStyle,
      textAlign: style.sectionTitles.educationsStyle.textAlign as any,
      marginBottom: "6px",
      marginTop: "5px",
    },
    educationsDegree: {
      ...style.educations.degree,
      textAlign: style.educations.degree.textAlign as any,
      marginBottom: "4px",
    },
    educationsSchool: {
      ...style.educations.school,
      textAlign: style.educations.school.textAlign as any,
      marginBottom: "4px",
    },
    educationsCity: {
      ...style.educations.city,
      textAlign: style.educations.city.textAlign as any,
      marginBottom: "4px",
    },
    educationsStartMontYear: {
      ...style.educations.startMontYear,
      textAlign: style.educations.startMontYear.textAlign as any,
      marginBottom: "6px",
    },
    educationsEndMontYear: {
      ...style.educations.endMontYear,
      textAlign: style.educations.endMontYear.textAlign as any,
      marginBottom: "6px",
    },
    educationsDescription: {
      ...style.educations.description,
      textAlign: style.educations.description.textAlign as any,
      lineHeight: 1.5,
    },
    referencesStyle: {
      ...style.sectionTitles.referencesStyle,
      textAlign: style.sectionTitles.referencesStyle.textAlign as any,
      marginTop: "5px",
      marginBottom: "6px",
    },
    referencesName: {
      ...style.references.name,
      textAlign: style.references.name.textAlign as any,
      marginBottom: "4px",
    },
    referencesCompany: {
      ...style.references.company,
      textAlign: style.references.company.textAlign as any,
      marginBottom: "4px",
    },
    referencesEmail: {
      ...style.references.email,
      textAlign: style.references.email.textAlign as any,
      marginBottom: "4px",
    },
    referencesPhone: {
      ...style.references.phone,
      textAlign: style.references.phone.textAlign as any,
      marginBottom: "4px",
    },
  });

  const personalInfo = resume.personalInfo;

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

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          {resume.avatar.url && (
            <View style={styles.headerDivOne}>
              <Image src={resume.avatar.url} />
            </View>
          )}
          <View style={styles.headerDivTwo}>
            {(personalInfo.firstName || personalInfo.lastName) && (
              <View style={styles.textFlex}>
                {personalInfo.firstName && (
                  <Text style={styles.personalInfoFirstName}>
                    {personalInfo.firstName}
                  </Text>
                )}
                {personalInfo.lastName && (
                  <Text style={styles.personalInfoLastName}>
                    {personalInfo.lastName}
                  </Text>
                )}
              </View>
            )}
            {personalInfo.jobTitle && (
              <Text style={styles.personalInfoJobTitle}>
                {personalInfo.jobTitle}
              </Text>
            )}
            {(personalInfo.city ||
              personalInfo.address ||
              personalInfo.postalCode ||
              personalInfo.country) && (
              <View style={styles.personalInfoAddressCityPostalCode}>
                {personalInfo.address && (
                  <Text style={styles.personalInfoAddress}>
                    {personalInfo.address},
                  </Text>
                )}
                {personalInfo.city && (
                  <Text style={styles.personalInfoCity}>
                    {personalInfo.city},
                  </Text>
                )}
                {personalInfo.postalCode && (
                  <Text style={styles.personalInfoPostalCode}>
                    {personalInfo.postalCode},
                  </Text>
                )}
                {personalInfo.country && (
                  <Text style={styles.personalInfoCountry}>
                    {personalInfo.country}
                  </Text>
                )}
              </View>
            )}

            {(personalInfo.email || personalInfo.phoneNumber) && (
              <View style={styles.textFlex}>
                {personalInfo.phoneNumber && (
                  <Text style={styles.personalInfoPhoneNumber}>
                    {personalInfo.phoneNumber}
                  </Text>
                )}
                {personalInfo.email && (
                  <Text style={styles.personalInfoEmail}>
                    {personalInfo.email}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyDivOne}>
            {/* TODO: Personal Info   */}
            {personalInfoSectionTitle && (
              <Text style={styles.personalInfoStyle}>
                {personalInfoSectionTitle} :
              </Text>
            )}
            {personalInfo.nationality && (
              <>
                <Text style={styles.personalInfoLabel}>Nationality</Text>
                <Text style={styles.personalInfoNationality}>
                  {personalInfo.nationality}
                </Text>
              </>
            )}
            {personalInfo.drivingLicense && (
              <>
                <Text style={styles.personalInfoLabel}>DrivingLicense</Text>
                <Text style={styles.personalInfoDrivingLicense}>
                  {personalInfo.drivingLicense}
                </Text>
              </>
            )}
            {personalInfo.placeOfBirth && (
              <>
                <Text style={styles.personalInfoLabel}>Place Of Birth</Text>
                <Text style={styles.personalInfoPlaceOfBirth}>
                  {personalInfo.placeOfBirth}
                </Text>
              </>
            )}
            {personalInfo.DateOfBirth && (
              <>
                <Text style={styles.personalInfoLabel}>Date Of Birth</Text>
                <Text style={styles.personalInfoDateOfBirth}>
                  {personalInfo.DateOfBirth}
                </Text>
              </>
            )}
            {/* TODO: Skills   */}
            {skillSectionTitle && (
              <Text style={styles.skillSectionTitle}>
                {skillSectionTitle} :
              </Text>
            )}

            {resume.skills.map((item) => {
              return (
                item.label && (
                  <View style={styles.skillsItems} key={item._id}>
                    <Text style={styles.skillsLabel}>{item.label}</Text>
                    {!skillLevelHide && (
                      <View style={styles.skillsLevelContainer}>
                        {createArrayUpToNumber(item.level / 20).map((i) => (
                          <View key={i} style={styles.skillsLevel}></View>
                        ))}
                      </View>
                    )}
                  </View>
                )
              );
            })}

            {/* TODO: Languages    */}
            {languageSectionTitle && (
              <Text style={styles.languageSectionTitle}>
                {languageSectionTitle} :
              </Text>
            )}

            {resume.languages.map((item) => {
              return (
                item.language && (
                  <View key={item._id} style={styles.textFlex}>
                    <Text style={styles.languagesLanguage}>
                      {item.language}
                    </Text>
                    <Text style={styles.languagesLevel}>{item.level}</Text>
                  </View>
                )
              );
            })}

            {/* TODO: Social Profile    */}
            {socialProfilesSectionTitle && (
              <Text style={styles.socialProfilesSectionTitle}>
                {socialProfilesSectionTitle} :
              </Text>
            )}
            {resume.socialProfiles.map((item) => {
              return (
                item.label && (
                  <Link
                    key={item._id}
                    style={styles.socialProfilesLabel}
                    href={item.link}>
                    {item.label}
                  </Link>
                )
              );
            })}
          </View>
          <View style={styles.bodyDivTwo}>
            {/* TODO: professionalSummary */}
            {professionalSummarySectionTitle && (
              <Text style={styles.professionalSummarySectionTitle}>
                {professionalSummarySectionTitle}
              </Text>
            )}
            {resume.professionalSummary && (
              <Text style={styles.professionalSummarySummery}>
                {resume.professionalSummary}
              </Text>
            )}

            {/* TODO: professionalSummary */}
            {workExperienceSectionTitle && (
              <Text style={styles.workExperienceStyle}>
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
                    key={item._id}
                    style={{ marginBottom: !marginBottom ? "8px" : "0px" }}>
                    <View style={styles.textFlex}>
                      {item.jobTitle && (
                        <Text style={styles.workExperienceJobTitle}>
                          {item.jobTitle},
                        </Text>
                      )}
                      {item.employer && (
                        <Text style={styles.workExperienceEmployer}>
                          {item.employer},
                        </Text>
                      )}
                      {item.city && (
                        <Text style={styles.workExperienceCity}>
                          {item.city}
                        </Text>
                      )}
                    </View>
                    <View style={styles.textFlex}>
                      <Text style={styles.workExperienceStartMontYear}>
                        {item.startMontYear}
                      </Text>
                      {item.startMontYear && item.endMontYear && (
                        <Text> - </Text>
                      )}
                      <Text style={styles.workExperienceEndMontYear}>
                        {item.endMontYear}
                      </Text>
                    </View>
                    {item.description && (
                      <Text style={styles.workExperienceDescription}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                )
              );
            })}

            {educationsSectionTitle && (
              <Text style={styles.educationsStyle}>
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
                    <View style={styles.textFlex}>
                      {item.degree && (
                        <Text style={styles.educationsDegree}>
                          {item.degree},
                        </Text>
                      )}
                      {item.school && (
                        <Text style={styles.educationsSchool}>
                          {item.school},
                        </Text>
                      )}
                      {item.city && (
                        <Text style={styles.educationsCity}>{item.city}</Text>
                      )}
                    </View>
                    <View style={styles.textFlex}>
                      <Text style={styles.educationsStartMontYear}>
                        {item.startMontYear}
                      </Text>
                      {item.startMontYear && item.endMontYear && (
                        <Text> - </Text>
                      )}
                      <Text style={styles.educationsEndMontYear}>
                        {item.endMontYear}
                      </Text>
                    </View>

                    {item.description && (
                      <Text style={styles.educationsDescription}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                )
              );
            })}

            {referencesSectionTitle && (
              <Text style={styles.referencesStyle}>
                {referencesSectionTitle}
              </Text>
            )}

            {resume.references.map((item) => {
              return (
                <View key={item._id}>
                  <View style={styles.textFlex}>
                    {item.name && (
                      <Text style={styles.referencesName}>{item.name},</Text>
                    )}
                    {item.company && (
                      <Text style={styles.referencesCompany}>
                        {item.company}
                      </Text>
                    )}
                  </View>
                  <View style={styles.textFlex}>
                    {item.email && (
                      <Text style={styles.referencesEmail}>{item.email}</Text>
                    )}
                    {item.phone && item.email && <Text>|</Text>}
                    {item.phone && (
                      <Text style={styles.referencesPhone}>{item.phone}</Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ViennaPDF;
