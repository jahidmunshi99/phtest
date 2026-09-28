import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Get token from cookie
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    // 2. No token
    if (!token) {
      return NextResponse.json(
        {
          status: 401,
          message: "Not authenticated",
        },
        {
          status: 401,
        },
      );
    }

    // 3. Verify JWT
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Return user information
    return NextResponse.json({
      status: 200,
      message: "User information retrieved",
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("ME API error:", error);

    return NextResponse.json(
      {
        status: 401,
        message: "Invalid or expired token",
      },
      {
        status: 401,
      },
    );
  }
}
