import connectMongoDB from "../../../libs/mongodb";
import User from "./../../../models/user";
import { NextResponse } from "next/server";
import { restrictTo } from "./../../../middleware/authmiddleware";

export async function GET(request) {
  await connectMongoDB();
  restrictTo("admin");

  try {
    const userData = await User.find({ role: { $ne: "admin" } });

    return NextResponse.json(
      {
        status: "success",
        result: userData.length,
        data: {
          userData,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong ! Please try again later",
      },
      { status: 400 }
    );
  }
}
