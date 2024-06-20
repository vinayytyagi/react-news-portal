import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../services/api';

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async ({ category, page, query }) => {
    const response = await fetchArticles(category, page, query);
    const filteredArticles = response.data.articles.filter(article => article.urlToImage); // Filter out removed articles
    return filteredArticles;
  }
);

// Create a slice for managing articles state
const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [], // List of articles
    favourites: JSON.parse(localStorage.getItem('favourites')) || [], // Array of favourite articles
    status: 'idle', // Current status of fetching articles
    error: null, // Error message if fetching articles fails
    category: '', // Selected category for filtering articles
    page: 1, // Current page number for pagination
    query: '', // Add query to initial state
  },
  reducers: {
    // Reducer to set the selected category
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    // Reducer to set the current page number
    setPage: (state, action) => {
      state.page = action.payload;
    },
    // Reducer to set the search query
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    // Reducer to add an article to favourites
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
      // Update local storage with the updated favourites array
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state when fetching articles
      .addCase(getArticles.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled state when fetching articles successfully
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      // Handle rejected state when fetching articles fails
      .addCase(getArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export action creators from the articles slice
export const { setCategory, setPage, setQuery, addFavourite } = articlesSlice.actions;

// Export the articles reducer
export default articlesSlice.reducer;
