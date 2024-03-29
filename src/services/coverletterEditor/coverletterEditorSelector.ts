import { RootState } from "../../app/store";

export const selectCoverLetterEditor = (state: RootState) =>
  state.coverLetterEditor;
export const selectCoverLetterEditorError = (state: RootState) =>
  state.coverLetterEditor.error;

export const selectCoverLetter = (state: RootState) =>
  state.coverLetterEditor.coverLetter;

export const selectCoverLetterZoom = (state: RootState) =>
  state.coverLetterEditor.coverLetter.zoom;

export const selectCoverLetterSize = (state: RootState) =>
  state.coverLetterEditor.coverLetter.size;

export const selectCoverLetterTheme = (state: RootState) =>
  state.coverLetterEditor.coverLetter.style.theme;

export const selectCoverLetterThemeOption = (state: RootState) =>
  state.coverLetterEditor.coverLetter.style.themeOptions;
