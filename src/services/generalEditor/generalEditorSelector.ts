import { RootState } from "../../app/store";

export const selectTextStyle = (state: RootState) =>
  state.generalEditor.textStyle;
