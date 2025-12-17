// src/components/ProductOptions.jsx
import React from 'react';

function ProductOptions({
    colors,
    sizes,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    quantity,
    setQuantity,
}) {
    return (
        <div className="space-y-6">
            {/* Color Selection */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Color</h3>
                <div className="flex gap-3">
                    {colors.map((color) => (
                        <div
                            key={color.name}
                            className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                                selectedColor.name === color.name ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => setSelectedColor(color)}
                            title={color.name}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Size Selection */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            type="button"
                            key={size}
                            className={`px-4 py-2 rounded-md border-2 transition-all duration-200
                                ${selectedSize === size
                                    ? 'bg-blue-700 text-white border-blue-700'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selector */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded-md w-32">
                    <button
                        type="button"
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
                    >
                        -
                    </button>
                    <span className="flex-grow text-center py-2 text-lg font-medium">
                        {quantity}
                    </span>
                    <button
                        type="button"
                        onClick={() => setQuantity(prev => prev + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductOptions;