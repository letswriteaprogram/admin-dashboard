import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 dark:bg-gray-200 text-white">
      <div className="text-2xl font-bold">Admin Panel</div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-xl cursor-pointer" />
        <ThemeToggle />
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
