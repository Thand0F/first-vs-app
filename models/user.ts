import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: false },
  password: { type: String, required: true },
  role: { type: String, default: "user" }, // "admin" or "user"
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
