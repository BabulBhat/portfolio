import { connectToMongo } from "@/app/lib/db";
import { MessageSchema } from "@/app/lib/model/MessageModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await mongoose.connect(connectToMongo);
  const payload = await req.json();
  let success = false;
  const newpayload = {
    fname: payload.fname,
    lname: payload.lname,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
  };

  const messagesave = new MessageSchema(newpayload);
  const result = await messagesave.save();
  if (result) {
    success = true;
  }

  return NextResponse.json({ result, success });
}
