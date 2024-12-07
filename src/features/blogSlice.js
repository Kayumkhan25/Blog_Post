import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  page: 1,
  totalPages: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.totalPages = action.payload.totalPages;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const { setLoading, setPosts, setPage } = blogSlice.actions;
export default blogSlice.reducer;
