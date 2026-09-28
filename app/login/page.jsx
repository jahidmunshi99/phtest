"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Result:", result);

      if (!response.ok) {
        console.error(result.message);
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
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
                required: "Email is required",
                placeholder: "Enter your email",
              })}
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
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Links */}
          <div className="flex items-center justify-between text-sm">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot Password?
            </a>

            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
