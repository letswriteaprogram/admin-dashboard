// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages (can be components or proper page files)
import DashboardPage from './pages/DashboardPage';
import Reports from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';

// Pages (can be components or proper page files)
// import DashboardPage from './pages/Dashboard';
// import UsersPage from './pages/UsersPage';
// import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
