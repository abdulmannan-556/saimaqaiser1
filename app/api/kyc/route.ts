import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/kyc
 * Handles KYC (Know Your Customer) form submissions
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, cnic, email, phone, address, incomeRange } = data;

    if (!fullName || !cnic || !email || !phone || !address || !incomeRange) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // TODO: Save KYC info securely to database
    console.log("KYC submission:", data);

    return NextResponse.json({
      success: true,
      message: "KYC submitted successfully",
    });
  } catch (error) {
    console.error("KYC form error:", error);
    return NextResponse.json(
      { error: "Failed to submit KYC" },
      { status: 500 }
    );
  }
}
