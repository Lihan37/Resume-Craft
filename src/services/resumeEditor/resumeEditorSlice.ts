import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IResumePersonalInfo,
  TypeOfLanguage,
  TypeOfReference,
  TypeOfSectionTitle,
  TypeOfSingleEducationHistory,
  TypeOfSingleEmploymentHistory,
  TypeOfSingleSocialWebSite,
  TypeOfSkill,
} from "../../types/resumeEditor";
import { createResumeAndUpdate } from "./resumeEditorApi";

interface ISetSectionTitlesPayload {
  name: keyof TypeOfSectionTitle;
  value: string;
}
export interface ISetResumeSize {
  height: string;
  width: string;
}
export interface IResumeData {
  _id: string | number;
  templateId: string;
  avatar: string;
  personalInfo: IResumePersonalInfo;
  professionalSummary: string;
  workExperience: TypeOfSingleEmploymentHistory[];
  skills: TypeOfSkill[];
  languages: TypeOfLanguage[];
  references: TypeOfReference[];
  educations: TypeOfSingleEducationHistory[];
  socialProfiles: TypeOfSingleSocialWebSite[];
  sectionTitles: TypeOfSectionTitle;
  zoom: number;
  theme: string;
  themeOptions: string[];
  size: ISetResumeSize;
}

interface IResumeEditorState {
  isLoading: boolean;
  isSyncing: boolean;
  error: string | null;
  resume: IResumeData;
}

const initialState: IResumeEditorState = {
  isLoading: false,
  isSyncing: false,
  error: null,
  resume: {
    _id: "",
    templateId: "",
    avatar: "",
    personalInfo: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      drivingLicense: "",
      nationality: "",
      placeOfBirth: "",
      DateOfBirth: "",
    },
    professionalSummary: "",
    workExperience: [],
    skills: [],
    languages: [],
    references: [],
    educations: [],
    socialProfiles: [],
    sectionTitles: {
      personalInfo: "Personal Details",
      professionalSummary: "Professional Summary",
      workExperience: "Employment",
      skills: "Skills",
      languages: "Languages",
      references: "References",
      educations: "Education",
      socialProfiles: "Websites & Social",
    },
    zoom: 0.7,
    theme: "",
    themeOptions: [],
    size: {
      height: "1190.14px",
      width: "852px",
    },
  },
};

const resumeEditorSlice = createSlice({
  name: "resumeEditor",
  initialState,
  reducers: {
    setResumeEditorLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setResumeEditorSyncing(state, action: PayloadAction<boolean>) {
      state.isSyncing = action.payload;
    },
    setResume(state, action: PayloadAction<IResumeData>) {
      state.resume = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setWorkExperience(
      state,
      action: PayloadAction<TypeOfSingleEmploymentHistory[]>
    ) {
      state.resume.workExperience = action.payload;
    },
    setEducation(state, action: PayloadAction<TypeOfSingleEducationHistory[]>) {
      state.resume.educations = action.payload;
    },
    setSkills(state, action: PayloadAction<TypeOfSkill[]>) {
      state.resume.skills = action.payload;
    },
    setLanguage(state, action: PayloadAction<TypeOfLanguage[]>) {
      state.resume.languages = action.payload;
    },
    setReference(state, action: PayloadAction<TypeOfReference[]>) {
      state.resume.references = action.payload;
    },
    setSocialProfile(
      state,
      action: PayloadAction<TypeOfSingleSocialWebSite[]>
    ) {
      state.resume.socialProfiles = action.payload;
    },
    setPersonalInfo(state, action: PayloadAction<IResumePersonalInfo>) {
      state.resume.personalInfo = action.payload;
    },
    setProfessionalSummary(state, action) {
      state.resume.professionalSummary = action.payload;
    },
    setSectionTitles(state, action: PayloadAction<ISetSectionTitlesPayload>) {
      state.resume.sectionTitles = {
        ...state.resume.sectionTitles,
        [action.payload.name]: action.payload.value,
      };
    },
    setResumeTheme(state, action) {
      state.resume.theme = action.payload;
    },
    setResumeSize(state, action: PayloadAction<ISetResumeSize>) {
      state.resume.size = action.payload;
    },
    setZoomIn(state, action) {
      state.resume.zoom = action.payload;
    },
    changeTemplate(state, action) {
      state.resume = { ...state.resume, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createResumeAndUpdate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createResumeAndUpdate.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createResumeAndUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setResumeEditorLoading,
  setResumeEditorSyncing,
  setResume,
  setError,
  setWorkExperience,
  setEducation,
  setSkills,
  setReference,
  setLanguage,
  setSocialProfile,
  setPersonalInfo,
  setProfessionalSummary,
  setSectionTitles,
  setResumeTheme,
  setResumeSize,
  setZoomIn,
  changeTemplate,
} = resumeEditorSlice.actions;

export default resumeEditorSlice.reducer;
