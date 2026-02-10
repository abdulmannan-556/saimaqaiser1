import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, position } = data;

    if (!fullName || !email || !phone || !position) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    // TODO: Save application info and file uploads securely
    console.log("Career application submission:", data);

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
