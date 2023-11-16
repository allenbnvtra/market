import connectDatabase from "./../../../../libs/mongodb";
import User from "./../../../../models/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request, next) {
  await connectDatabase();

  try {
    const { name, email, password, stallName, stallNumber } =
      await request.json();

    // Check if user already exist
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return NextResponse.json(
        {
          status: "fail",
          message: "User already exist. Please try to user other email.",
        },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
      stallName,
      stallNumber,
    });

    newUser.password = undefined;

    return NextResponse.json({
      status: "success",
      message: "New user created",
      data: newUser,
    });
  } catch (error) {
    console.log("Error while new user registration. Please try again");

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong ! Please try again later",
      },
      { status: 400 }
    );
  }
}
