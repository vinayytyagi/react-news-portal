import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../store/articlesSlice';

const ArticleItem = ({ article }) => {
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(false); // State to track if article is favorited

    // State to track if article is favorited
    const handleFavourite = () => {
        dispatch(addFavourite(article));
        setIsFavourite(!isFavourite); // Toggle favorite state
    };

    // Function to truncate text to a specified limit
    const truncateText = (text, limit) => {
        const words = text.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
    };

    // Function to open article URL in a new tab on click on card
    const handleCardClick = () => {
        window.open(article.url, '_blank'); // Open article URL in a new tab
    };

    return (
        // Card container with article data and click handler
        <div className="news-article" onClick={handleCardClick}>
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-article-content">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm">{truncateText(article.description, 50)}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the card click event
                            handleFavourite();
                        }}
                        className={`p-1 font-medium hover:bg-yellow-300`}
                    >
                        {isFavourite ? '⭐' : '★'} Favourite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;
