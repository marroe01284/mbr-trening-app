// src/components/TrainingSection.jsx

import React from 'react';
import ExerciseCard from './ExerciseCard';

export default function TrainingSection({ title, description, color, exercises }) {
  const titleColorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-500',
    purple: 'text-purple-600'
  };

  return (
    <section className="mb-14">
      <div className="text-center mb-8">
        <h2 className={`text-2xl md:text-3xl font-bold ${titleColorMap[color]}`}>{title}</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
}
