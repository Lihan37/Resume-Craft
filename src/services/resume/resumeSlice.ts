import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    changeIsActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});
export const { changeIsActive } = resumeSlice.actions;

export default resumeSlice.reducer;
