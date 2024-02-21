import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResumeData } from "./resumeEditorSlice";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const createResumeAndUpdate = createAsyncThunk(
  "resumeEditor/CreateResumeAndUpdate",
  async (resumeData: IResumeData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/resume/v1/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeData),
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(
        (error as Error).message ||
          "An error occurred during Post or Update Resume"
      );
    }
  }
);

export const getSingleResumeData = createAsyncThunk(
  "resumeEditor/getSingleResumeData",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/resume/v1/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during Get Resume"
      );
    }
  }
);

export const updateResumeAvatar = createAsyncThunk(
  "resumeEditor/updateResumeAvatar",
  async (
    { id, fileData }: { id: string | number; fileData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${baseUrl}/resume/v1/upload/${id}`, {
        method: "PATCH",
        credentials: "include",
        body: fileData,
      });
      const data = await response.json();
      return data.avatar;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message ||
          "An error occurred during Update history Thumbnail !"
      );
    }
  }
);
