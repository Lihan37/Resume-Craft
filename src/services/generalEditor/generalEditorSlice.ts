import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOfStyleText } from "../../types/resumeEditor";

export interface ITextStylePayload {
  name: keyof TypeOfStyleText;
  value: string;
}

export interface IFocus {
  focusInput: string;
  focusSection: string;
}
interface IGeneralEditorState {
  focus: IFocus;
  textStyle: TypeOfStyleText;
}

const initialState: IGeneralEditorState = {
  focus: {
    focusInput: "jobTitle",
    focusSection: "personalInfo",
  },
  textStyle: {
    color: "",
    fontFamily: "",
    fontWeight: 0,
    fontSize: "",
    textAlign: "",
  },
};

const generalEditorSlice = createSlice({
  name: "generalEditor",
  initialState,
  reducers: {
    setTextStyle(state, action: PayloadAction<TypeOfStyleText>) {
      state.textStyle = action.payload;
    },
    setFocus(state, action: PayloadAction<IFocus>) {
      state.focus = action.payload;
    },
  },
});

export const { setTextStyle, setFocus } = generalEditorSlice.actions;

export default generalEditorSlice.reducer;
