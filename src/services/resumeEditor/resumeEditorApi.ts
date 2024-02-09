import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResumeData } from "./resumeEditorSlice";

export const createResumeAndUpdate = createAsyncThunk(
  "resumeEditor/CreateResumeAndUpdate",
  async (resumeData: IResumeData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/resume/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeData),
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during login"
      );
    }
  }
);

export const getSingleResumeData = createAsyncThunk(
  "resumeEditor/getSingleResumeData",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8000/resume/v1/${id}`, {
        method: "GET",
      });
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "An error occurred during login"
      );
    }
  }
);

// const fetchUserById = createAsyncThunk(
//   "users/fetchById",
//   // if you type your function argument here
//   async (userId: number) => {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`);
//     return await response.json();
//   }
// );
