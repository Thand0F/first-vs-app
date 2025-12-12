import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  quantity: Number,
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
