import { RootState } from "../../app/store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
