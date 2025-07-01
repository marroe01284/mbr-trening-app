import { weeklyMeals } from '../data/mealData';
import CollapsibleDay from '../components/CollapsibleDay';

export default function NutritionPage() {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
          🥗 Ukens måltidsplan for unge fotballspillere
        </h1>

        {Object.entries(weeklyMeals).map(([day, meals]) => (
          <CollapsibleDay key={day} day={day} meals={meals} />
        ))}
      </div>
    </div>
  );
}
