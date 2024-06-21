import axios from 'axios';  // Import axios for making HTTP requests

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;  // API key for accessing the News API
const BASE_URL = 'https://newsapi.org/v2';   // Base URL of the News API
// const BASE_URL = 'https://api.currentsapi.services/v1/';   // Base URL of the News API

// Define a function to fetch articles from the News API
export const fetchArticles = (category = '', page = 1, query = '') => {
  // Make a GET request to the top-headlines endpoint of the News API
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey: API_KEY,   // Pass the API key as a query parameter
      category, // Specify the category of articles to fetch
      page, // Specify the page number of articles
      pageSize: 13, // Specify the number of articles per page
      country: 'in', // Specify the country for which news is to be fetched (India in this case)
      q: query, // Specify a search query for specific articles
    },
  });
};

