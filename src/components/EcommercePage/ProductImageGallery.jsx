// src/components/ProductImageGallery.jsx
import React, { useState } from 'react';

function ProductImageGallery({ images }) {
    const safeImages = Array.isArray(images) ? images : [];
    const [mainImage, setMainImage] = useState(safeImages[0] ?? '');

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {mainImage ? (
                    <img
                        src={mainImage}
                        alt="Product"
                        className="max-w-full max-h-full object-contain"
                    />
                ) : (
                    <div className="text-gray-400">No image available</div>
                )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {safeImages.map((image, index) => (
                    <div
                        key={index}
                        className={`w-24 h-24 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${
                            mainImage === image ? 'border-blue-500' : 'border-transparent'
                        } hover:border-blue-400 transition-all duration-200 flex items-center justify-center`}
                        onClick={() => setMainImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductImageGallery;