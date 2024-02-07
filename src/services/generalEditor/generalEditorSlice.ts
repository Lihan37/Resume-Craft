import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITextStyle {
  isActive: boolean;
  fontFamily: string;
  fontWidth: string;
  color: string;
  size: string;
}
export interface ITextStylePayload {
  name: keyof ITextStyle;
  value: string;
}
interface IGeneralEditorState {
  textStyle: ITextStyle;
}

const initialState: IGeneralEditorState = {
  textStyle: {
    isActive: false,
    fontFamily: "",
    fontWidth: "",
    color: "",
    size: "",
  },
};

const generalEditorSlice = createSlice({
  name: "generalEditor",
  initialState,
  reducers: {
    setTextStyle(state, action: PayloadAction<ITextStylePayload>) {
      state.textStyle = {
        ...state.textStyle,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { setTextStyle } = generalEditorSlice.actions;

export default generalEditorSlice.reducer;
