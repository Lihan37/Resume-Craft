import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../services/resume/resumeSlice";
import accordionReducer from "../services/accordion/accordionSlice";
import resumeEditorReducer from "../services/resumeEditor/resumeEditorSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
    accordion: accordionReducer,
    resumeEditor: resumeEditorReducer,
  },
  devTools: !(import.meta.env.MODE == "production"),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
