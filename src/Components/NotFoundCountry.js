import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundCountry() {
  return (
    <div className="bg-gray flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-bold text-gray-800">Country Not Found</h2>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Go Back
      </Link>
    </div>
  );
}

export default NotFoundCountry;
