import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">

      {/* LOGO */}
      <h1 className="text-xl font-semibold tracking-tight">
        GreenHabit 🌱
      </h1>

      {/* LINKS */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-emerald-200 transition">Home</Link>
        <Link href="/about" className="hover:text-emerald-200 transition">About</Link>
        <Link href="/tips" className="hover:text-emerald-200 transition">Tips</Link>
        <Link href="/blog" className="hover:text-emerald-200 transition">Blog</Link>
        <Link href="/contact" className="hover:text-emerald-200 transition">Contact</Link>
      </div>

    </nav>
  );
}