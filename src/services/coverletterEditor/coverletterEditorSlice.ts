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
    templateId: "sydney01",
    fullName: "Ranjon Sharma",
    JobTitle: "Frontend Developer",
    address: "Lalbag Road Rangpur , Rangpur, 5400, Bangladesh",
    email: "satyaranjonofficial@gmail.com",
    phoneNumber: "01746958640",
    companyName: "Southtech",
    managerName: "Jone Don",
    details:
      "I am writing to express my interest in the Frontend Developer position at Southtech, as advertised. With a strong background in frontend development and a passion for creating user-friendly interfaces, I am excited about the opportunity to contribute to your team and help Southtech achieve its goals.During my career, I have gained extensive experience in frontend technologies such as HTML, CSS, and JavaScript, as well as frameworks like React and Angular. I have successfully delivered numerous projects where I collaborated closely with designers and backend developers to create seamless user experiences. My attention to detail and problem-solving skills have allowed me to overcome challenges and deliver high-quality solutions within tight deadlines.One of my recent projects involved revamping the user interface of a web application for a client in the e-commerce sector. By implementing responsive design principles and optimizing performance, we were able to significantly improve user engagement and conversion rates. This experience not only honed my technical skills but also strengthened my ability to communicate effectively and work collaboratively within a team.Furthermore, I am committed to staying updated with the latest advancements in frontend development. Whether it's attending workshops, participating in online courses, or exploring emerging technologies, I am dedicated to continuously improving my skills and adapting to industry trends.",
    zoom: 0.7,
    size: {
      height: "1190.14px",
      width: "852px",
    },
    style: {
      theme: "#232323",
      themeOptions: ["#232323", "#172F53", "#361146", "#160A45", "#324739"],
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
        state.coverLetter = action.payload.coverLetter;
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
} = coverLetterEditorSlice.actions;

export default coverLetterEditorSlice.reducer;
