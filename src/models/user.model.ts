import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
  password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
