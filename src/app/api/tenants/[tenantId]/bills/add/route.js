import connectMongoDB from "../../../../../../libs/mongodb";
import { NextResponse } from "next/server";
import MonthlyBill from "./../../../../../../models/monthlyAudit";

export async function POST(request, { params }) {
  await connectMongoDB();

  try {
    const {
      previousBill,
      currentReading,
      previousReading,
      billingPeriodFrom,
      billingPeriodTo,
      totalConsumption,
      currentBill,
      remainingBalance,
      user,
    } = await request.json();

    if (!user) request.body.user = params.tenantId;

    const newBill = await MonthlyBill.create({
      previousBill,
      currentReading,
      previousReading,
      billingPeriodFrom,
      billingPeriodTo,
      totalConsumption,
      currentBill,
      remainingBalance,
      user: request.body.user,
    });

    return NextResponse.json({
      status: "success",
      message: "New user created",
      data: newBill,
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
