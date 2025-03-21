'use client';

import { useState } from 'react';

const workouts = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  exercises: [
    { name: "Pelvic Tilts", reps: "3 sets of 10" },
    { name: "Bridges", reps: "3 sets of 12" },
    { name: "Bird-Dog", reps: "3 sets of 10 each side" },
    { name: "Cat-Cow Stretch", reps: "2 sets of 10" },
  ]
}));

export default function Home() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    setCompletedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">30-Day Lower Back Workout</h1>
      <ul className="space-y-4">
        {workouts.map(({ day, exercises }) => (
          <li key={day} className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Day {day}</h2>
              <button
                onClick={() => toggleDay(day)}
                className={`text-sm px-2 py-1 rounded ${
                  completedDays.includes(day)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {completedDays.includes(day) ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
            <ul className="mt-2 list-disc list-inside">
              {exercises.map((ex, idx) => (
                <li key={idx}>{ex.name} — {ex.reps}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}