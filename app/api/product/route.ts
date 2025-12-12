import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();

  const token = req.headers.get("cookie")?.split("token=")[1];
  const decoded: any = jwt.verify(token!, process.env.JWT_SECRET!);

  if (decoded.role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  const { name, price, image } = await req.json();

  const product = await Product.create({ name, price, image });

  return NextResponse.json(product);
}
