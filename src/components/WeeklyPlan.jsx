import React, { useEffect, useState } from 'react';

const defaultPlan = {
  Mandag: ['Planke', 'Push-ups'],
  Tirsdag: ['Kneløft', 'Fartslek'],
  Onsdag: ['Kassehopp'],
  Torsdag: ['Reaksjonssprint', 'Shuttle Run'],
  Fredag: ['Vertikalhopp', 'Planke'],
  Lørdag: ['Hofteåpner', 'Fartslek'],
  Søndag: ['Hvile'],
};

const getInitialProgress = () => {
  try {
    const stored = localStorage.getItem('weeklyProgress');
    if (stored) return JSON.parse(stored);
  } catch (err) {
    console.error('Feil ved henting av localStorage:', err);
  }

  const emptyProgress = {};
  Object.entries(defaultPlan).forEach(([day, exercises]) => {
    emptyProgress[day] = {};
    exercises.forEach((ex) => {
      emptyProgress[day][ex] = false;
    });
  });
  return emptyProgress;
};

export default function WeeklyPlan() {
  const [completed, setCompleted] = useState(getInitialProgress);

  useEffect(() => {
    localStorage.setItem('weeklyProgress', JSON.stringify(completed));
  }, [completed]);

  const toggle = (day, exercise) => {
    setCompleted((prev) => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [exercise]: !prev?.[day]?.[exercise],
      },
    }));
  };

  const resetWeek = () => {
    const reset = {};
    Object.entries(defaultPlan).forEach(([day, exercises]) => {
      reset[day] = {};
      exercises.forEach((ex) => {
        reset[day][ex] = false;
      });
    });
    setCompleted(reset);
  };

  const totalExercises = Object.values(defaultPlan)
    .flat()
    .filter((e) => e !== 'Hvile').length;

  const completedCount = Object.entries(completed).reduce((count, [_, exercises]) => {
    return (
      count +
      Object.entries(exercises).filter(([name, done]) => name !== 'Hvile' && done === true).length
    );
  }, 0);

  const percentage = Math.round((completedCount / totalExercises) * 100);

  return (
    <div className="space-y-6">
      {/* Progresjonsbar */}
      <div className="mb-4">
        <p className="mb-2 text-gray-700 font-semibold text-lg">
          📅 Fremgang denne uka: {percentage}%
        </p>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <button
          onClick={resetWeek}
          className="mt-3 text-sm text-red-600 underline hover:text-red-800"
        >
          🔁 Nullstill uke
        </button>
      </div>

      {/* Dager og økter */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Object.entries(defaultPlan).map(([day, exercises]) => (
          <div
            key={day}
            className="border border-gray-200 rounded-2xl shadow-sm p-4 bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-3">{day}</h2>
            {exercises.map((exercise) => (
              <label
                key={exercise}
                className="flex items-center gap-3 mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={completed?.[day]?.[exercise] || false}
                  onChange={() => toggle(day, exercise)}
                  className="w-5 h-5 text-green-600 accent-green-500 cursor-pointer"
                />
                <span
                  className={`text-gray-800 group-hover:underline ${
                    completed?.[day]?.[exercise] ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {exercise}
                </span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
