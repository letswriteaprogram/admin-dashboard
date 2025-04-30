import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' :  'light'));
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-700 rounded-full">
      {theme === 'light' && <span className="text-yellow-400">🌞</span>}
      {theme === 'dark' && <span className="text-blue-400">🌙</span>}
    </button>
  );
}

export default ThemeToggle;
