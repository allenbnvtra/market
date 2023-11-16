import connectMongoDB from "./../../../../../libs/mongodb";
import MonthlyBill from "./../../../../../models/monthlyAudit";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectMongoDB();

  try {
    const tenantId = params.tenantId;
    const res = await MonthlyBill.find({ user: tenantId });
    return NextResponse.json(
      {
        status: "success",
        data: res,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "fail",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
