import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req: Request) {
  await connectDB();
  const { email, username, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    email,
    username,
    password: hashedPassword,
    role: "user",
  });

  return NextResponse.json({ message: "Registered" });
}
