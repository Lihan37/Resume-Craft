import { RootState } from "../../app/store";

export const selectHistoryLoading = (state: RootState) =>
  state.history.isLoading;
export const selectHistoryError = (state: RootState) => state.history.error;

export const selectHistory = (state: RootState, type: string) =>
  state.history.history.filter((item) => item.type === type);

export const selectAllHistory = (state: RootState) => state.history.history;
