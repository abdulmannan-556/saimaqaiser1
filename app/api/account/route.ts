import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/account
 * Handles account opening form submissions
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, address, accountType } = data;

    if (!fullName || !email || !phone || !address || !accountType) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // TODO: Save account opening data to your database
    console.log("New account opening request:", data);

    return NextResponse.json({
      success: true,
      message: "Account request submitted successfully",
    });
  } catch (error) {
    console.error("Account form error:", error);
    return NextResponse.json(
      { error: "Failed to submit account request" },
      { status: 500 }
    );
  }
}
