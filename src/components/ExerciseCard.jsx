import React from 'react';

export default function ExerciseCard({ exercise }) {
  const { name, category, description, sets, tips, media } = exercise;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow hover:shadow-md transition-all duration-200 max-w-sm w-full">
      <img
        src={media.src}
        alt={media.alt}
        className="w-full h-48 object-contain mb-4"
      />
      <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
        {category}
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">{name}</h2>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <div className="flex justify-between text-sm text-gray-800 font-semibold mb-1">
        <span>Antall:</span> <span>{sets}</span>
      </div>
      <p className="text-sm text-blue-800 italic">Tips: {tips}</p>
    </div>
  );
}