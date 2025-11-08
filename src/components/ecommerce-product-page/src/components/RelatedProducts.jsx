// src/components/RelatedProducts.jsx
import React from 'react';

function RelatedProducts({ products }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col items-center text-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-lg mb-3 shadow-sm"
                        />
                        <h3 className="text-md font-semibold text-gray-700">{product.name}</h3>
                        <p className="text-lg font-bold text-gray-900 mt-1">${product.price.toFixed(2)}</p>
                        {/* Optional: Add a quick view or add to cart button */}
                        <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">View Product</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;