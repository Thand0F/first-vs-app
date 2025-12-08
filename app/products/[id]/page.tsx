"use client";

import { products } from "../../data";
import { useCart } from "../../../context/cartcontext";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();

  const numericId = Number(params.id);

  console.log("PARAM ID:", params.id);
  console.log("NUMERIC ID:", numericId);
  console.log("PRODUCTS:", products);
  console.log("LOOKING FOR:", numericId);
  console.log("ALL PRODUCTS:", products);


  const product = products.find((p) => p.id === numericId);

  if (!product) {
    return <p className="text-red-500">Product not found. ID: {params.id}</p>;
  }

  return (
    <div className="mt-10 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded mx-auto"
      />
      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="text-xl mt-2">R{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
