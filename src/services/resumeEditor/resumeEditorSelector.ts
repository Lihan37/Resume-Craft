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

export const selectSectionTitles = (state: RootState) =>
  state.resumeEditor.resume.sectionTitles;

export const selectTheme = (state: RootState) =>
  state.resumeEditor.resume.theme;

export const selectThemeOptions = (state: RootState) =>
  state.resumeEditor.resume.themeOptions;

export const selectResumeSize = (state: RootState) =>
  state.resumeEditor.resume.size;

export const selectZoomIn = (state: RootState) =>
  state.resumeEditor.resume.zoom;

export const selectResume = (state: RootState) => state.resumeEditor.resume;
