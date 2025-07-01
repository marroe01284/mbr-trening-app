// src/pages/HomePage.jsx

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Marcus sin trenings app!
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Her ligger planen for hvordan du skal trene smart, spise riktig, drikke riktig og hvile riktig!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/øvelser"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
          >
            ⚡ Start Trening
          </Link>

          <Link
            to="/kosthold"
            className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
          >
            🥗 Energi du skal ha!
          </Link>
        </div>
      </div>
    </div>
  );
}
