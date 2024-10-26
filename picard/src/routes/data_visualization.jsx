import React from "react";
import Header from "../components/header/header"; // Adjust path based on your directory structure

const DataVisualization = () => {
  return (
    <div className="w-screen min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Page Content */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Experiment Header */}
        <h1
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: "Tourney, sans-serif", color: "#FFD60A" }}
        >
          Experiment #x
        </h1>

        {/* Container for visualized data */}
        <div className="w-3/4 h-3/4 bg-gray-200 rounded-lg flex justify-center items-center">
          {/* Placeholder for future data visualization */}
          <span className="text-lg text-gray-700">Data Visualization Area</span>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
