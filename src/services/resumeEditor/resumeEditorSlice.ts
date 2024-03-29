import { styleInitialState } from "../../types/editor";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IEducations,
  ILanguages,
  IReferences,
  ISectionTitles,
  ISkills,
  ISocialProfiles,
  IWorkExperience,
  IResumePersonalInfo,
  TypeOfLanguage,
  TypeOfReference,
  TypeOfResumeStyle,
  TypeOfSectionTitle,
  TypeOfSingleEducationHistory,
  TypeOfSingleEmploymentHistory,
  TypeOfSingleSocialWebSite,
  TypeOfSkill,
  IPersonalInfo,
} from "../../types/resumeEditor";
import {
  createResumeAndUpdate,
  getSingleResumeData,
  updateResumeAvatar,
} from "./resumeEditorApi";
import { TypeOfStyleText } from "../../types/editor";

export interface IPayloadChangeStyleResume {
  sectionTitle: keyof TypeOfResumeStyle;
  fieldName:
    | keyof IPersonalInfo
    | keyof IWorkExperience
    | keyof ISkills
    | keyof ILanguages
    | keyof IReferences
    | keyof IEducations
    | keyof ISocialProfiles
    | keyof ISectionTitles;
  value: TypeOfStyleText;
}
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
  avatar: {
    public_id: string;
    url: string;
  };
  historyId: string | number;
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
  size: ISetResumeSize;
  style: TypeOfResumeStyle;
}

interface IResumeEditorState {
  isLoading: boolean;
  isSyncing: boolean;
  error: string | null;
  resume: IResumeData;
}

export const initialState: IResumeEditorState = {
  isLoading: false,
  isSyncing: false,
  error: null,
  resume: {
    _id: "",
    avatar: {
      public_id: "",
      url: "",
    },

    historyId: "",
    templateId: "",
    personalInfo: {
      _id: "",
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
      _id: "",
    },
    zoom: 1,
    size: {
      height: "792px",
      width: "612px",
    },
    style: {
      theme: "",
      themeOptions: [],
      skillLevel: false,
      skillLevelDisabled: false,
      personalInfo: {
        jobTitle: {
          ...styleInitialState,
        },
        firstName: {
          ...styleInitialState,
        },
        lastName: {
          ...styleInitialState,
        },
        email: {
          ...styleInitialState,
        },
        phoneNumber: {
          ...styleInitialState,
        },
        country: {
          ...styleInitialState,
        },
        city: {
          ...styleInitialState,
        },
        address: {
          ...styleInitialState,
        },
        postalCode: {
          ...styleInitialState,
        },
        drivingLicense: {
          ...styleInitialState,
        },
        nationality: {
          ...styleInitialState,
        },
        placeOfBirth: { ...styleInitialState },
        DateOfBirth: { ...styleInitialState },
      },
      workExperience: {
        city: { ...styleInitialState },
        description: { ...styleInitialState },
        employer: { ...styleInitialState },
        endMontYear: { ...styleInitialState },
        jobTitle: { ...styleInitialState },
        startMontYear: { ...styleInitialState },
      },
      skills: {
        label: { ...styleInitialState },
        level: { ...styleInitialState },
      },
      professionalSummary: {
        summery: { ...styleInitialState },
      },
      languages: {
        language: { ...styleInitialState },
        level: { ...styleInitialState },
      },
      references: {
        name: { ...styleInitialState },
        company: { ...styleInitialState },
        phone: { ...styleInitialState },
        email: { ...styleInitialState },
      },
      educations: {
        school: { ...styleInitialState },
        degree: { ...styleInitialState },
        startMontYear: { ...styleInitialState },
        endMontYear: { ...styleInitialState },
        city: { ...styleInitialState },
        description: { ...styleInitialState },
      },
      socialProfiles: {
        label: { ...styleInitialState },
        link: { ...styleInitialState },
      },
      sectionTitles: {
        personalInfoStyle: { ...styleInitialState },
        professionalSummaryStyle: { ...styleInitialState },
        workExperienceStyle: { ...styleInitialState },
        skillsStyle: { ...styleInitialState },
        languagesStyle: { ...styleInitialState },
        referencesStyle: { ...styleInitialState },
        educationsStyle: { ...styleInitialState },
        socialProfilesStyle: { ...styleInitialState },
      },
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
      state.resume.style.theme = action.payload;
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
    changeSkillLevel(state) {
      state.resume.style.skillLevel = !state.resume.style.skillLevel;
    },
    changeStyleResume(state, action: PayloadAction<IPayloadChangeStyleResume>) {
      const { sectionTitle, fieldName, value } = action.payload;
      // Find the section style object
      const sectionStyle = state.resume.style[sectionTitle];

      if (sectionStyle && typeof sectionStyle === "object") {
        if (fieldName in sectionStyle) {
          (sectionStyle as any)[fieldName] = value;
        }
      }
    },
    removeResumeAvatar(state) {
      state.resume.avatar = {
        public_id: "",
        url: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createResumeAndUpdate.pending, (state) => {
        state.isSyncing = true;
        state.error = null;
      })
      .addCase(createResumeAndUpdate.fulfilled, (state) => {
        state.isSyncing = false;
      })
      .addCase(createResumeAndUpdate.rejected, (state, action) => {
        state.isSyncing = false;
        state.error = action.payload as string;
      })
      .addCase(getSingleResumeData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSingleResumeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resume = action.payload.success
          ? action.payload.resume
          : state.resume;
        state.error = !action.payload.success ? action.payload.message : null;
      })
      .addCase(getSingleResumeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateResumeAvatar.fulfilled, (state, action) => {
        state.resume.avatar = action.payload;
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
  changeStyleResume,
  changeSkillLevel,
  removeResumeAvatar,
} = resumeEditorSlice.actions;

export default resumeEditorSlice.reducer;
