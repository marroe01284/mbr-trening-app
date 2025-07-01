import React from 'react';
import { exercises } from '../data/exercises';
import TrainingSection from '../components/TrainingSection';

// Sort and group exercises by category
const groupByCategory = (exercisesArray) => {
  const grouped = {
    'Hurtighet': [],
    'Utholdenhet': [],
    'Styrke': [],
    'Spenst': [],
    'Mobilitet': [],
  };

  exercisesArray.forEach((ex) => {
    if (grouped[ex.category]) {
      grouped[ex.category].push(ex);
    }
  });

  return grouped;
};

const groupedExercises = groupByCategory(exercises);

export default function TrainingPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-900">
          🚀 De magiske øvelsene!
        </h1>

        <TrainingSection
          title="⚡ Hurtighets-trening"
          description="Øvelser som gjør at du blir raskere"
          color="blue"
          exercises={groupedExercises['Hurtighet']}
        />

        <TrainingSection
          title="🏃 Øke stamina"
          description="Hold ut i 90 minutter og litt til."
          color="green"
          exercises={groupedExercises['Utholdenhet']}
        />

        <TrainingSection
          title="💪 Core Styrke"
          description="Bygg styrke i hele kroppen."
          color="red"
          exercises={groupedExercises['Styrke']}
        />

        <TrainingSection
          title="🦵 Hoppe høyere"
          description="Utvikle spenst og eksplosiv kraft."
          color="yellow"
          exercises={groupedExercises['Spenst']}
        />

        <TrainingSection
          title="🧘 Tøying og mobilitet"
          description="Bevegelsesfrihet og skadeforebygging (EKSTREMT VIKTIG)."
          color="purple"
          exercises={groupedExercises['Mobilitet']}
        />
      </div>
    </div>
  );
}