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
