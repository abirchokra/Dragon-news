import React from 'react';
import { Link } from 'react-router-dom';


const NewsCard = ({ singleNews }) => {
    
    const {
        author,
        title,
        thumbnail_url,
        details,
        rating,
        total_view,
        others_info,
    } = singleNews;

    return (

        <div className="card bg-base-100 shadow-xl mb-4 p-4">
            {/* Card Header */}
            <div className="flex items-center space-x-3 mb-4">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full "
                />
                <div>
                    <h3 className="font-semibold">{author.name}</h3>
                    <p className="text-sm text-gray-500">{author.published_date}</p>
                </div>
            </div>

            {/* Card Content */}
            <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
            <img
                src={thumbnail_url}
                alt="Article Thumbnail"
                className="w-full h-80 object-cover object-top rounded-md mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
                {details.slice(0, 100)}...
                <Link to={`/news/${singleNews._id}`} className="text-blue-500 ml-2">Read More</Link>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.round(rating.number) ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.373 2.454a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.187l-3.373 2.454c-.784.57-1.838-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.636 8.382c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                        </svg>
                    ))}
                    <span className="ml-2 text-sm">{rating.number}</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded ml-2">
                        {rating.badge}
                    </span>
                </div>

                {/* View Count */}
                <div className="flex items-center space-x-1 text-gray-500">
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 3a7 7 0 00-7 7 7 7 0 0014 0 7 7 0 00-7-7zm0 12a5 5 0 100-10 5 5 0 000 10z" />
                    </svg>
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
