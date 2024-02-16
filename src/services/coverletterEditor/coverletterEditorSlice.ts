import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOfStyleText, styleInitialState } from "./../../types/editor";

export interface ICoverLetterStyle {
  theme: string;
  themeOptions: string[];
  fullName: TypeOfStyleText;
  JobTitle: TypeOfStyleText;
  address: TypeOfStyleText;
  email: TypeOfStyleText;
  phoneNumber: TypeOfStyleText;
  companyName: TypeOfStyleText;
  managerName: TypeOfStyleText;
  details: TypeOfStyleText;
}

export interface IPayloadChangeStyle {
  fieldName: keyof ICoverLetterStyle;
  value: TypeOfStyleText;
}
interface ICoverLetter {
  _id: string | number;
  historyId: string | number;
  templateId: string;
  fullName: string;
  JobTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  managerName: string;
  details: string;
  zoom: number;
  size: {
    height: string;
    width: string;
  };
  style: ICoverLetterStyle;
}

interface ICoverLetterEditorState {
  isLoading: boolean;
  isSyncing: boolean;
  error: string | null;
  coverLetter: ICoverLetter;
}

export const initialState: ICoverLetterEditorState = {
  isLoading: false,
  isSyncing: false,
  error: null,
  coverLetter: {
    _id: "",
    historyId: "",
    templateId: "",
    fullName: "",
    JobTitle: "",
    address: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    managerName: "",
    details: "",
    zoom: 0.7,
    size: {
      height: "1190.14px",
      width: "852px",
    },
    style: {
      theme: "#27dd2a",
      themeOptions: ["#ca4949", "#27dd2a"],
      fullName: { ...styleInitialState },
      JobTitle: { ...styleInitialState },
      address: { ...styleInitialState },
      email: { ...styleInitialState },
      phoneNumber: { ...styleInitialState },
      companyName: { ...styleInitialState },
      managerName: { ...styleInitialState },
      details: { ...styleInitialState },
    },
  },
};

const coverLetterEditorSlice = createSlice({
  name: "coverLetterEditor",
  initialState,
  reducers: {
    setValue(state, action) {
      state.coverLetter = {
        ...state.coverLetter,
        [action.payload.name]: action.payload.value,
      };
    },
    changeTheme(state, action) {
      state.coverLetter.style.theme = action.payload;
    },
    changeSize(state, action) {
      state.coverLetter.size = action.payload;
    },
    changeStyleCovetLetter(state, action: PayloadAction<IPayloadChangeStyle>) {
      const { fieldName, value } = action.payload;
      state.coverLetter.style = {
        ...state.coverLetter.style,
        [fieldName]: value,
      };
    },
  },
});

export const { setValue, changeTheme, changeSize, changeStyleCovetLetter } =
  coverLetterEditorSlice.actions;

export default coverLetterEditorSlice.reducer;
