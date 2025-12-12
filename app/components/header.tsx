import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let user = null;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      user = typeof decoded === "string" ? null : decoded;
    } catch {
      user = null;
    }
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <Link href="/" className="text-2xl font-bold">ABC</Link>

      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart 🛒</Link>

        {!user && (
          <>
            <Link href="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
            <Link href="/register" className="text-black-600 font-semibold">
              Register
            </Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link href="/admin" className="text-red-600 font-semibold">
            Admin Panel
          </Link>
        )}

        {user && (
          <Link href="/logout" className="text-gray-600 font-semibold">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
