import "./globals.css";
import { CartProvider } from "../context/cartcontext";
import Link from "next/link";

export const metadata = {
  title: "Clothing Shop",
  description: "Modern Clothing E-Commerce Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
              <Link href="/" className="text-2xl font-bold">Clothing Shop</Link>

              <div className="flex gap-6 text-lg">
                <Link href="/products" className="hover:underline">Products</Link>
                <Link href="/cart" className="hover:underline">Cart</Link>
              </div>
            </nav>
          </header>

          <main className="max-w-6xl mx-auto p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}