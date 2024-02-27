import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseUrl}/blog/v1/all?page=${page}&perPage=6`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during get blogs"
      );
    }
  }
);
