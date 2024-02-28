import { createSlice } from "@reduxjs/toolkit";
import { deleteBlog, getAllBlogs } from "./blogApi";

interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: {
    url: string;
    public_id: string;
  };
}

interface IImage {
  public_id: string;
  url: string;
}

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  user: IUser;
  image: IImage;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface InitialState {
  blogs: IBlog[];
  loading: boolean;
  total: number;
  page: number;
  error: string | null;
}
const initialState: InitialState = {
  blogs: [],
  loading: false,
  total: 0,
  page: 0,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.blogs;
        state.total = action.payload.total;
        state.page = action.payload.page;
      })
      .addCase(getAllBlogs.rejected, (state) => {
        state.loading = false;
        state.error = "Something wrong";
      })
      .addCase(deleteBlog.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        const filterData = state.blogs.filter(
          (item) => item._id !== action.payload.id
        );
        state.blogs = action.payload.success ? filterData : state.blogs;
        state.error = action.payload.success ? null : "some thing wrong";
      })
      .addCase(deleteBlog.rejected, (state) => {
        state.error = "some thing wrong";
      });
  },
});

// export const {} = blogSlice.actions;

export default blogSlice.reducer;
