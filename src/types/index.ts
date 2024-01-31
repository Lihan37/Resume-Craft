export enum Gap {
  "1D" = "gap-1",
  "2D" = "gap-2",
  "3D" = "gap-3",
  "4D" = "gap-4",
  "5D" = "gap-5",
  "6D" = "gap-6",
  "7D" = "gap-7",
  "8D" = "gap-8",
  "9D" = "gap-9",
  "10D" = "gap-10",
}

export interface TypeOfSingleEmploymentHistory {
  _id: string | number;
  jobTitle: string;
  employer: string;
  startMontYear: string;
  endMontYear: string;
  city: string;
  description: string;
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

export interface RootState {
  resume: {
    isActive: boolean;
  };
}
