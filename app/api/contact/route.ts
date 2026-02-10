import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // TODO: Integrate with email service or DB
    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
