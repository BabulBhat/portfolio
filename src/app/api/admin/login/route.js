import mongoose from "mongoose";
import { connectToMongo } from "@/app/lib/db";
import { LoginSchema } from "@/app/lib/model/LoginModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const payload = await req.json();
  await mongoose.connect(connectToMongo);
  let success = false;
  const credentials = await LoginSchema.findOne({
    username: payload.username,
    password: payload.password,
  });
  console.log(payload.password);
  
  
  if (!credentials) {
    return NextResponse.json({ error: "USERNAME & PASSWORD INCORRECT." });
  }
  return NextResponse.json({success, credentials});
}
