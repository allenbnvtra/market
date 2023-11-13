import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  await connectMongoDB();

  try {
    await User.findByIdAndUpdate(params.tenantId, {
      active: false,
    });

    return NextResponse.json(
      {
        status: "success",
        data: null,
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: error.message,
      },
      { status: 400 }
    );
  }
}
