// src/components/CollapsibleDay.jsx

import React, { useState } from 'react';

export default function CollapsibleDay({ day, meals }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-blue-700 hover:bg-blue-50 transition"
      >
        <span>📅 {day}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="p-4 space-y-6 border-t">
          {Object.entries(meals).map(([type, content]) => (
            <div key={type}>
              <h3 className="text-md font-bold text-green-700 mb-2">{mealIcon(type)} {type}</h3>
              <ul className="space-y-3">
                {content.map((item) => (
                  <li key={item.name} className="bg-blue-50 rounded-lg p-3 border">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-blue-800">{item.name}</span>
                      <span className="text-sm text-gray-600">{item.amount}</span>
                    </div>
                    <p className="text-sm text-green-800">{item.why}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function mealIcon(type) {
  const icons = {
    Frokost: '🥣',
    Lunsj: '🍲',
    Middag: '🍛',
    Mellommåltid: '🍎',
    Vann: '💧',
  };
  return icons[type] || '🍽️';
}
