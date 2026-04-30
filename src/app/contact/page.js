"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-200">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">
          Contact Us 🌿
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Have a question or idea? We love to hear from you.
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-5">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          {/* MESSAGE */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}