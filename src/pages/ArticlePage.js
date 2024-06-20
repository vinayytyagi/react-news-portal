import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  // Get the article title from the URL params
  const { title } = useParams();

  // Get the article from Redux state using the title
  const article = useSelector((state) =>
    state.articles.items.find((item) => item.title === decodeURIComponent(title))
  );

  // If the article is not found, render a message
  if (!article) {
    return <div className="text-center">Article not found</div>;
  }

  // Render the article details if found
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default ArticlePage;
