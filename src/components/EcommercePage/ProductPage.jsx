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
        'https://static.zara.net/assets/public/9f39/3405/98614b869cfe/95c2fdfc7fed/00085014621-e1/00085014621-e1.jpg?ts=1749121960711&w=750',
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtoZHG79Pk5WCLUV3eZqTA0DS4H61xnkRWMw8xf8xDrNKv81sO5KMZkiCrcaJoevTtzB7zIXani-Mp4UEMyQny1r7ry_cxzfNPHB1yU0_XVxNZsfvFnIzAKoujSYSXEKtsg2E8m5A&usqp=CAc',
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyD2th-16VjkUO0SKHbmsdIWy4mXpbNQmoMZWJjqDRiuDwCS0Wi4B2DGmYUldQf_g_BPSvnd8EWWWYuhlwJUPWIlhWEa6T93YNyitHIpAODV1w-vBl86YVQ02htKBAPeEIBOFW9ac&usqp=CAc',
        'data:image/jpeg;base64,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',
    ],
    colors: [
        { name: 'Cream', hex: '#F0EAD6' },
        { name: 'Olive Green', hex: '#6B8E23' },
        { name: 'Charcoal Grey', hex: '#36454F' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
};

const relatedProductsData = [
    { id: 2, name: "ComfortTech T-Shirt", price: 29.99, image: 'https://www.mumkins.in/cdn/shop/products/boys-t-shirt-bu022039-grey-1.jpg?v=1757572262&width=1800' },
    { id: 3, name: "Casual Joggers", price: 45.00, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYW87Wqlap7IjNXg3Hm3PCAxgETtyve3oIyt1jxs6xMHcl_qbLVlRBfPgGfnMiXxz5Ymzx0xgL0FmjK7Xax-MEqB1OFxumeP6H66FK5KH9yyWmzt1LO0gVYQ&usqp=CAc' },
    { id: 4, name: "Performance Joggers", price: 49.00, image: 'https://nobero.com/cdn/shop/files/Exports-0012_1feb73f7-c086-4930-9ac5-b6acad9a1d79.jpg?v=1759987845&width=940' },
    { id: 5, name: "Essential Shorts", price: 35.00, image: 'data:image/jpeg;base64,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' },
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