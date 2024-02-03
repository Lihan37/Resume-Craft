import { FC, ReactNode, useState } from "react";
import { IResumePersonalInfo } from "../types/resumeEditor";
import { ResumeEditorContext } from "../hooks/useResumeEditor";

interface ResumeEditorProps {
  children: ReactNode;
}

const initialState = {
  jobTitle: "Front end Developer",
  firstName: "Satya Ranjon",
  lastName: "Sharma",
};

const ResumeEditorProvider: FC<ResumeEditorProps> = ({ children }) => {
  const [state, setState] = useState<IResumePersonalInfo>(initialState);

  const handleInput = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ResumeEditorContext.Provider value={{ personalInfo: state, handleInput }}>
      {children}
    </ResumeEditorContext.Provider>
  );
};

export default ResumeEditorProvider;
