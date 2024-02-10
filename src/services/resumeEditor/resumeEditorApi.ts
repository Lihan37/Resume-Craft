import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResumeData } from "./resumeEditorSlice";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const createResumeAndUpdate = createAsyncThunk(
  "resumeEditor/CreateResumeAndUpdate",
  async (resumeData: IResumeData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/resume/v1/create`, {
        method: "POST",
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

// export const updateResumeThumbnail = createAsyncThunk(
//   "resumeEditor/updateResumeThumbnail",
//   async (
//     { id, fileData }: { id: string; fileData: FormData },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await fetch(`${baseUrl}/resume/v1/thumbnail/${id}`, {
//         method: "PATCH",
//         body: fileData,
//       });
//       const data = await response.json();

//       return data.thumbnail;
//     } catch (error) {
//       return rejectWithValue(
//         (error as Error).message ||
//           "An error occurred during Update Resume Thumbnail !"
//       );
//     }
//   }
// );
