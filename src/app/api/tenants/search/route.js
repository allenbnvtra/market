import connectMongoDB from "./../../../../libs/mongodb";
import User from "./../../../../models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongoDB();

  const res = await User.find({ role: { $ne: "admin" } });

  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  const filtered = res.filter((tenant) => {
    return tenant.name.toLowerCase().includes(name.toLowerCase());
  });

  return NextResponse.json(filtered);
}
