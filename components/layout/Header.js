import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Link from "next/link";

const Header = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  let user = null;

  if (token) {
    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-sky-950 py-2 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Navigation */}
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/dashboard" className="hover:text-sky-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/dashboard" className="hover:text-sky-300">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/pa-dashboard" className="hover:text-sky-300">
              Posts
            </Link>
          </li>
        </ul>

        {/* User Information */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="text-right">
                <p className="font-semibold">{user.name}</p>

                <p className="text-xs text-sky-200">
                  {user.email} · {user.role}
                </p>
              </div>

              <form action="/api/logout" method="POST">
                <button
                  type="submit"
                  className="rounded-lg bg-red-500 px-4 py-2 font-semibold hover:bg-red-600"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
