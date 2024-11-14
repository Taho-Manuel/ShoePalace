import { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.onSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
            SALE
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">${product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </p>
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-sm font-medium">Select Size:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 rounded border ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'border-gray-300 hover:border-black'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`w-full mt-4 py-2 rounded transition-colors ${
            selectedSize
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-200 cursor-not-allowed'
          }`}
          onClick={() => {
            if (selectedSize) {
              addToCart({ ...product, quantity: 1, selectedSize });
            }
          }}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}