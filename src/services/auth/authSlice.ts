import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: {
    url: string;
    public_id: string;
  };
}

interface InitialState {
  user: IUser;
  loading: boolean;
  accessToken: string;
}
const initialState: InitialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    avatar: {
      url: "",
      public_id: "",
    },
  },
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
  },
});

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
