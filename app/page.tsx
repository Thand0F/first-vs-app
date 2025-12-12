import Product from "@/models/product";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectDB();
  const products = await Product.find().lean();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 mb-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to ABC CLOTHING SHOP</h1>
        <p className="text-gray-600 mt-2">Discover premium styles and trends.</p>

        <Link
          href="/products"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </div>
      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">ABC Clothing Shop</span>, we believe fashion
          is more than just clothing — it is a form of expression. Our mission is to provide
          high-quality apparel that blends comfort, style, and affordability.  
          <br /><br />
          We are committed to offering a curated selection of trendy pieces designed to elevate your
          wardrobe. Whether you're looking for everyday essentials or standout outfits, we’ve got
          you covered.
        </p>
      </section>

       {/* FOOTER / TRADEMARK */}
      <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} ABC Clothing Shop™ — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
