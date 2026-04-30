import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">

        {/* BRAND */}
        <div>
          <h2 className="text-lg font-semibold">GreenHabit 🌿</h2>
          <p className="mt-2 text-emerald-100">
            Making sustainability simple and part of everyday life.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1 text-emerald-100">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/tips" className="hover:text-white">Tips</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-medium mb-2">Contact</h3>
          <p className="text-emerald-100">support@greenhabit.com</p>
          <p className="text-emerald-100 mt-1">Chennai, India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-emerald-200 text-xs pb-6">
        © 2026 GreenHabit. All rights reserved.
      </div>

    </footer>
  );
}