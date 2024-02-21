import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await signOut(auth);
    await fetch(`${baseUrl}/auth/v1/logout`, {
      method: "GET",
      credentials: "include",
    });
  } catch (error) {
    console.log(error);
  }
});
