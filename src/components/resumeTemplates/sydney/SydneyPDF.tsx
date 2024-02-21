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
  Link
} from "@react-pdf/renderer";

import { resume } from "../resume";
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
import styleSydney from "./SydneyStyle";

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

const SydneyPDF: React.FC = () => {
  const style = styleSydney.require;
  const styleCommon = styleSydney.common;
  const personalInfo = resume?.personalInfo;

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

  const styles = StyleSheet.create({
    container: styleSydney.common.container,
    header: {
      display: "flex",
      flexDirection: 'row',
      gap: "5px",
    },
    headerViewOne: styleSydney.common.headerDivOne,
    headerViewTwo: styleSydney.common.headerDivTwo,
    firstName: {
      ...styleSydney.require.personalInfo.firstName,
      textAlign: styleSydney.require.personalInfo.firstName.textAlign as any,

    },
    lastName: {
      ...style.personalInfo.lastName,
      textAlign: style.personalInfo.lastName.textAlign as any,

    },
    jobTitle: {
      ...style.personalInfo.jobTitle,
      textAlign: style.personalInfo.jobTitle.textAlign as any,
    },
    imageAva: styleSydney.common.Image,
    headerIcon: {
      display: "flex",
      flexDirection: 'row',
      gap: "10px",
      alignItems: 'center',
      marginLeft: "-25px",
    },
    icon: styleSydney.common.icon,

    sectionTitles: {
      ...styleSydney.require.sectionTitles.professionalSummaryStyle,
      textAlign: styleSydney.require.sectionTitles.professionalSummaryStyle
        .textAlign as any,
    },

    summery: {
      ...styleSydney.require.professionalSummary.summery,
      textAlign: styleSydney.require.professionalSummary.summery.textAlign as any,
    },
    workExperienceStyle: {
      ...styleSydney.require.sectionTitles.workExperienceStyle,
      textAlign: styleSydney.require.sectionTitles.workExperienceStyle.textAlign as any,
      marginTop: "10px",
    },
    workExperience: {
      ...styleSydney.require.workExperience.jobTitle,
      textAlign: styleSydney.require.workExperience.jobTitle.textAlign as any,
    },
    startMontYear: {
      ...styleSydney.require.workExperience.startMontYear,
      textAlign: styleSydney.require.workExperience.startMontYear.textAlign as any,
    },
    endMontYear: {
      ...styleSydney.require.workExperience.endMontYear,
      textAlign: styleSydney.require.workExperience.endMontYear.textAlign as any,
    },
    description: {
      ...styleSydney.require.workExperience.description,
      textAlign: styleSydney.require.workExperience.description.textAlign as any,
    },
    educationsStyle: {
      ...styleSydney.require.sectionTitles.educationsStyle,
      textAlign: styleSydney.require.sectionTitles.educationsStyle
        .textAlign as any,
      marginTop: "10px",
    },
    degree: {
      ...styleSydney.require.educations.degree,
      textAlign: styleSydney.require.educations.degree.textAlign as any,
    },
    school: {
      ...styleSydney.require.educations.school,
      textAlign: styleSydney.require.educations.school.textAlign as any,
    },
    city: {
      ...styleSydney.require.educations.city,
      textAlign: styleSydney.require.educations.city.textAlign as any,
    },
    startMontYearEdu: {
      ...styleSydney.require.educations.startMontYear,
      textAlign: styleSydney.require.educations.startMontYear.textAlign as any,
    },
    endMontYearEdu: {
      ...styleSydney.require.educations.endMontYear,
      textAlign: styleSydney.require.educations.endMontYear
        .textAlign as any,
    },
    eduDes: {
      ...styleSydney.require.educations.description,
      textAlign: styleSydney.require.educations.description
        .textAlign as any,
    },
    referencesStyle: {
      ...styleSydney.require.sectionTitles.referencesStyle,
      textAlign: style.sectionTitles.referencesStyle
        .textAlign as any,
      marginTop: "10px",
    },
    refName: {
      ...styleSydney.require.references.name,
      textAlign: styleSydney.require.references.name.textAlign as any,
    },
    refCom: {
      ...styleSydney.require.references.company,
      textAlign: styleSydney.require.references.company.textAlign as any,
    },
    refEmail: {
      ...styleSydney.require.references.email,
      textAlign: styleSydney.require.references.email.textAlign as any
    },
    refPhone: {
      ...styleSydney.require.references.phone,
      textAlign: styleSydney.require.references.phone.textAlign as any,
    }
  });
  return <Document>
    <Page style={styles.container}>
      <View style={{...styles.header,alignItems: 'center',}}>
        {resume.avatar.url && (
          <Image style={styles.imageAva} src={resume.avatar.url} />

        )}
        <View>
          <Text>{resume.personalInfo.firstName && (
            <Text
              style={styles.firstName}>
              {resume.personalInfo.firstName}
            </Text>
          )}
            {resume.personalInfo.lastName && (
              <Text
                style={styles.lastName}>
                {" "}
                {resume.personalInfo.lastName}
              </Text>
            )}</Text>
          {resume.personalInfo.jobTitle && (
            <Text
              style={styles.jobTitle}>
              {resume.personalInfo.jobTitle}
            </Text>
          )}
        </View>

      </View>
      <View style={{ ...styles.header,  }}>
        <View style={styles.headerViewTwo}>
          <View>
            <View style={styles.headerIcon}>
              <Image
                style={styles.icon}
                src="https://i.ibb.co/DYGJf39/account.png"

              />
              {professionalSummarySectionTitle && (
                <Text
                  style={styles.sectionTitles}>
                  {professionalSummarySectionTitle}
                </Text>
              )}

            </View>
            {resume.professionalSummary && (
              <Text
                style={styles.summery}>
                {resume.professionalSummary}
              </Text>
            )}
          </View>
          <View>
            <View style={styles.headerIcon}>
              <Image
                style={styles.icon}
                src="https://i.ibb.co/WGX4jFD/suitcase.png"

              />
              {workExperienceSectionTitle && (
                <Text
                  style={styles.workExperienceStyle}>
                  {workExperienceSectionTitle}
                </Text>
              )}
            </View>

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
                          style={styles.workExperience}>
                          {item.jobTitle},{" "}
                        </Text>
                      )}
                      {item.employer && (
                        <Text
                          style={{
                            ...style.workExperience.employer,
                            textAlign: style.workExperience.employer.textAlign as any,
                          }}>
                          {item.employer},{" "}
                        </Text>
                      )}
                      {item.city && (
                        <Text
                          style={{
                            ...style.workExperience.city,
                            textAlign: style.workExperience.city.textAlign as any,
                          }}>
                          {item.city}{" "}
                        </Text>
                      )}
                    </Text>
                    <Text>
                      <Text
                        style={styles.startMontYear}>
                        {item.startMontYear}
                      </Text>{" "}
                      {item.startMontYear && item.endMontYear && " - "}
                      <Text
                        style={styles.endMontYear}>
                        {item.endMontYear}
                      </Text>
                    </Text>
                    {item.description && (
                      <Text
                        style={styles.description}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                )
              );
            })}
          </View>
          <View>
            <View style={styles.headerIcon}>
              <Image
                style={styles.icon}
                src="https://i.ibb.co/v3s3Y7z/mortarboard.png"

              />
              {educationsSectionTitle && (
                <Text
                  style={styles.educationsStyle}>
                  {educationsSectionTitle}
                </Text>
              )}
            </View>

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
                          style={styles.degree}>
                          {item.degree},{" "}
                        </Text>
                      )}
                      {item.school && (
                        <Text
                          style={styles.school}>
                          {item.school},{" "}
                        </Text>
                      )}
                      {item.city && (
                        <Text
                          style={styles.city}>
                          {item.city}
                        </Text>
                      )}
                    </Text>
                    <Text>
                      <Text
                        style={styles.startMontYearEdu}>
                        {item.startMontYear}
                      </Text>{" "}
                      {item.startMontYear && item.endMontYear && " - "}
                      <Text
                        style={styles.endMontYearEdu}>
                        {item.endMontYear}
                      </Text>
                    </Text>

                    {item.description && (
                      <Text
                        style={styles.eduDes}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                )
              );
            })}
          </View>
          <View>
            <View style={styles.headerIcon}>
              <Image
                style={styles.icon}
                src="https://i.ibb.co/6Hj7JNX/exchange.png"

              />
              {referencesSectionTitle && (
                <Text
                  style={styles.referencesStyle}>
                  {referencesSectionTitle}
                </Text>
              )}
            </View>

            {resume.references.map((item) => {
              return (
                <View key={item._id}>
                  <Text>
                    {item.name && (
                      <Text
                        style={styles.refName}>
                        {item.name},{" "}
                      </Text>
                    )}
                    {item.company && (
                      <Text
                        style={styles.refCom}>
                        {item.company}
                      </Text>
                    )}
                  </Text>
                  <Text>
                    {item.email && (
                      <Text
                        style={styles.refEmail}>
                        {item.email}
                      </Text>
                    )}
                    {item.phone && item.email && "  |  "}
                    {item.phone && (
                      <Text
                        style={styles.refPhone}>
                        {item.phone}
                      </Text>
                    )}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styleCommon.headerDivOne}>
          <View>
            {personalInfoSectionTitle && (
              <Text
                style={{
                  ...style.sectionTitles.personalInfoStyle,
                  textAlign: style.sectionTitles.personalInfoStyle
                    .textAlign as any,
                }}>
                {personalInfoSectionTitle}
              </Text>
            )}

            {" "}
            {resume.personalInfo.address &&
              <Text style={styleCommon.personalInfoLabel}>Address</Text>
            }
            <Text>
              {resume.personalInfo.address && (
                <Text
                  style={{
                    ...style.personalInfo.address,
                    textAlign: style.personalInfo.address.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.address},
                </Text>
              )}
              {resume.personalInfo.city && (
                <Text
                  style={{
                    ...style.personalInfo.city,
                    textAlign: style.personalInfo.city.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.city},
                </Text>
              )}
              {resume.personalInfo.postalCode && (
                <Text
                  style={{
                    ...style.personalInfo.postalCode,
                    textAlign: style.personalInfo.postalCode.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.postalCode},
                </Text>
              )}
              {resume.personalInfo.country && (
                <Text
                  style={{
                    ...style.personalInfo.country,
                    textAlign: style.personalInfo.country.textAlign as any,
                  }}>
                  {" "}
                  {resume.personalInfo.country}
                </Text>
              )}
            </Text>

            {resume.personalInfo.email && (
              <View>
                <Text style={styleCommon.personalInfoLabel}>Email</Text>
                <Text
                  style={{
                    ...style.personalInfo.email,
                    textAlign: style.personalInfo.email.textAlign as any,
                  }}>
                  <Link href={`mailto:${resume.personalInfo.email}`}>
                    {resume.personalInfo.email}
                  </Link>
                </Text>
              </View>
            )}
            {personalInfo.nationality && (
              <>
                <Text style={styleCommon.personalInfoLabel}>Nationality</Text>
                <Text
                  style={{
                    ...style.personalInfo.nationality,
                    textAlign: style.personalInfo.nationality.textAlign as any,
                  }}>
                  {personalInfo.nationality}
                </Text>
              </>
            )}
            {personalInfo.drivingLicense && (
              <>
                <Text style={styleCommon.personalInfoLabel}>DrivingLicense</Text>
                <Text
                  style={{
                    ...style.personalInfo.drivingLicense,
                    textAlign: style.personalInfo.drivingLicense
                      .textAlign as any,
                  }}>
                  {personalInfo.drivingLicense}
                </Text>
              </>
            )}
            {personalInfo.placeOfBirth && (
              <>
                <Text style={styleCommon.personalInfoLabel}>Place Of Birth</Text>
                <Text
                  style={{
                    ...style.personalInfo.placeOfBirth,
                    textAlign: style.personalInfo.placeOfBirth.textAlign as any,
                  }}>
                  {personalInfo.placeOfBirth}
                </Text>
              </>
            )}
            {personalInfo.DateOfBirth && (
              <>
                <Text style={styleCommon.personalInfoLabel}>Date Of Birth</Text>
                <Text
                  style={{
                    ...style.personalInfo.DateOfBirth,
                    textAlign: style.personalInfo.DateOfBirth.textAlign as any,
                  }}>
                  {personalInfo.DateOfBirth}
                </Text>
              </>
            )}

          </View>
          <View>
            {skillSectionTitle && (
              <Text
                style={{
                  ...style.sectionTitles.skillsStyle,
                  textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                  marginTop: "5px",
                }}>
                {skillSectionTitle}
              </Text>
            )}
            <View>
              {resume.skills.map((skill, index) => (
                <View key={index}>
                  <Text
                    style={{
                      ...style.skills.label,
                      textAlign: style.skills.label.textAlign as any,
                    }}>
                    {skill.label}
                  </Text>
                  <View
                    style={{
                      ...styleCommon.bar,
                      width: `${skill.level}%`,
                    }}></View>
                </View>
              ))}
            </View>
          </View>
          <View>
            {languageSectionTitle && (
              <Text
                style={{
                  ...style.sectionTitles.languagesStyle,
                  textAlign: style.sectionTitles.languagesStyle
                    .textAlign as any,
                  marginTop: "5px",
                }}>
                {languageSectionTitle}
              </Text>
            )}
            {resume.languages.map((item) => {
              return (
                item.language && (
                  <View key={item._id}>
                    <Text><Text
                      style={{
                        ...style.languages.language,
                        textAlign: style.languages.language.textAlign as any,
                      }}>
                      {item.language}
                    </Text>{" "}
                      {
                        item.level &&
                        <Text
                          style={{
                            ...style.languages.level,
                            textAlign: style.languages.level.textAlign as any,
                          }}>
                          ({item.level})
                        </Text>
                      }</Text>
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
                {socialProfilesSectionTitle}
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
                      // display: "block",
                    }}
                    href={item.link}
                   >
                    {item.label}
                  </Link>
                )
              );
            })}
          </View>
        </View>
      </View>


    </Page>
  </Document >;
};

export default SydneyPDF;
