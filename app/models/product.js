import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    image_url: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
