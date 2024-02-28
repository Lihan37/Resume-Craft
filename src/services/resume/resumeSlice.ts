// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const createResumeAndUpdate = createAsyncThunk(
//   "resume/CreateResumeAndUpdate",
//   async (resumeData, { rejectWithValue }) => {
//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(resumeData),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(
//         (error as Error).message || "An error occurred during login"
//       );
//     }
//   }
// );

// interface AuthState {
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createResumeAndUpdate.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createResumeAndUpdate.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(createResumeAndUpdate.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default authSlice.reducer;
