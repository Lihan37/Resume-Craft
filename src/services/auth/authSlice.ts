import { createSlice } from "@reduxjs/toolkit";

interface Plan {
  type: string;
  downloadlimite: number;
  checkoutDate: number;
  timeLimite: number;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  avatar: {
    url: string;
    public_id: string;
  };
  role: string;
  socialLogin: boolean;
  plan: Plan;
}

const initialUserData: UserData = {
  _id: "",
  name: "",
  email: "",
  avatar: {
    url: "",
    public_id: "",
  },
  role: "",
  socialLogin: false,
  plan: {
    type: "",
    downloadlimite: 0,
    checkoutDate: 0,
    timeLimite: 0,
  },
};
interface InitialState {
  user: UserData;
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
    role: "",
    socialLogin: false,
    plan: {
      type: "",
      downloadlimite: 0,
      checkoutDate: 0,
      timeLimite: 0,
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
        _id: action.payload.user?._id || "",
        name: action.payload.user?.name || "",
        email: action.payload.user?.email || "",
        role: action.payload.user?.role || "",
        socialLogin: action.payload.user?.socialLogin || false,
        avatar: {
          url: action.payload.user?.avatar?.url || "",
          public_id: action.payload.user?.avatar?.public_id || "",
        },
        plan: {
          type: action.payload.user?.plan?.type || "",
          downloadlimite: action.payload.user?.plan?.downloadlimite || 0,
          checkoutDate: action.payload.user?.plan?.checkoutDate || 0,
          timeLimite: action.payload.user?.plan?.timeLimite || 0,
        },
      };
      state.accessToken = action.payload?.accessToken || state.accessToken;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    removeUser(state) {
      state.user = initialUserData;
    },
    changeUser(state, action) {
      state.user = {
        ...state.user,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { setUser, setLoading, removeUser, changeUser } =
  authSlice.actions;

export default authSlice.reducer;
