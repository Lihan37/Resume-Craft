import { RootState } from "../../app/store";

export const selectIsActive = (state: RootState) => state.resume.isActive;
