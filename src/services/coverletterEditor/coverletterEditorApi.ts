import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICoverLetter } from "./coverletterEditorSlice";

const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const createCoverLetterAndUpdate = createAsyncThunk(
  "coverLetterEditor/createCoverLetterAndUpdate",
  async (coverLetterData: ICoverLetter, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/coverLetter/v1/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coverLetterData),
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(
        (error as Error).message ||
          "An error occurred during Post or Update CoverLetter"
      );
    }
  }
);

export const getSingleCoverLetterData = createAsyncThunk(
  "coverLetterEditor/getSingleCoverLetterData",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/coverLetter/v1/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during Get CoverLetter"
      );
    }
  }
);
