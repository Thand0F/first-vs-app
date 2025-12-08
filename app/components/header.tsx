"use client";

import { useCart } from "../../context/cartcontext";
import { ShoppingCart } from "lucide-react"; // optional: install lucide-react for icons

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Clothing Store</h1>

      {/* Cart Icon */}
      <div className="relative">
        <ShoppingCart size={28} className="text-gray-800" />

        {/* Cart count badge */}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            {cart.length}
          </span>
        )}
      </div>
    </header>
  );
}
