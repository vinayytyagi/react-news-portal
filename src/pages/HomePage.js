import React from 'react';
import ArticleList from '../components/ArticleList';  // Import the ArticleList component

// HomePage functional component
const HomePage = () => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-4">
      <ArticleList />
    </div>
  );
};

export default HomePage;  // Export the HomePage component as the default export
