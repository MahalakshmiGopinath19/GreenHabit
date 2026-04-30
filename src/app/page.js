"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const tips = [
    { title: "Reduce Plastic ♻️", desc: "Avoid plastic usage", steps: ["Use cloth bags", "Avoid bottles", "Reuse items"] },
    { title: "Save Energy 💡", desc: "Reduce electricity", steps: ["Turn off lights", "Use LED", "Unplug devices"] },
    { title: "Save Water 💧", desc: "Use water wisely", steps: ["Fix leaks", "Turn off taps", "Use buckets"] },
    { title: "Plant Trees 🌳", desc: "Improve environment", steps: ["Plant trees", "Water plants", "Encourage others"] },
    { title: "Reduce Waste 🗑️", desc: "Minimize waste", steps: ["Recycle", "Reuse", "Avoid excess"] },
    { title: "Eco Travel 🚲", desc: "Travel smart", steps: ["Use cycle", "Carpool", "Public transport"] },
  ];

  return (
    <div className="px-4 space-y-20">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-br from-emerald-100 via-white to-green-200 rounded-3xl shadow-md">
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-900">
          Live Green. <br /> Live Better 🌱
        </h1>

        <p className="mt-6 text-gray-700 max-w-xl mx-auto text-lg">
          Small eco-friendly habits can create a big impact.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/start">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition">
              Get Started →
            </button>
          </Link>

          <Link href="/challenge">
            <button className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition">
              Take Challenge 🚀
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Sustainable Living?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Reduce Waste ♻️", "Save Water 💧", "Protect Nature 🌳"].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-emerald-700">{item}</h3>
              <p className="text-gray-500 mt-2">Simple ways to improve your lifestyle.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECO JOURNEY SECTION */}
<section>
  <h2 className="text-3xl font-semibold text-center mb-12 text-emerald-800">
    Your Eco Journey 🌱
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[
      {
        step: "01",
        title: "Learn",
        desc: "Understand how your daily habits affect the environment.",
      },
      {
        step: "02",
        title: "Start Small",
        desc: "Begin with simple eco-friendly actions.",
      },
      {
        step: "03",
        title: "Build Habits",
        desc: "Make sustainability part of your routine.",
      },
      {
        step: "04",
        title: "Make Impact",
        desc: "Inspire others and create change.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative p-6 bg-white/80 rounded-2xl shadow hover:shadow-lg transition"
      >
        {/* Step Number */}
        <div className="absolute -top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm shadow">
          {item.step}
        </div>

        <h3 className="text-lg font-semibold text-emerald-700 mt-4">
          {item.title}
        </h3>

        <p className="text-gray-500 mt-2 text-sm">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>
      <section className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-3xl p-10">

  <h2 className="text-3xl font-semibold text-emerald-800 text-center mb-12">
    What Happens When You Go Green? 🌍
  </h2>

  <div className="max-w-3xl mx-auto relative">

    {/* vertical line */}
    <div className="absolute left-4 top-0 w-1 h-full bg-emerald-300 rounded"></div>

    {[
      {
        title: "Cleaner Environment",
        desc: "Less pollution and waste leads to a healthier planet.",
        icon: "🌱",
      },
      {
        title: "Save Money",
        desc: "Using less energy reduces your monthly expenses.",
        icon: "💰",
      },
      {
        title: "Better Lifestyle",
        desc: "Eco habits improve your health and well-being.",
        icon: "❤️",
      },
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-6 mb-10 relative">

        {/* circle */}
        <div className="w-10 h-10 flex items-center justify-center bg-emerald-600 text-white rounded-full z-10">
          {item.icon}
        </div>

        {/* content */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700">
            {item.title}
          </h3>
          <p className="text-gray-600 mt-1 text-sm">
            {item.desc}
          </p>
        </div>

      </div>
    ))}

  </div>
</section>

    </div>
  );
}