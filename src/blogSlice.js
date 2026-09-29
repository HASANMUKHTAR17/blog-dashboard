import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialBlogs } from "./data/blogs";

// Part 5: async thunk that simulates an API call
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (shouldFail = false) => {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // fake 1.5s delay
    if (shouldFail) {
      throw new Error("Failed to load blogs. Please try again.");
    }
    return initialBlogs;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  // Part 2: all required state values
  initialState: {
    blogs: [],
    searchText: "",
    selectedCategory: "All",
    loading: false,
    error: null,
  },
  // Part 3: reducers (each one automatically creates an action)
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((b) => b.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const blog = state.blogs.find((b) => b.id === action.payload);
      if (blog) blog.featured = !blog.featured;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  // Handles the 3 stages of the async call
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBlog, deleteBlog, toggleFeatured, setSearchText, setCategory } = blogSlice.actions;
export default blogSlice.reducer;