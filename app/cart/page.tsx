"use client";
import { useCart } from "../../context/cartcontext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

   // Calculate total amount
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0)
    return <p>Your cart is empty.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <span className="product-name w-1/2">{item.name}</span>
          <span className="product-price w-1/4 text-center">R{item.price}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}

        {/* Cart Total */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold">R{total}</span>
          </div>

      <Link href="/checkout">
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
