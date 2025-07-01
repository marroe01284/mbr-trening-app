// src/components/Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: 'Hjem', path: '/' },
    { label: 'Trening', path: '/øvelser' },
    { label: 'Kosthold', path: '/kosthold' },
    { label: 'Fremgang', path: '/fremgang' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Link to="/" className="text-3xl font-extrabold text-blue-700 tracking-tight mb-4">
          MBR Trening
        </Link>
        <ul className="flex gap-6 flex-wrap justify-center text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-blue-700 underline' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}