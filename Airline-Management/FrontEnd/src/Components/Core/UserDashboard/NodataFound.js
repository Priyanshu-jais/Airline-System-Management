import React from "react";
import { Link } from "react-router-dom";
const NodataFound = () => {
  return (
    <div className="flex w-full justify-center items-center h-[600px]">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">No Flights Found</h2>
        <p className="text-gray-700 mb-6">
          We couldn't find any flights matching your search criteria. Please try
          again later or refine your search.
        </p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NodataFound;
