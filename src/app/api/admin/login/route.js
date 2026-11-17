import mongoose from "mongoose";
import { connectToMongo } from "@/app/lib/db";
import { LoginSchema } from "@/app/lib/model/LoginModel";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";

const SECRET = new TextEncoder().encode(process.env.NEXT_JWT);

export async function POST(req) {
  const payload = await req.json();
  await mongoose.connect(connectToMongo);
  let token = false;
  let success = false;
  if (payload.login) {
    // When Login
    const credentials = await LoginSchema.findOne({
      username: payload.username
    });

    if (!credentials) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(payload.password, credentials.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    if (credentials) {
      let username = credentials.username;
      token = await new SignJWT({ username }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('2d').sign(SECRET);
      if (token) {
        success = true
      }
    }

  }
  else {
    // When Register
    const hashedPassword = await bcrypt.hash(payload.password, 12)
    const reg = new LoginSchema({
      name: payload.name,
      username: payload.username,
      password: hashedPassword
    });
    const result = await reg.save();
    let username = result.username;
    token = await new SignJWT({ username }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('2d').sign(SECRET);
    if (token) {
      success = true
    }
  }



  return NextResponse.json({ success, token });
}
