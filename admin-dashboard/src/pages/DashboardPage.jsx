// src/pages/DashboardPage.jsx
import React from 'react';
import StatCard from '../components/StatCard';
import { FaUsers, FaChartLine, FaFileAlt, FaDollarSign } from 'react-icons/fa';

const stats = [
  { title: 'Total Users', value: '4,320', icon: <FaUsers />, bg: 'bg-blue-100', textColor: 'text-blue-800' },
  { title: 'Active Users', value: '1,089', icon: <FaChartLine />, bg: 'bg-green-100', textColor: 'text-green-800' },
  { title: 'Reports Submitted', value: '320', icon: <FaFileAlt />, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
  { title: 'Monthly Revenue', value: '$15,920', icon: <FaDollarSign />, bg: 'bg-purple-100', textColor: 'text-purple-800' },
];

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
