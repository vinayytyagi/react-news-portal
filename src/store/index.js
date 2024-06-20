import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';  // Import the articles reducer from articlesSlice file

// Configure the Redux store with the articles reducer
const store = configureStore({
  reducer: {
    articles: articlesReducer,  // Add the articles reducer to the store
  },
});

export default store;  // Export the configured Redux store
