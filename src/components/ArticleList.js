import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../store/articlesSlice';
import ArticleItem from './ArticleItem';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import Search from './Search';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { items, status, error, category, page } = useSelector((state) => state.articles);

  // Fetch articles based on category and page when category or page changes
  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [category, page, dispatch]);

  // Render loading message if articles are being fetched
  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  // Render error message if fetching articles failed
  if (status === 'failed') {
    return <div className="text-center">Error: {error}</div>;
  }

  // Render article list, search, category filter, pagination, and individual articles
  return (
    <div>
      <Search />
      <CategoryFilter />
      <div className="news-articles">
        {items.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ArticleList;
