import Link from "next/link";
import { products } from "./data";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">R{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
