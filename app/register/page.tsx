"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  async function submit() {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Registered successfully!");
      window.location.href = "/login";
    } else {
      alert("Failed to register");
    }
  }

  return (
    <div className="p-10 max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <input
        type="password"
        className="border p-2 w-full mb-3"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
}
