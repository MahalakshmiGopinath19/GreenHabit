"use client";

import { useState } from "react";

export default function Blog() {
  const [active, setActive] = useState(null);

  const posts = [
    {
      title: "Sustainable Living Basics",
      tag: "Lifestyle",
      desc: "Start your eco journey with simple habits.",
      content: `Sustainable living is about making conscious daily choices.

Why it matters:
Our lifestyle directly affects pollution, climate change, and natural resources.

What you can do:
• Use reusable bags instead of plastic  
• Switch off unused electrical devices  
• Avoid unnecessary purchases  
• Reduce waste by reusing items  

Benefits:
• Saves money  
• Improves health  
• Protects the environment  

Conclusion:
Small habits done daily create a huge long-term impact 🌱`,
    },

    {
      title: "Reduce Plastic Usage",
      tag: "Environment",
      desc: "Simple swaps to avoid plastic daily.",
      content: `Plastic pollution is a serious global problem.

Why reduce plastic:
Plastic takes hundreds of years to decompose and harms wildlife.

Steps to follow:
• Carry cloth or jute bags  
• Avoid single-use plastics  
• Use reusable water bottles  
• Choose eco-friendly packaging  

Impact:
Reducing plastic helps keep oceans and land clean.

Conclusion:
Choose reusable, not disposable ♻️`,
    },

    {
      title: "Save Water Easily",
      tag: "Water",
      desc: "Easy ways to conserve water.",
      content: `Water is one of the most valuable natural resources.

Why conserve water:
Fresh water is limited and essential for life.

Simple habits:
• Turn off taps when not in use  
• Fix leaking pipes  
• Use buckets instead of long showers  
• Reuse water when possible  

Benefits:
• Saves water  
• Reduces bills  
• Ensures future availability  

Conclusion:
Every drop counts 💧`,
    },

    {
      title: "Energy Saving Tips",
      tag: "Energy",
      desc: "Reduce electricity usage smartly.",
      content: `Energy usage is a major contributor to pollution.

Why save energy:
Reducing energy use lowers carbon emissions.

Practical steps:
• Use LED bulbs  
• Turn off appliances when not in use  
• Use natural lighting during the day  
• Avoid overuse of AC  

Benefits:
• Lower electricity bills  
• Reduced environmental impact  

Conclusion:
Save energy today for a better tomorrow 💡`,
    },

    {
      title: "Eco Friendly Travel",
      tag: "Travel",
      desc: "Travel without harming nature.",
      content: `Transportation contributes heavily to pollution.

Why change travel habits:
Fuel-based vehicles release harmful gases.

Better choices:
• Use public transport  
• Ride bicycles  
• Walk for short distances  
• Carpool with others  

Benefits:
• Cleaner air  
• Better health  

Conclusion:
Travel smart and eco-friendly 🚲`,
    },

    {
      title: "Minimal Lifestyle",
      tag: "Lifestyle",
      desc: "Live more with less.",
      content: `Minimalism is about reducing unnecessary consumption.

Why minimalism:
Overconsumption leads to waste and environmental damage.

How to practice:
• Buy only what you need  
• Reuse items  
• Avoid fast fashion  
• Declutter regularly  

Benefits:
• Less stress  
• More savings  
• Eco-friendly lifestyle  

Conclusion:
Less is more 🌿`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white px-6 py-16">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800">
          Eco Blog 🌱
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Simple habits. Real impact. Sustainable living made easy.
        </p>
      </div>

      {/* MASONRY LAYOUT */}
      <div className="max-w-6xl mx-auto columns-1 md:columns-2 gap-8 space-y-8">

        {posts.map((post, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              onClick={() => setActive(isOpen ? null : index)}
              className={`break-inside-avoid cursor-pointer rounded-2xl p-6 border transition-all duration-300
              ${isOpen 
                ? "bg-white shadow-xl border-emerald-200" 
                : "bg-white/80 hover:shadow-lg border-gray-200"}
              `}
            >

              {/* TAG */}
              <p className="text-sm text-emerald-600 font-medium mb-1">
                {post.tag}
              </p>

              {/* TITLE */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-600 mt-2 text-sm">
                {post.desc}
              </p>

              {/* EXPAND */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
                }`}
              >
                <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed border-l-4 border-emerald-500 pl-4">
                  {post.content}
                </div>
              </div>

              {/* ACTION */}
              <p className="mt-4 text-emerald-600 text-sm font-medium">
                {isOpen ? "▲ Close" : "Read more →"}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}