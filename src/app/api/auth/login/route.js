import User from "./../../../../models/user";
import { compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectMongoDB from "./../../../../libs/mongodb";

export async function POST(request) {
  await connectMongoDB();
  const { email, password } = await request.json();

  const userExist = await User.findOne({ email }).select("+password");
  const passwordMatch = await compare(password, userExist.password);
  if (!userExist || !passwordMatch) {
    return NextRequest.json(
      {
        status: "fail",
        message: "Invalid Credentials! Please try again.",
      },
      { status: "400" }
    );
  }

  const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  userExist.password = undefined;

  return NextResponse.json(
    {
      status: "success",
      message: "User Logged in",
      token,
      data: userExist,
    },
    { status: "200" }
  );
}
