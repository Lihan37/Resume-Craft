import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IResumePersonalInfo,
  TypeOfLanguage,
  TypeOfReference,
  TypeOfSingleEducationHistory,
  TypeOfSingleEmploymentHistory,
  TypeOfSingleSocialWebSite,
  TypeOfSkill,
} from "../../types/resumeEditor";

interface IResumeData {
  id: number;
  type: string;
  template: string | null;
  avatar: string | null;
  personalInfo: IResumePersonalInfo;
  professionalSummary: string;
  workExperience: TypeOfSingleEmploymentHistory[];
  skills: TypeOfSkill[];
  languages: TypeOfLanguage[];
  references: TypeOfReference[];
  educations: TypeOfSingleEducationHistory[];
  socialProfiles: TypeOfSingleSocialWebSite[];
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
    id: 0,
    type: "",
    template: null,
    avatar: null,
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
} = resumeEditorSlice.actions;

export default resumeEditorSlice.reducer;
