import { NextResponse } from "next/server";
import blogsData from "@/data/Data";

export async function GET() {
  return NextResponse.json({ data: blogsData.slice(0, 3) });
}
