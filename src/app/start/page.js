import Link from "next/link";

export default function Start() {
  const steps = [
    {
      title: "Understand Your Impact 🌍",
      desc: "Learn how daily habits affect the environment and why change matters.",
    },
    {
      title: "Start Small ♻️",
      desc: "Begin with simple habits like reducing plastic and saving water.",
    },
    {
      title: "Be Consistent 🔁",
      desc: "Consistency is key to building long-term sustainable habits.",
    },
    {
      title: "Inspire Others 🌱",
      desc: "Encourage friends and family to adopt eco-friendly practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-800">
          Start Your Eco Journey 🌱
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Becoming eco-friendly doesn’t require big changes. Start small and grow step by step.
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-emerald-700">
              {i + 1}. {step.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* EXTRA INFO */}
      <div className="max-w-4xl mx-auto mt-16 text-center bg-white/70 p-8 rounded-3xl shadow">
        <h2 className="text-2xl font-semibold text-emerald-800">
          Why This Matters 🌍
        </h2>
        <p className="text-gray-600 mt-4">
          Every small action contributes to a healthier planet. By making eco-friendly choices,
          you reduce pollution, conserve resources, and create a better future.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link href="/tips">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full shadow hover:bg-emerald-700 transition hover:scale-105">
            Explore Tips →
          </button>
        </Link>
      </div>

    </div>
  );
}