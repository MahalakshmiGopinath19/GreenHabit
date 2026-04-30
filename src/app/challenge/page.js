"use client";
import { useState } from "react";

export default function Challenge() {
  const questions = [
    {
      q: "Do you use reusable bags?",
      options: ["Always", "Sometimes", "Never"],
      score: [2, 1, 0],
    },
    {
      q: "How often do you save electricity?",
      options: ["Always", "Sometimes", "Rarely"],
      score: [2, 1, 0],
    },
    {
      q: "Do you conserve water?",
      options: ["Yes", "Sometimes", "No"],
      score: [2, 1, 0],
    },
    {
      q: "Do you recycle waste?",
      options: ["Regularly", "Occasionally", "Never"],
      score: [2, 1, 0],
    },
  ];

  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (score) => {
    setTotalScore(totalScore + score);

    if (step + 1 === questions.length) {
      setFinished(true);
    } else {
      setStep(step + 1);
    }
  };

  const getResult = () => {
    if (totalScore >= 6)
      return {
        text: "🌱 Great! You're already eco-friendly!",
        challenge: "Try planting a tree this week 🌳",
      };
    if (totalScore >= 3)
      return {
        text: "👍 Good start! Improve a bit more.",
        challenge: "Avoid plastic for 1 full day ♻️",
      };
    return {
      text: "⚠️ Needs improvement!",
      challenge: "Start by saving water today 💧",
    };
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-emerald-50 to-green-100">

      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-10">
        Eco Quiz & Challenge 🌱
      </h1>

      {!finished ? (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">

          <h2 className="text-xl font-semibold mb-6">
            {questions[step].q}
          </h2>

          <div className="space-y-4">
            {questions[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(questions[step].score[i])}
                className="w-full p-3 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition"
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow text-center">

          <h2 className="text-2xl font-bold text-emerald-700 mb-4">
            Your Score: {totalScore}
          </h2>

          <p className="text-gray-700 mb-4">
            {getResult().text}
          </p>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="font-semibold text-emerald-700"> 
            Today Challenge:
            </p>
            <p className="mt-2">{getResult().challenge}</p>
          </div>

          <button
            onClick={() => {
              setStep(0);
              setTotalScore(0);
              setFinished(false);
            }}
            className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700"
          >
            Try Again 🔄
          </button>

        </div>
      )}

    </div>
  );
}