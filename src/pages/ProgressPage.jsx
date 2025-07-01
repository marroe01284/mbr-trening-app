// src/pages/ProgressPage.jsx

import React from 'react';
import WeeklyPlan from '../components/WeeklyPlan';

export default function ProgressPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-green-800">
          📈 Fremgang
        </h1>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Følg med på hvor mye av treningsplanen du har gjennomført denne uken. Huk av øktene etter hvert som du fullfører dem og hold oversikt over fremgangen din.
        </p>

        <WeeklyPlan />
      </div>
    </div>
  );
}
