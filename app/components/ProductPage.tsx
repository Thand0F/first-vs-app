"use client";

import Image from "next/image";
import { useCart } from "../../context/cartcontext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
};

type Props = {
  product: Product;
};

export default function ProductPage({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full text-center">
        {/* Product Image */}
        <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        {product.description && (
          <p className="text-gray-600 mb-4">{product.description}</p>
        )}
        <p className="text-xl font-semibold mb-6">R{product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
