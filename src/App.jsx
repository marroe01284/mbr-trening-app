// src/App.jsx eller src/router.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExercisesPage from "./pages/ExercisePage";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import NutritionPage from './components/NutritionPage';
import ProgressPage from './pages/ProgressPage';
// evt import av andre sider

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/øvelser" element={<ExercisesPage />} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/kosthold' element={<NutritionPage/>} />
        <Route path='/fremgang' element={<ProgressPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
