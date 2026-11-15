import mongoose from "mongoose";

const LoginModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export const LoginSchema =
  mongoose.models.adminlogin || mongoose.model("adminlogin", LoginModel);
