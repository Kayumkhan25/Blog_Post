import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice'; // Import the blog slice

const store = configureStore({
  reducer: {
    blog: blogReducer, // Register blog reducer here
  },
});

export default store;
