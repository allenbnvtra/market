import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Payment from "./../../../../models/payment";

export async function POST(req, { params }) {
  await connectMongoDB();

  try {
    const billId = params.billId;

    const { bill, recieptNo, paymentAmount } = await req.json();
    if (!bill) req.body.bill = billId;

    const res = await Payment.create({
      bill: req.body.bill,
      recieptNo,
      paymentAmount,
    });

    return NextResponse.json({
      status: "success",
      message: "New user created",
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

export async function GET(req, { params }) {
  await connectMongoDB();

  try {
    const res = await Payment.find({ bill: params.billId });
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
