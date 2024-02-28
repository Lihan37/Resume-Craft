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
import styleMadrid from "./MadridStyle";
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
import { resume } from "../resume";
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
export interface IMadrid {
    resume: IResumeData;
}

const MadridPDF: React.FC<IMadrid> = ({ }) => {
    const style = styleMadrid.require;
    const styleCommon = styleMadrid.common;
    const skillLevelHide = resume.style.skillLevel;

    const styles = StyleSheet.create({
        container: styleMadrid.common.container,
        header: {
            display: "flex",
            flexDirection: 'row',
            gap: "15px",
            // padding: "0px 24px 10px 0px",
            backgroundColor: style.theme,
        },
        headerDivOne: {
            width: "213.3px",

        },
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
            ...styleCommon.margin,
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
            <Page style={styleCommon.container}>
                {/*  header  */}
                <View
                    style={styles.header}>
                    {resume.avatar.url && (
                        <View style={styles.headerDivOne}>
                            <Image

                                src={resume.avatar.url}

                            />
                        </View>
                    )}
                    <View
                        style={{
                            ...styleCommon.headerDivTwo,
                            padding: !resume.avatar.url
                                ? "10px 40px 10px 40px"
                                : "10px 0px 0px 0px",
                        }}>
                        {(personalInfo.firstName || personalInfo.lastName) && (
                            <Text>
                                {personalInfo.firstName && (
                                    <Text
                                        style={{
                                            ...style.personalInfo.firstName,
                                            textAlign: style.personalInfo.firstName.textAlign as any,
                                        }}>
                                        {personalInfo.firstName}
                                    </Text>
                                )}{" "}
                                {personalInfo.lastName && (
                                    <Text
                                        style={{
                                            ...style.personalInfo.lastName,
                                            textAlign: style.personalInfo.lastName.textAlign as any,
                                        }}>
                                        {personalInfo.lastName}
                                    </Text>
                                )}
                            </Text>
                        )}

                        {personalInfo.jobTitle && (
                            <Text
                                style={{
                                    ...style.personalInfo.jobTitle,
                                    textAlign: style.personalInfo.jobTitle.textAlign as any,
                                }}>
                                {personalInfo.jobTitle}
                            </Text>
                        )}
                        {(personalInfo.email ||
                            personalInfo.phoneNumber ||
                            personalInfo.nationality) && (
                                <Text>
                                    {personalInfo.email && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.email,
                                                textAlign: style.personalInfo.email.textAlign as any,
                                            }}>
                                            {personalInfo.email}
                                        </Text>
                                    )}
                                    {personalInfo.email && personalInfo.phoneNumber && (
                                        <Text> || </Text>
                                    )}
                                    {personalInfo.phoneNumber && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.phoneNumber,
                                                textAlign: style.personalInfo.phoneNumber
                                                    .textAlign as any,
                                            }}>
                                            {personalInfo.phoneNumber}
                                        </Text>
                                    )}
                                    {personalInfo.phoneNumber && personalInfo.nationality && (
                                        <Text> || </Text>
                                    )}
                                    {!personalInfo.phoneNumber &&
                                        personalInfo.email &&
                                        personalInfo.nationality && <Text> || </Text>}
                                    {personalInfo.nationality && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.phoneNumber,
                                                textAlign: style.personalInfo.phoneNumber
                                                    .textAlign as any,
                                            }}>
                                            {personalInfo.nationality}
                                        </Text>
                                    )}
                                </Text>
                            )}
                    </View>
                </View>
                {/* end of header */}

                {/*  body Section Start  */}
                <View style={styleCommon.body}>

                    {/* personal info div */}
                    <View>
                        {personalInfoSectionTitle && (
                            <Text style={{
                                ...style.sectionTitles.personalInfoStyle,
                                textAlign: style.sectionTitles.personalInfoStyle
                                    .textAlign as any,
                                ...styleCommon.sectionTitle,
                                ...styleCommon.margin,
                            }}>
                                {personalInfoSectionTitle}:
                            </Text>
                        )}
                        {(resume.personalInfo.postalCode ||
                            resume.personalInfo.address ||
                            resume?.personalInfo.country ||
                            resume?.personalInfo.city) && (
                                <Text>
                                    {resume.personalInfo.postalCode && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.postalCode,
                                                textAlign: style.personalInfo.postalCode.textAlign as any,
                                            }}>
                                            {resume.personalInfo.postalCode},
                                        </Text>
                                    )}
                                    {resume.personalInfo.address && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.address,
                                                textAlign: style.personalInfo.address.textAlign as any,
                                            }}>
                                            {resume.personalInfo.address},
                                        </Text>
                                    )}
                                    {resume.personalInfo.city && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.city,
                                                textAlign: style.personalInfo.city.textAlign as any,
                                            }}>
                                            {resume.personalInfo.city},
                                        </Text>
                                    )}
                                    {resume.personalInfo.country && (
                                        <Text
                                            style={{
                                                ...style.personalInfo.country,
                                                textAlign: style.personalInfo.city.textAlign as any,
                                            }}>
                                            {resume.personalInfo.country}
                                        </Text>
                                    )}
                                </Text>
                            )}

                        {personalInfo.drivingLicense && (
                            <>
                                <Text
                                    style={{
                                        ...style.personalInfo.drivingLicense,
                                        textAlign: style.personalInfo.drivingLicense
                                            .textAlign as any,
                                    }}>
                                    Driving-License: {personalInfo.drivingLicense}
                                </Text>
                            </>
                        )}
                        {(personalInfo.placeOfBirth || personalInfo.DateOfBirth) && (
                            <Text>
                                {personalInfo.placeOfBirth && (
                                    <Text
                                        style={{
                                            ...style.personalInfo.placeOfBirth,
                                            textAlign: style.personalInfo.placeOfBirth
                                                .textAlign as any,
                                        }}>
                                        {personalInfo.placeOfBirth}
                                    </Text>
                                )}
                                {personalInfo.placeOfBirth && personalInfo.DateOfBirth && (
                                    <Text> - </Text>
                                )}
                                {personalInfo.DateOfBirth && (
                                    <Text
                                        style={{
                                            ...style.personalInfo.DateOfBirth,
                                            textAlign: style.personalInfo.DateOfBirth
                                                .textAlign as any,
                                        }}>
                                        ({personalInfo.DateOfBirth})
                                    </Text>
                                )}
                            </Text>
                        )}
                    </View>
                    {/* end of personal info div */}

                    {/* professional summary div */}
                    <View>
                        {professionalSummarySectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.professionalSummaryStyle,
                                    textAlign: style.sectionTitles.professionalSummaryStyle
                                        .textAlign as any,
                                    ...styleCommon.sectionTitle,
                                    ...styleCommon.margin,
                                }}>
                                {professionalSummarySectionTitle}:
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
                    </View>
                    {/* end of professional summary div */}

                    {/* education div */}
                    <View>
                        {educationsSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.educationsStyle,
                                    textAlign: style.sectionTitles.educationsStyle
                                        .textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
                                }}>
                                {educationsSectionTitle}:
                            </Text>
                        )}
                        {resume.educations.length > 1 && (
                            <View style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                {resume.educations.map((item) => {
                                    return (
                                        (item.city ||
                                            item.description ||
                                            item.school ||
                                            item.degree ||
                                            item.startMontYear ||
                                            item.endMontYear) && (
                                            <View style={{ width: "40%" }} key={item._id}>
                                                <Text>
                                                    {item.degree && (
                                                        <Text
                                                            style={{
                                                                ...style.educations.degree,
                                                                textAlign: style.educations.degree
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.degree},{" "}
                                                        </Text>
                                                    )}
                                                    {item.school && (
                                                        <Text
                                                            style={{
                                                                ...style.educations.school,
                                                                textAlign: style.educations.school
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.school},{" "}
                                                        </Text>
                                                    )}
                                                    {item.city && (
                                                        <Text
                                                            style={{
                                                                ...style.educations.city,
                                                                textAlign: style.educations.city
                                                                    .textAlign as any,
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
                                                    </Text>{" "}
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
                            </View>
                        )}
                        {resume.educations.length <= 1 && (
                            <View>
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
                                                                textAlign: style.educations.degree
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.degree},{" "}
                                                        </Text>
                                                    )}
                                                    {item.school && (
                                                        <Text
                                                            style={{
                                                                ...style.educations.school,
                                                                textAlign: style.educations.school
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.school},{" "}
                                                        </Text>
                                                    )}
                                                    {item.city && (
                                                        <Text
                                                            style={{
                                                                ...style.educations.city,
                                                                textAlign: style.educations.city
                                                                    .textAlign as any,
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
                                                    </Text>{" "}
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
                            </View>
                        )}
                    </View>
                    {/* end of education div */}

                    {/* work experience div */}
                    <View>
                        {workExperienceSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.workExperienceStyle,
                                    textAlign: style.sectionTitles.workExperienceStyle
                                        .textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
                                }}>
                                {workExperienceSectionTitle}:
                            </Text>
                        )}
                        {resume.workExperience.length > 1 && (
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    flexWrap: "wrap",
                                    gap: "15px",
                                }}>
                                {resume.workExperience.map((item) => {
                                    return (
                                        (item.city ||
                                            item.description ||
                                            item.employer ||
                                            item.jobTitle ||
                                            item.startMontYear ||
                                            item.endMontYear) && (
                                            <View style={{ width: "40%" }} key={item._id}>
                                                <Text>
                                                    {item.jobTitle && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.jobTitle,
                                                                textAlign: style.workExperience.jobTitle
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.jobTitle},{" "}
                                                        </Text>
                                                    )}
                                                    {item.employer && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.employer,
                                                                textAlign: style.workExperience.employer
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.employer},{" "}
                                                        </Text>
                                                    )}
                                                    {item.city && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.city,
                                                                textAlign: style.workExperience.city
                                                                    .textAlign as any,
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
                                                    </Text>{" "}
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
                            </View>
                        )}
                        {resume.workExperience.length <= 1 && (
                            <View>
                                {resume.workExperience.map((item) => {
                                    return (
                                        (item.city ||
                                            item.description ||
                                            item.employer ||
                                            item.jobTitle ||
                                            item.startMontYear ||
                                            item.endMontYear) && (
                                            <View key={item._id}>
                                                <Text>
                                                    {item.jobTitle && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.jobTitle,
                                                                textAlign: style.workExperience.jobTitle
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.jobTitle},{" "}
                                                        </Text>
                                                    )}
                                                    {item.employer && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.employer,
                                                                textAlign: style.workExperience.employer
                                                                    .textAlign as any,
                                                            }}>
                                                            {item.employer},{" "}
                                                        </Text>
                                                    )}
                                                    {item.city && (
                                                        <Text
                                                            style={{
                                                                ...style.workExperience.city,
                                                                textAlign: style.workExperience.city
                                                                    .textAlign as any,
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
                                                    </Text>{" "}
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
                            </View>
                        )}
                    </View>
                    {/* end of work experience div */}

                    {/* skills div */}
                    <View>
                        {skillSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.skillsStyle,
                                    textAlign: style.sectionTitles.skillsStyle.textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
                                }}>
                                {skillSectionTitle} :
                            </Text>
                        )}
                        <View style={{ display: "flex", gap: "8px", flexDirection: 'row', flexWrap: "wrap" }}>
                            {resume.skills.map((item) => {
                                return (
                                    item.label && (
                                        <View
                                            style={{ marginBottom: "6px", width: "10%" }}
                                            key={item._id}>
                                            <Text
                                                style={{
                                                    ...style.skills.label,
                                                    textAlign: style.skills.label.textAlign as any,

                                                }}>
                                                {item.label}
                                            </Text>
                                            {!skillLevelHide && (
                                                <View style={styles.skillsLevelContainer}>
                                                    {createArrayUpToNumber(item.level / 20).map((i) => (
                                                        <View
                                                            key={i}
                                                            style={styles.skillsLevel}></View>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                    )
                                );
                            })}
                        </View>
                    </View>
                    {/* end of skills div */}

                    {/* languages div */}
                    <View style={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                        {languageSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.languagesStyle,
                                    textAlign: style.sectionTitles.languagesStyle
                                        .textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
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
                                        </Text>{" "}
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
                    {/* end of languages div */}

                    {/* social profile div */}
                    <div style={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                        {socialProfilesSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.socialProfilesStyle,
                                    textAlign: style.sectionTitles.socialProfilesStyle
                                        .textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
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
                                        href={item.link}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            );
                        })}
                    </div>
                    {/* end of social profile div */}

                    {/* references div */}
                    <View>
                        {referencesSectionTitle && (
                            <Text
                                style={{
                                    ...style.sectionTitles.referencesStyle,
                                    textAlign: style.sectionTitles.referencesStyle
                                        .textAlign as any,
                                    ...styleCommon.margin,
                                    ...styleCommon.sectionTitle,
                                }}>
                                {referencesSectionTitle}:
                            </Text>
                        )}
                        {resume.references.map((item) => {
                            return (
                                (item.name || item.company || item.email || item.phone) && (
                                    <View key={item._id}>
                                        <Text>
                                            {item.name && (
                                                <Text
                                                    style={{
                                                        ...style.references.name,
                                                        textAlign: style.references.name.textAlign as any,
                                                    }}>
                                                    {item.name}
                                                </Text>
                                            )}
                                            {item.name && item.company && <Text>{" - "}</Text>}
                                            {item.company && (
                                                <Text
                                                    style={{
                                                        ...style.references.company,
                                                        textAlign: style.references.company
                                                            .textAlign as any,
                                                    }}>
                                                    {item.company}
                                                </Text>
                                            )}
                                            {item.company && item.email && <Text>{" - "}</Text>}

                                            {item.email && (
                                                <Text
                                                    style={{
                                                        ...style.references.company,
                                                        textAlign: style.references.company
                                                            .textAlign as any,
                                                    }}>
                                                    {item.email}
                                                </Text>
                                            )}
                                            {item.email && item.phone && <Text>{" - "} </Text>}
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
                                )
                            );
                        })}
                    </View>
                </View>

            </Page>
        </Document>
    );

};

export default MadridPDF;
