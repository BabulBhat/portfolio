import mongoose from "mongoose";

const MessageModel = mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    message: String,
  },
  {
    timestamps: true,
  },
);

export const MessageSchema =
  mongoose.models.enquirys || mongoose.model("enquirys", MessageModel);
