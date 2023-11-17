import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Payment from "./../../../models/payment";

export async function GET(req) {
  await connectMongoDB();

  try {
    const res = await Payment.find();
    return NextResponse.json({
      status: "success",
      data: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again later",
      },
      { status: 400 }
    );
  }
}
