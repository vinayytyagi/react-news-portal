import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/articlesSlice';

// Define the categories for the filter buttons
const categories = ['Business', 'Technology', 'Health', 'Science', 'Sports'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.articles.category);

  return (
    // Flex container to center align and add margin
    <div className="flex justify-center my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`p-2 mx-3 rounded ${category === cat ? 'bg-blue-500 text-white hover:bg-blue-500' : 'bg-gray-200 hover:bg-gray-400 transition ease-in-out 2s bg-blue-500'}`}
          onClick={() => dispatch(setCategory(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
