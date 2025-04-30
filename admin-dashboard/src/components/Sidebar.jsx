import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaChartLine } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-5 text-xl font-semibold">Admin Dashboard</div>
      <ul className="mt-8">
        <li>
          <Link to="/" className="flex items-center p-4 hover:bg-blue-600">
            <FaHome className="mr-3" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="flex items-center p-4 hover:bg-blue-600">
            <FaUsers className="mr-3" /> Users
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center p-4 hover:bg-blue-600">
            <FaChartLine className="mr-3" /> Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
