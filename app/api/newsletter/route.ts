import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: Save email to newsletter database
    console.log("New newsletter subscription:", email);

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
