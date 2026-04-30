"use client";
import { useState } from "react";

export default function Tips() {
  const [activeIndex, setActiveIndex] = useState(null);

  const tips = [
    { title: "Reduce Plastic Usage", icon: "♻️", desc: "Minimize plastic use.", steps: ["Carry reusable bags", "Avoid plastic bottles", "Use eco packaging"] },
    { title: "Save Energy", icon: "💡", desc: "Lower electricity usage.", steps: ["Turn off lights", "Use LED bulbs", "Unplug devices"] },
    { title: "Conserve Water", icon: "💧", desc: "Use water responsibly.", steps: ["Fix leaks", "Turn off taps", "Use buckets"] },
    { title: "Eco Travel", icon: "🚲", desc: "Eco-friendly transport.", steps: ["Use bicycle", "Carpool", "Public transport"] },
    { title: "Plant Trees", icon: "🌳", desc: "Improve environment.", steps: ["Plant locally", "Water plants", "Encourage others"] },
    { title: "Reduce Waste", icon: "🗑️", desc: "Minimize waste.", steps: ["Recycle", "Reuse", "Avoid overbuying"] },

    { title: "Eat Local Food", icon: "🥗", desc: "Support local farmers.", steps: ["Buy local", "Eat seasonal", "Avoid imports"] },
    { title: "Use Solar Energy", icon: "☀️", desc: "Use renewable energy.", steps: ["Install solar", "Use solar lights", "Save electricity"] },
    { title: "Minimal Living", icon: "🏡", desc: "Live simply.", steps: ["Declutter", "Buy less", "Reuse items"] },
    { title: "Composting", icon: "🌱", desc: "Convert waste to fertilizer.", steps: ["Collect waste", "Make compost", "Use in plants"] },
    { title: "Green Shopping", icon: "🛍️", desc: "Choose eco products.", steps: ["Buy sustainable", "Avoid plastic", "Choose durable"] },
    { title: "Save Paper", icon: "📄", desc: "Reduce paper usage.", steps: ["Use digital", "Print less", "Recycle paper"] },

    { title: "Avoid Fast Fashion", icon: "👕", desc: "Reduce clothing waste.", steps: ["Buy quality clothes", "Reuse outfits", "Donate"] },
    { title: "Use Reusable Items", icon: "🔁", desc: "Avoid single-use.", steps: ["Use steel bottles", "Cloth napkins", "Reusable containers"] },
    { title: "Save Fuel", icon: "⛽", desc: "Reduce fuel usage.", steps: ["Drive less", "Maintain vehicles", "Use public transport"] },
    { title: "Switch Off Devices", icon: "🔌", desc: "Save electricity.", steps: ["Turn off plugs", "Avoid standby", "Unplug chargers"] },
    { title: "Use Natural Light", icon: "🌞", desc: "Reduce energy usage.", steps: ["Open windows", "Use daylight", "Avoid lights"] },
    { title: "Grow Plants at Home", icon: "🪴", desc: "Improve air quality.", steps: ["Keep plants", "Water regularly", "Maintain"] },

    { title: "Avoid Food Waste", icon: "🍽️", desc: "Use food wisely.", steps: ["Cook needed amount", "Store properly", "Reuse leftovers"] },
    { title: "Use Public Dustbins", icon: "🚮", desc: "Keep surroundings clean.", steps: ["Avoid littering", "Use bins", "Spread awareness"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-10">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-emerald-800 mb-10 text-center">
        Eco Tips 🌱
      </h1>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(isActive ? null : index)
              }
              className={`cursor-pointer p-5 rounded-2xl transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-br from-emerald-300 via-green-200 to-green-100 border border-emerald-400 shadow-xl scale-[1.04]"
                  : "bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-gray-200 hover:shadow-lg hover:-translate-y-1"
              }`}
            >

              {/* ICON */}
              <div className={`text-3xl ${isActive ? "text-emerald-800" : "text-emerald-600"}`}>
                {tip.icon}
              </div>

              {/* TITLE */}
              <h2 className={`text-lg font-semibold mt-3 ${isActive ? "text-emerald-900" : "text-gray-800"}`}>
                {tip.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm mt-2 text-gray-600">
                {tip.desc}
              </p>

              {/* EXPAND */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-sm text-gray-700">
                  {tip.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg shadow-sm"
                    >
                      <span className="text-emerald-600">✔</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}