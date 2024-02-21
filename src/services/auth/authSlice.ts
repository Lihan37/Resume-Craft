import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar: {
    url: string;
    public_id: string;
  };
}

interface InitialState {
  user: IUser | null;
  loading: boolean;
  accessToken: string;
}
const initialState: InitialState = {
  user: null,
  accessToken: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = {
        _id: action.payload.user._id,
        name: action.payload.user.name,
        email: action.payload.user.email,
        role: action.payload.user.role,
        avatar: {
          url: action.payload.user?.avatar?.url || "",
          public_id: action.payload.user?.avatar?.public_id || "",
        },
      };
      state.accessToken = action.payload.accessToken;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, removeUser } = authSlice.actions;

export default authSlice.reducer;
