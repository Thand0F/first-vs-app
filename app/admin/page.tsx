"use client";

import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  async function submit() {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Product added!");
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Product Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Price"
        type="number"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
