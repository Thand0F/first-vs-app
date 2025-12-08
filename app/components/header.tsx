"use client";

import { useCart } from "../../context/cartcontext";
import Link from "next/link";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Clothing Store</h1>

      <nav className="flex items-center gap-6">
        <Link href="/" className="text-lg hover:text-blue-600 transition">
          Home
        </Link>

        <Link href="/products" className="text-lg hover:text-blue-600 transition">
          Products
        </Link>

        {/* Cart Tab + Number Badge */}
        <div className="relative">
          <Link
            href="/cart"
            className="text-lg font-medium hover:text-blue-600 transition"
          >
            Cart
          </Link>

          {cart.length > 0 && (
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
