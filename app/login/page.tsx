"use client";

import { useState } from "react";

export default function LoginPage() {
  const [data, setData] = useState({ username: "", password: "" });

  async function login() {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) window.location.href = "/";
    else alert("Invalid login");
  }

  return (
    <div className="p-10 max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input className="border p-2 w-full mb-3"
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <input className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button className="bg-green-600 text-white px-6 py-2 rounded w-full"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}
