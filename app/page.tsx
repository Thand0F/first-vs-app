"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/store.jpg"; // Add your image in the public folder

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Clothing Store
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover the latest styles & trends.
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src={heroImage}
            alt="Clothing Store Hero"
            fill
            className="object-cover"
          />
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button>
          <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Shop Now
          </Link>
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
