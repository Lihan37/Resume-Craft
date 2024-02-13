import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccordionState {
  activeId: number[];
}

const initialState: AccordionState = {
  activeId: [1],
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    setActiveId(state, action: PayloadAction<number>) {
      state.activeId = [...state.activeId, action.payload];
    },
    removeActiveId(state, action: PayloadAction<number>) {
      state.activeId = state.activeId.filter((id) => id !== action.payload);
    },
  },
});

export const { setActiveId, removeActiveId } = accordionSlice.actions;
export default accordionSlice.reducer;
