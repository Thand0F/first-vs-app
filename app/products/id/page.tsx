import { products } from "../data";
import { useCart } from "../../../context/cartcontext";

interface Props {
  params: { id: string };
}

export default function ProductDetails({ params }: Props) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        className="w-full max-w-md h-96 object-cover rounded"
        alt={product.name}
      />

      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-2xl font-bold mt-4">R{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
