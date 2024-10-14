


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show logout success toast
    toast.success('Logout successful!');

    // Navigate to login page after a delay to allow the toast to be seen
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed md:relative md:w-64 bg-white shadow-md flex flex-col h-full transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {isSidebarOpen && (
            <button onClick={() => setIsSidebarOpen(false)} aria-label="Close Sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <ul className="mt-4 flex-grow">
          <li>
            <Link to="/dashboard" className="block p-4 text-gray-800 hover:bg-gray-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile" className="block p-4 text-gray-800 hover:bg-gray-200">Profile</Link>
          </li>
          <li>
            <Link to="/settings" className="block p-4 text-gray-800 hover:bg-gray-200">Settings</Link>
          </li>
        </ul>
        {/* Logout Button at the Bottom */}
        <div className="p-4 border-t">
          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Welcome to Your Dashboard</h2>
          <Link to="/profile">
            <Button className="ml-4">
              User Profile
            </Button>
          </Link>
        </header>

        {/* Main Content Area */}
        <div className="bg-white shadow-lg rounded p-6">
          <h3 className="text-xl font-semibold mb-4">Overview</h3>
          <p>Your main content goes here.</p>
          {/* You can add charts, stats, etc. */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
