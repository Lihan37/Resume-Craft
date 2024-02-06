import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../services/resume/resumeSlice";
import accordionReducer from "../services/accordion/accordionSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
    accordion: accordionReducer,
  },
  devTools: !(import.meta.env.MODE == "production"),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
