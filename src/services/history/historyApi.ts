import apiSlice from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISingleUserHistory } from "./historySlice";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const userHistory = createAsyncThunk(
  "history/userHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/history/v1`, {
        method: "GET",
      });
      const data = await response.json();
      return data.history;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during get History"
      );
    }
  }
);

export const createUserHistory = createAsyncThunk(
  "history/createHistory",
  async (historyData: ISingleUserHistory, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/history/v1/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(historyData),
      });
      const data = await response.json();

      return data.history;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during Create History"
      );
    }
  }
);

export const updateUserHistory = createAsyncThunk(
  "history/updateUserHistory",
  async (historyData: ISingleUserHistory, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/history/v1/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(historyData),
      });
      const data = await response.json();

      return data.history;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during Update History"
      );
    }
  }
);

export const updateHistoryThumbnail = createAsyncThunk(
  "history/updateHistoryThumbnail",
  async (
    { id, fileData }: { id: string | number; fileData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${baseUrl}/history/v1/upload/${id}`, {
        method: "PATCH",
        body: fileData,
      });
      const data = await response.json();

      return data.thumbnail;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message ||
          "An error occurred during Update history Thumbnail !"
      );
    }
  }
);

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllHistory: builder.query({
      query: () => `/history/v1`,
    }),
  }),
});

export const { useGetAllHistoryQuery } = taskApi;
