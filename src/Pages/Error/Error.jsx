import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] text-white px-4">
      <div className="text-center max-w-md">
        {/* Big Error Code */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-pulse">
          404
        </h1>

        {/* Error Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-medium shadow-lg transition duration-300 cursor-pointer">
          <FaHome className="text-lg" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
