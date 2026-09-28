import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import usersList from "../../../../lib/usersData.js";

export async function GET() {
  const data = await usersList;

  if (!data) {
    return NextResponse.json(
      {
        status: 404,
        message: "No users found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    status: 200,
    message: "Users fetched successfully",
    data,
  });
}

export async function POST(request) {
  try {
    // 1. Get login information
    const { email, password } = await request.json();

    // 2. Get users
    const data = await usersList;

    // 3. Find user
    const user = data.find(
      (user) => user.email === email && user.password === password,
    );

    // 4. User not found
    if (!user) {
      return NextResponse.json(
        {
          status: 401,
          message: "Invalid email or password",
        },
        {
          status: 401,
        },
      );
    }

    // 5. Create JWT
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    // 6. Get cookie store
    const cookieStore = await cookies();

    // 7. Save JWT in HttpOnly cookie
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    // 8. Send user information
    return NextResponse.json({
      status: 200,
      message: "Login successful",
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
