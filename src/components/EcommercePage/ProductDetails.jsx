// src/components/ProductDetails.jsx
import React from 'react';

function ProductDetails({ name, price, currency, description, rating, reviews }) {
    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
            <p className="text-4xl font-extrabold text-gray-900 mb-4">
                ${typeof price === 'number' ? price.toFixed(2) : '—'} <span className="text-lg font-medium text-gray-500">{currency ?? ''}</span>
            </p>
            <div className="flex items-center mb-4">
                {/* Star Rating - You can use a dedicated StarRating component or just SVG icons */}
                <div className="flex text-yellow-400">
                    {typeof rating === 'number' ? '★'.repeat(Math.floor(rating)) : ''}
                    {typeof rating === 'number' ? '☆'.repeat(5 - Math.floor(rating)) : ''}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                    {typeof rating === 'number' ? rating.toFixed(1) : '-'}{reviews ? `/${reviews} reviews` : ''}
                </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
    );
}

export default ProductDetails;