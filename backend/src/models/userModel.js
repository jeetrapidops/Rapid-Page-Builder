import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", User);