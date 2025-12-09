"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/store.jpg";
import { products } from "./data";
import { useCart } from "../context/cartcontext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Hero Banner"
          fill
          priority
          className="object-cover brightness-75"
        />

        {/* Text overlay */}
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-md">
            Elevate Your Style
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Shop premium clothing curated with the latest fashion trends.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              href="about"
              className="bg-white/90 hover:bg-white text-gray-800 px-8 py-3 rounded-xl text-lg font-semibold transition shadow-lg"
            >
              Browse Items
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">Clothing Shop</span>, we believe fashion
          is more than just clothing — it is a form of expression. Our mission is to provide
          high-quality apparel that blends comfort, style, and affordability.  
          <br /><br />
          We are committed to offering a curated selection of trendy pieces designed to elevate your
          wardrobe. Whether you're looking for everyday essentials or standout outfits, we’ve got
          you covered.
        </p>
      </section>

      {/* FEATURED PRODUCTS FROM DATA */}
      <section id="featured-products" className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Products
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-xl font-bold mt-3">R{product.price}</p>

              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

/* ---- COMPONENTS ---- */

function CollectionCard({ img, title, desc }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      <Image
        src={img}
        alt={title}
        width={500}
        height={350}
        className="object-cover h-56 w-full"
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
