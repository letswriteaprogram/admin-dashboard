// src/components/StatCard.jsx
import React from 'react';

const StatCard = ({ icon, title, value, bg = 'bg-white', textColor = 'text-gray-800' }) => {
  return (
    <div className={`rounded-2xl shadow p-6 ${bg} ${textColor} flex items-center gap-4`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;
