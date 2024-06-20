import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articlesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.articles.page);

  // Render pagination buttons for previous and next page
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => dispatch(setPage(page - 1))}
        disabled={page === 1}
        className="p-2 mx-1 bg-gray-200 rounded hover:bg-gray-400 transition ease-in-out 2s"
      >
        Previous
      </button>
      <span className="p-2 mx-1">{page}</span>
      <button
        onClick={() => dispatch(setPage(page + 1))}
        className="p-2 mx-1 bg-gray-200 rounded hover:bg-gray-400 transition ease-in-out 2s"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
