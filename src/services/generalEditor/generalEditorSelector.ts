import { RootState } from "../../app/store";

export const selectFocusInput = (state: RootState) =>
  state.generalEditor.focus.focusInput;

export const selectFocusSection = (state: RootState) =>
  state.generalEditor.focus.focusSection;
