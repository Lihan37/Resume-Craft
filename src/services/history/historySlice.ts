import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createUserHistory,
  updateHistoryThumbnail,
  updateUserHistory,
  userHistory,
} from "./historyApi";

export interface ISingleUserHistory {
  _id: string | number;
  title: string;
  user: string | number;
  templateId: string | number;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  type: "resume" | "coverletter" | "portfolio";
}

interface IHistory {
  isLoading: boolean;
  error: null | string;
  history: ISingleUserHistory[];
}

const initialState: IHistory = {
  isLoading: false,
  error: null,
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setLoad: (state) => {
      state.isLoading = true;
    },
    changeTitle: (state, action: PayloadAction<ISingleUserHistory>) => {
      state.history.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        createUserHistory.fulfilled,
        (state, action: PayloadAction<ISingleUserHistory>) => {
          state.isLoading = false;
          state.history = [...state.history, action.payload];
        }
      )
      .addCase(createUserHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(userHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = action.payload;
      })
      .addCase(userHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(updateHistoryThumbnail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = state.history.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              thumbnail: {
                ...action.payload.thumbnail,
              },
            };
          }
          return item;
        });
      })
      .addCase(updateUserHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = state.history.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        });
      });
  },
});

export const { setLoad, changeTitle } = historySlice.actions;

export default historySlice.reducer;
