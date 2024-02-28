import { RootState } from "../../app/store";

export const selectHistoryLoading = (state: RootState) =>
  state.history.isLoading;

export const selectHistoryError = (state: RootState) => state.history.error;

export const selectHistory = (state: RootState, type: string) =>
  state.history.history.filter((item) => item.type === type);

export const selectSingleHistory = (state: RootState, id: string | number) =>
  state.history.history.find((item) => item.templateId === id);

export const selectAllHistory = (state: RootState) => state.history.history;
