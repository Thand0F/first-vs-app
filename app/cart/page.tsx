"use client";
import { useCart } from "../../context/cartcontext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

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
          <span>{item.name}</span>
          <span>R{item.price}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <Link href="/checkout">
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
