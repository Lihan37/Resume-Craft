import { RootState } from "../../app/store";

export const selectCoverLetterSize = (state: RootState) =>
  state.coverLetterEditor.coverLetter.size;

export const selectCoverLetterTheme = (state: RootState) =>
  state.coverLetterEditor.coverLetter.style.theme;

export const selectCoverLetterThemeOption = (state: RootState) =>
  state.coverLetterEditor.coverLetter.style.themeOptions;
