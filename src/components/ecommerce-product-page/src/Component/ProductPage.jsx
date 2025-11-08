// src/components/ProductPage.jsx
import React, { useState } from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';
import ProductOptions from './ProductOptions';
import RelatedProducts from './RelatedProducts';

const productData = {
    id: 1,
    name: "Premium ComfortTech Hoodie",
    price: 59.99,
    currency: "USD",
    description: "Experience unparalleled comfort with our signature Made from sustainable blend organic cotton recycled polyester, a relaxed fit and a soft, brushed interior.",
    rating: 4.8,
    reviews: 125,
    images: [
        '/placeholders/hoodie-front.png', // Replace with actual image paths
        '/placeholders/hoodie-side.png',
        '/placeholders/hoodie-detail.png',
        '/placeholders/hoodie-back.png',
    ],
    colors: [
        { name: 'Cream', hex: '#F0EAD6' },
        { name: 'Olive Green', hex: '#6B8E23' },
        { name: 'Charcoal Grey', hex: '#36454F' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
};

const relatedProductsData = [
    { id: 2, name: "ComfortTech T-Shirt", price: 29.99, image: '/placeholders/tshirt.png' },
    { id: 3, name: "Casual Joggers", price: 45.00, image: '/placeholders/joggers-green.png' },
    { id: 4, name: "Performance Joggers", price: 49.00, image: '/placeholders/joggers-tan.png' },
    { id: 5, name: "Essential Shorts", price: 35.00, image: '/placeholders/shorts.png' },
];

function ProductPage() {
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
    const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        console.log({
            product: productData.name,
            color: selectedColor.name,
            size: selectedSize,
            quantity: quantity,
            price: productData.price * quantity,
        });
        alert(`Added ${quantity} of ${productData.name} (${selectedColor.name}, ${selectedSize}) to cart!`);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-8">
                {/* Image Gallery Section */}
                <div className="w-full md:w-1/2">
                    <ProductImageGallery images={productData.images} />
                </div>

                {/* Product Info & Options Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                        <ProductDetails
                            name={productData.name}
                            price={productData.price}
                            currency={productData.currency}
                            description={productData.description}
                            rating={productData.rating}
                            reviews={productData.reviews}
                        />
                        <ProductOptions
                            colors={productData.colors}
                            sizes={productData.sizes}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Add to Cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.5 13 5.373 13h12.254c.873 0 1.633-1.154.757-1.928l-1.358-5.43a.997.997 0 00-.01-.042L14.77 3H15a1 1 0 100-2H3zm7 11a1 1 0 100 2h1a1 1 0 100-2h-1zm-.5 3a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM7 15a1 1 0 100 2h1a1 1 0 100-2H7z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-12">
                <RelatedProducts products={relatedProductsData} />
            </div>
        </div>
    );
}

export default ProductPage;