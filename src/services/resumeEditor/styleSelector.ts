import {
  IEducations,
  ILanguages,
  IReferences,
  ISectionTitles,
  ISkills,
  ISocialProfiles,
  IWorkExperience,
} from "./../../types/resumeEditor";
import { RootState } from "../../app/store";
import { IPersonalInfo, TypeOfResumeStyle } from "../../types/resumeEditor";
import { TypeOfStyleText } from "../../types/editor";

export const selectPersonalInfoStyle = (state: RootState) =>
  state.resumeEditor.resume.style.personalInfo;

export const selectStyleResumeEditor = (
  state: RootState,
  sectionName: keyof TypeOfResumeStyle,
  inputFieldName:
    | keyof IPersonalInfo
    | keyof IWorkExperience
    | keyof ISkills
    | keyof ILanguages
    | keyof IReferences
    | keyof IEducations
    | keyof ISocialProfiles
    | keyof ISectionTitles
): TypeOfStyleText | undefined => {
  const sectionStyle = state.resumeEditor.resume.style[sectionName] as
    | keyof IPersonalInfo
    | keyof IWorkExperience
    | keyof ISkills
    | keyof ILanguages
    | keyof IReferences
    | keyof IEducations
    | keyof ISocialProfiles
    | keyof ISectionTitles;

  if (sectionStyle && typeof sectionStyle === "object") {
    return sectionStyle[inputFieldName];
  }

  return undefined;
};
