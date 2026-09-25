"use client";

import bcrypt from "bcrypt";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import usersInfo from "../../lib/usersData";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const passwordSaltRounds = 10; // Number of salt rounds for bcrypt
    const hashPassword = (password) => {
      const salt = bcrypt.genSaltSync(passwordSaltRounds);
      return bcrypt.hashSync(password, salt);
    };
    console.log("Register data:", data);
    const newUser = {
      name: data.name,
      email: data.email,
      password: hashPassword(data.password),
    };
    if (usersInfo.some((user) => user.email === newUser.email)) {
      alert("Email already exists. Please use a different email.");
      return;
    }
    if (usersInfo.some((user) => user.name === newUser.name)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
    if (newUser.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(newUser.name)) {
      alert("Username can only contain letters, numbers, and underscores.");
      return;
    }
    if (!/[A-Z]/.test(newUser.password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(newUser.password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(newUser.password)) {
      alert("Password must contain at least one number.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(newUser.password)) {
      alert("Password must contain at least one special character.");
      return;
    }
    if (newUser.password.includes(newUser.name)) {
      alert("Password should not contain the username.");
      return;
    }
    if (newUser.password.includes(newUser.email)) {
      alert("Password should not contain the email.");
      return;
    }
    if (newUser.password.includes(" ")) {
      alert("Password should not contain spaces.");
      return;
    }
    if (newUser.name.length < 3 || newUser.name.length > 20) {
      alert("Username must be between 3 and 20 characters long.");
      return;
    }
    if (newUser.email.length < 5 || newUser.email.length > 50) {
      alert("Email must be between 5 and 50 characters long.");
      return;
    }

    if (newUser.password.length < 8 || newUser.password.length > 30) {
      alert("Password must be between 8 and 30 characters long.");
      return;
    }
    if (newUser.password.toLowerCase() === newUser.name.toLowerCase()) {
      alert("Password should not be the same as the username.");
      return;
    }
    if (newUser.password.toLowerCase() === newUser.email.toLowerCase()) {
      alert("Password should not be the same as the email.");
      return;
    }
    if (newUser.password.toLowerCase().includes(newUser.name.toLowerCase())) {
      alert("Password should not contain the username.");
      return;
    }
    if (newUser.password.toLowerCase().includes(newUser.email.toLowerCase())) {
      alert("Password should not contain the email.");
      return;
    }

    if (newUser.password === "password" || newUser.password === "123456") {
      alert("Password is too common. Please choose a stronger password.");
      return;
    }
    if (
      newUser.password === newUser.name ||
      newUser.password === newUser.email
    ) {
      alert("Password should not be the same as the username or email.");
      return;
    }

    if (newUser.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (newUser.password.length > 20) {
      alert("Password must not exceed 20 characters.");
      return;
    }
    if (newUser.password.toLowerCase().includes("password")) {
      alert("Password should not contain the word 'password'.");
      return;
    }

    if (newUser.password.toLowerCase().includes(newUser.name.toLowerCase())) {
      alert("Password should not contain the username.");
      return;
    }

    if (newUser.password.toLowerCase().includes(newUser.email.toLowerCase())) {
      alert("Password should not contain the email.");
      return;
    }

    if (newUser.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (newUser.password.length > 20) {
      alert("Password must not exceed 20 characters.");
      return;
    }
    if (newUser.password.toLowerCase().includes("password")) {
      alert("Password should not contain the word 'password'.");
      return;
    }
    if (newUser.password.toLowerCase().includes(newUser.name.toLowerCase())) {
      alert("Password should not contain the username.");
      return;
    }

    if (newUser.password.toLowerCase().includes(newUser.email.toLowerCase())) {
      alert("Password should not contain the email.");
      return;
    }
    usersInfo.push(newUser);
    router().push("/dashboard");
    // Here you can add logic to handle registration, e.g., saving user data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-8">Register a new account</p>

        <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
          {/* User Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              User Name
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                placeholder: "Enter your name",
              })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="email"
              {...register("email", {
                required: "email is required",
                placeholder: "Enter your email",
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              {...register("password", {
                required: "password is required",
                placeholder: "Enter your password",
              })}
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-blue-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
