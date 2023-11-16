import { NextResponse } from "next/server";
import connectDB from "../../../../../../libs/mongodb";
import MonthlyAudit from "../../../../../../models/monthlyAudit";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const res = await MonthlyAudit.findById(params.billId);
    return NextResponse.json(
      {
        status: "success",
        data: res,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "fail",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
