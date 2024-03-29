import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "../services/accordion/accordionSlice";
import resumeEditorReducer from "../services/resumeEditor/resumeEditorSlice";
import generalEditorReducer from "../services/generalEditor/generalEditorSlice";
import { useDispatch } from "react-redux";
import historyReducer from "../services/history/historySlice";
import apiSlice from "../services/api/api";
import coverletterEditorReducer from "../services/coverletterEditor/coverletterEditorSlice";
import authReducer from "../services/auth/authSlice";
import blogReducer from "../services/blogs/blogSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    accordion: accordionReducer,
    generalEditor: generalEditorReducer,
    resumeEditor: resumeEditorReducer,
    coverLetterEditor: coverletterEditorReducer,
    history: historyReducer,
    auth: authReducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: !(import.meta.env.MODE == "production"),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
