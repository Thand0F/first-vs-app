"use client";
import { useCart } from "../../context/cartcontext";

export default function CheckoutPage() {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <p className="text-gray-700">
        Total items: <strong>{cart.length}</strong>
      </p>

      <p className="mt-4">This is just a demo checkout. You can extend it later.</p>
    </div>
  );
}
