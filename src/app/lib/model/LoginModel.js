import mongoose from "mongoose";

const LoginModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
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
  mongoose.models.loginadmins || mongoose.model("loginadmins", LoginModel);
