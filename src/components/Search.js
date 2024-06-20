import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, setQuery } from '../store/articlesSlice';

const Search = () => {
  // Get the current search query from Redux state
  const query = useSelector((state) => state.articles.query);
  const dispatch = useDispatch();

  // Function to handle search button click
  const handleSearch = () => {
    dispatch(getArticles({ query }));
  };

  // Function to handle input change in the search input field
  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  // Function to trigger search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Render the search input field and search button
  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="e.g. Health"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Trigger search on Enter key press
        className="p-2 border border-gray-300 rounded-l-lg"
      />
      <button onClick={handleSearch} className="px-4 bg-blue-500 text-white rounded-r-lg rounded-l-sm hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default Search;
