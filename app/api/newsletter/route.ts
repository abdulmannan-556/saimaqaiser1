import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/newsletter
 * Handles newsletter subscription form submissions
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TODO: Save email to your newsletter database
    console.log("New newsletter subscription:", email);

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error) {
    console.error("Newsletter form error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
