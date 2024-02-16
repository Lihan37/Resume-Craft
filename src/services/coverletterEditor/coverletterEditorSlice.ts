import { TypeOfStyleText, styleInitialState } from "./../../types/editor";
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
  style: {
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
  };
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
      theme: "",
      themeOptions: [],
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
