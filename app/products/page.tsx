"use client";

import Image from "next/image";
import { products } from "../data";
import { useCart } from "../../context/cartcontext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-bold mb-4">R{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
