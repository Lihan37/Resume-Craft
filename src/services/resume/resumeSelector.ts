import { RootState } from "../../types";

export const selectIsActive = (state: RootState) => state.resume.isActive;
