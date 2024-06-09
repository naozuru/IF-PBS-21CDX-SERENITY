import React from "react";

export default function AdminDashboard() {
  return (
    <div className="m-2">
      <div className="flex justify-center font-bold text-xl mb-2">
        <h1>Admin Dashboard</h1>
      </div>

      <h1>Progres:</h1>
      <div className="inline-grid">
        <div className="inline-flex">
          <label className="mr-4">Add Creature:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Edit Creature:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Delete Creature:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Search Creature:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Add Plant:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Edit Plant:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Delete Plant:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
        <div className="inline-flex">
          <label className="mr-4">Search Plant:</label>
          <h1 className="text-emerald-300">Work</h1>
        </div>
      </div>
    </div>
  );
}
