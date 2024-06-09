import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-3">Explore Marine Life</h1>
        <p className="text-lg">
          Understanding marine creatures and plants is crucial for the
          preservation of our oceans and the health of our planet.
        </p>
        <p className="text-lg">
          Join us in exploring the wonders of marine biodiversity.
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search marine life..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" disabled
          />
        </div>
      </header>
    </div>
  );
}
