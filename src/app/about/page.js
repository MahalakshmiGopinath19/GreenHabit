"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 space-y-32">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-900 leading-tight">
            Not a platform. <br /> A mindset 🌱
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            GreenHabit helps you build simple eco-friendly habits that actually
            stick — no pressure, no perfection.
          </p>

          <div className="mt-8 inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm rounded-full">
            Simple. Practical. Sustainable.
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-300 blur-2xl opacity-40 rounded-3xl"></div>

          <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 p-10 rounded-3xl shadow-xl">
            <p className="text-5xl mb-4">🌿</p>
            <h3 className="text-xl font-semibold text-emerald-800">
              Small changes → Real impact
            </h3>
            <p className="text-gray-700 mt-2 text-sm">
              Tiny habits, done daily, create lasting change.
            </p>
          </div>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        {[
          "Most people care about the environment — but taking action feels overwhelming.",
          "Too many rules. Too much pressure. Too unrealistic.",
          "GreenHabit makes sustainability simple.",
          "We focus on small habits you can actually stick to.",
          "Because consistency beats perfection every time.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`text-lg ${
              i === 2 ? "text-emerald-700 font-semibold" : "text-gray-700"
            }`}
          >
            {text}
          </motion.p>
        ))}
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          {[
            { step: "01", title: "Understand" },
            { step: "02", title: "Start Small" },
            { step: "03", title: "Stay Consistent" },
            { step: "04", title: "Make Impact" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-emerald-600 text-white rounded-full font-semibold">
                {item.step}
              </div>

              <p className="mt-4 text-gray-800 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-10 rounded-3xl shadow-lg">
          <p className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed">
            “You don’t need to be perfect.  
            You just need to start.”
          </p>
        </div>
      </section>

    </div>
  );
}