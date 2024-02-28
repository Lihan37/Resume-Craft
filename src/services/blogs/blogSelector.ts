import { RootState } from "../../app/store";

export const selectBlogs = (state: RootState) => state.blog;

export const selectSingleBlog = (state: RootState, id: string) =>
  state.blog.blogs.find((item) => item._id === id);
