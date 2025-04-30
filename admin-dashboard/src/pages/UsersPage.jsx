// src/pages/UsersPage.jsx
import React from 'react';
import UserTable from '../components/UserTable';

const dummyUsers = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
  { name: 'Carol Doe', email: 'carol@example.com', role: 'Viewer', status: 'Active' },
  { name: 'David King', email: 'david@example.com', role: 'Editor', status: 'Active' },
];

const UsersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <UserTable users={dummyUsers} />
    </div>
  );
};

export default UsersPage;
