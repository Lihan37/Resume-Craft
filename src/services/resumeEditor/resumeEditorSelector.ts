import { RootState } from "../../app/store";

export const selectWorkExperience = (state: RootState) =>
  state.resumeEditor.resume.workExperience;

export const selectEducation = (state: RootState) =>
  state.resumeEditor.resume.educations;

export const selectReference = (state: RootState) =>
  state.resumeEditor.resume.references;

export const selectLanguage = (state: RootState) =>
  state.resumeEditor.resume.languages;

export const selectSocialProfile = (state: RootState) =>
  state.resumeEditor.resume.socialProfiles;

export const selectSkills = (state: RootState) =>
  state.resumeEditor.resume.skills;

export const selectPersonalInfo = (state: RootState) =>
  state.resumeEditor.resume.personalInfo;

export const selectProfessionalSummary = (state: RootState) =>
  state.resumeEditor.resume.professionalSummary;
