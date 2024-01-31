import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../services/resume/resumeSlice";

const store = configureStore({
  reducer: { resume: resumeReducer },
  devTools: !(import.meta.env.MODE == "production"),
});

export default store;
