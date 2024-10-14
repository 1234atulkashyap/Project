// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 sm:text-8xl">404</h1>
      <h2 className="text-3xl font-semibold mt-4 sm:text-5xl">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-lg sm:text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/dashboard" className="mt-6 text-blue-500 hover:underline text-lg sm:text-xl">
        Go back to Dashboard Page
      </Link>
    </div>
  );
};

export default NotFound;
