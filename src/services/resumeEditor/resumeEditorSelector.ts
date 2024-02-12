import { RootState } from "../../app/store";

export const selectResumeEditor = (state: RootState) => state.resumeEditor;

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
  state.resumeEditor.resume.style.theme;

export const selectThemeOptions = (state: RootState) =>
  state.resumeEditor.resume.style.themeOptions;

export const selectResumeSize = (state: RootState) =>
  state.resumeEditor.resume.size;

export const selectZoomIn = (state: RootState) =>
  state.resumeEditor.resume.zoom;

export const selectResume = (state: RootState) => state.resumeEditor.resume;

export const selectResumeID = (state: RootState) =>
  state.resumeEditor.resume._id;

export const selectResumeAvatar = (state: RootState) =>
  state.resumeEditor.resume.avatar;

export const selectSkillLevel = (state: RootState) =>
  state.resumeEditor.resume.style.skillLevel;

export const selectSkillLevelDisabled = (state: RootState) =>
  state.resumeEditor.resume.style.skillLevelDisabled;
