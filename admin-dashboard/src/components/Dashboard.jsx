import React from 'react';
import SalesChart from './SalesChart';
import UserActivityChart from './UserActivityChart';

function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {/* Sales Over Time Chart */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Over Time</h2>
        <SalesChart />
      </div>

      {/* User Activity Chart */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Activity</h2>
        <UserActivityChart />
      </div>
    </div>
  );
}

export default Dashboard;
