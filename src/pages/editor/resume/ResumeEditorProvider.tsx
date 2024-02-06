import { FC, ReactNode, useState } from "react";
import { createContext, useContext } from "react";

interface ResumeEditorContextProps {
  personalInfo: {
    jobTitle: string;
    firstName: string;
    lastName: string;
  };
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

interface ResumeEditorProps {
  children: ReactNode;
}

interface IState {
  jobTitle: string;
  firstName: string;
  lastName: string;
}
const initialState = {
  jobTitle: "Front end Developer",
  firstName: "Satya Ranjon",
  lastName: "Sharma",
};

const ResumeEditorProvider: FC<ResumeEditorProps> = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);

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
