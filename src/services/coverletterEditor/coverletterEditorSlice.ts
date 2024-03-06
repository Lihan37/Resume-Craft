import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOfStyleText, styleInitialState } from "./../../types/editor";
import {
  createCoverLetterAndUpdate,
  getSingleCoverLetterData,
} from "./coverletterEditorApi";

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
export interface ICoverLetter {
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
    zoom: 1,
    size: {
      height: "792px",
      width: "612px",
    },
    style: {
      theme: "",
      themeOptions: [""],
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
    changeZoom(state, action) {
      state.coverLetter.zoom = action.payload;
    },
    changeStyleCovetLetter(state, action: PayloadAction<IPayloadChangeStyle>) {
      const { fieldName, value } = action.payload;
      state.coverLetter.style = {
        ...state.coverLetter.style,
        [fieldName]: value,
      };
    },
    changeTemplate(state, action) {
      state.coverLetter = { ...state.coverLetter, ...action.payload };
    },
    setZoomIn(state, action) {
      state.coverLetter.zoom = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createCoverLetterAndUpdate.pending, (state) => {
        state.isSyncing = true;
        state.error = null;
      })
      .addCase(createCoverLetterAndUpdate.fulfilled, (state) => {
        state.isSyncing = false;
      })
      .addCase(createCoverLetterAndUpdate.rejected, (state, action) => {
        state.isSyncing = false;
        state.error = action.payload as string;
      })
      .addCase(getSingleCoverLetterData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSingleCoverLetterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coverLetter = action.payload.success
          ? action.payload.coverLetter
          : state.coverLetter;
        state.error = action.payload.success ? null : action.payload.message;
      })
      .addCase(getSingleCoverLetterData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setValue,
  changeTheme,
  changeSize,
  changeStyleCovetLetter,
  changeTemplate,
  changeZoom,
  setZoomIn,
} = coverLetterEditorSlice.actions;

export default coverLetterEditorSlice.reducer;
