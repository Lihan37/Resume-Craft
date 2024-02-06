import { createContext, useContext } from "react";
import { IResumePersonalInfo } from "../types/resumeEditor";

interface ResumeEditorContextProps {
  personalInfo: IResumePersonalInfo;
  handleInput?: (name: string, value: string) => void;
}

export const ResumeEditorContext = createContext<
  ResumeEditorContextProps | undefined
>(undefined);

export const useResumeEditor = () => {
  const context = useContext(ResumeEditorContext);
  if (!context) {
    throw new Error(
      "useResumeEditor must be used within an ResumeEditorProvider"
    );
  }
  return context;
};
