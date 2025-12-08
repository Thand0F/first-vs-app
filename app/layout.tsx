import "./globals.css";
import { CartProvider } from "../context/cartcontext";
import Link from "next/link";
import Header from "./components/header";

export const metadata = {
  title: "Clothing Shop",
  description: "Modern Clothing E-Commerce Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header>
          {/* Header with cart icon */}
          <Header />
          </header>
          <main className="max-w-6xl mx-auto p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}