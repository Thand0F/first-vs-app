import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export function middleware(req: any) {
  const token = req.cookies.get("token")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Protect admin routes
    if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Only admin routes protected
};
