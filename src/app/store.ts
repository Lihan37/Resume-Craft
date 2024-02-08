import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "../services/accordion/accordionSlice";
import resumeEditorReducer from "../services/resumeEditor/resumeEditorSlice";
import generalEditorReducer from "../services/generalEditor/generalEditorSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    accordion: accordionReducer,
    generalEditor: generalEditorReducer,
    resumeEditor: resumeEditorReducer,
  },
  devTools: !(import.meta.env.MODE == "production"),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
