export interface IResumePersonalInfo {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  DateOfBirth: string;
  _id: string;
}

export interface TypeOfSingleEmploymentHistory {
  _id: string | number;
  city: string;
  description: string;
  employer: string;
  endMontYear: string;
  jobTitle: string;
  startMontYear: string;
}
export interface TypeOfSingleEducationHistory {
  _id: string | number;
  school: string;
  degree: string;
  startMontYear: string;
  endMontYear: string;
  city: string;
  description: string;
}
export interface TypeOfSingleSocialWebSite {
  _id: string | number;
  label: string;
  link: string;
}
export interface TypeOfSkill {
  _id: string | number;
  label: string;
  level: number;
}
export interface TypeOfLanguage {
  _id: string | number;
  language: string;
  level: string;
}
export interface TypeOfReference {
  _id: string | number;
  name: string;
  company: string;
  phone: string;
  email: string;
}
export interface TypeOfSectionTitle {
  personalInfo: string;
  professionalSummary: string;
  workExperience: string;
  skills: string;
  languages: string;
  references: string;
  educations: string;
  socialProfiles: string;
  _id: string;
}

export interface TypeOfStyleText {
  color: string;
  fontFamily: string;
  fontWidth: number;
  size: string;
  textAlign: string;
}
export interface TypeOfResumeStyle {
  theme: string;
  skillLevel: boolean;
  skillLevelDisabled: boolean;
  themeOptions: string[];
  personalInfo: IPersonalInfo;
  workExperience: IWorkExperience;
  professionalSummary: { summery: TypeOfStyleText };
  skills: ISkills;
  languages: ILanguages;
  references: IReferences;
  educations: IEducations;
  socialProfiles: ISocialProfiles;
  sectionTitles: ISectionTitles;
}

export interface IPersonalInfo {
  jobTitle: TypeOfStyleText;
  firstName: TypeOfStyleText;
  lastName: TypeOfStyleText;
  email: TypeOfStyleText;
  phoneNumber: TypeOfStyleText;
  country: TypeOfStyleText;
  city: TypeOfStyleText;
  address: TypeOfStyleText;
  postalCode: TypeOfStyleText;
  drivingLicense: TypeOfStyleText;
  nationality: TypeOfStyleText;
  placeOfBirth: TypeOfStyleText;
  DateOfBirth: TypeOfStyleText;
}
export interface IWorkExperience {
  city: TypeOfStyleText;
  description: TypeOfStyleText;
  employer: TypeOfStyleText;
  endMontYear: TypeOfStyleText;
  jobTitle: TypeOfStyleText;
  startMontYear: TypeOfStyleText;
}
export interface ISkills {
  label: TypeOfStyleText;
  level: TypeOfStyleText;
}
export interface ILanguages {
  language: TypeOfStyleText;
  level: TypeOfStyleText;
}
export interface IReferences {
  name: TypeOfStyleText;
  company: TypeOfStyleText;
  phone: TypeOfStyleText;
  email: TypeOfStyleText;
}
export interface IEducations {
  school: TypeOfStyleText;
  degree: TypeOfStyleText;
  startMontYear: TypeOfStyleText;
  endMontYear: TypeOfStyleText;
  city: TypeOfStyleText;
  description: TypeOfStyleText;
}
export interface ISocialProfiles {
  label: TypeOfStyleText;
  link: TypeOfStyleText;
}
export interface ISectionTitles {
  personalInfoStyle: TypeOfStyleText;
  professionalSummaryStyle: TypeOfStyleText;
  workExperienceStyle: TypeOfStyleText;
  skillsStyle: TypeOfStyleText;
  languagesStyle: TypeOfStyleText;
  referencesStyle: TypeOfStyleText;
  educationsStyle: TypeOfStyleText;
  socialProfilesStyle: TypeOfStyleText;
}
