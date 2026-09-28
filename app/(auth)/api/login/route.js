import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import usersList from "../../../../lib/usersData.js";

export async function GET() {
  const data = await usersList;
  if (!data) {
    return NextResponse.json({ status: 404, message: "No users found" });
  } else {
    return NextResponse.json({
      status: 200,
      message: "Users fetched successfully",
      data: data,
    });
  }
}

export async function POST(request) {
  const { email, password } = await request.json();
  const data = await usersList;
  const user = data.find(
    (user) => user.email === email && user.password === password,
  );
  if (!user) {
    return NextResponse.json({
      status: 401,
      message: "Invalid email or password",
    });
  } else {
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    return NextResponse.json({
      status: 200,
      message: "Login successful",
      data: { email: user.email, role: user.role },
      token: token,
    });
  }
}
