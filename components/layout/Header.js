import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-sky-950 text-white border-b sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex justify-between items-center text-center gap-5">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/pa-dashboard">Posts</Link>
          </li>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
